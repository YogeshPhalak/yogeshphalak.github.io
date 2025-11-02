import React, {useEffect, useRef, useCallback} from 'react';

const StaticFractalCanvas = ({isDarkMode}) => {
    const canvasRef = useRef(null);
    const imageDataRef = useRef(null);

    const burningShip = (cx, cy, maxIter) => {
        let x = 0, y = 0, xx = 0, yy = 0, iteration = 0;
        while (xx + yy <= 4 && iteration < maxIter) {
            const xtemp = xx - yy + cx;
            y = 2 * Math.abs(x * y) + cy;
            x = Math.abs(xtemp);
            xx = x * x;
            yy = y * y;
            iteration++;
        }
        return iteration;
    };

    // The 'isDark' parameter is no longer needed here.
    const drawFractal = useCallback(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d', {alpha: false});
        const width = canvas.width;
        const height = canvas.height;
        const dpr = window.devicePixelRatio || 1;
        const displayWidth = width / dpr;
        const displayHeight = height / dpr;

        const zoom = 0.004;
        const offsetX = -0.4;
        const offsetY = -0.6;
        const maxIter = 100;

        const imageData = imageDataRef.current;
        if (!imageData || imageData.width !== width || imageData.height !== height) return;
        const data = imageData.data;

        for (let px = 0; px < width; px++) {
            for (let py = 0; py < height; py++) {
                const x0 = (px / dpr - displayWidth / 2) * zoom + offsetX;
                const y0 = (py / dpr - displayHeight / 2) * zoom + offsetY;

                const iter = burningShip(x0, y0, maxIter);
                let red = 0, green = 0, blue = 0, alpha = 0;

                if (iter < maxIter) {
                    const ratio = iter / maxIter;
                    // We ALWAYS use the nice dark mode colors, regardless of the theme.
                    const hue = 250 + ratio * 120;
                    const s = 0.9;
                    const l = 0.3 + Math.pow(ratio, 0.5) * 0.4;
                    const a = 0.5 + ratio * 0.5;
                    [red, green, blue] = hslToRgb(hue / 360, s, l);
                    alpha = Math.round(a * 255);
                }

                const index = (py * width + px) * 4;
                data[index] = red;
                data[index + 1] = green;
                data[index + 2] = blue;
                data[index + 3] = alpha;
            }
        }
        ctx.putImageData(imageData, 0, 0);
    }, []);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');

        const handleResize = () => {
            const dpr = window.devicePixelRatio || 1;
            const rect = canvas.getBoundingClientRect();
            if (rect.width > 0 && rect.height > 0) {
                canvas.width = rect.width * dpr;
                canvas.height = rect.height * dpr;
                ctx.scale(dpr, dpr);
                imageDataRef.current = ctx.createImageData(canvas.width, canvas.height);
                // The draw function is now simpler and doesn't need the theme prop
                drawFractal();
            }
        };

        handleResize();

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
        // We only need to redraw when the component mounts or the draw function changes.
    }, [drawFractal]);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 z-0 w-full h-full"
            style={isDarkMode ? {
                mixBlendMode: 'screen',
                opacity: 0.8,
            } : {
                filter: 'invert(1) grayscale(1) contrast(1.2)',
                mixBlendMode: 'multiply',
                opacity: 0.7,
            }}
        />
    );
};

// Helper function (unchanged)
function hslToRgb(h, s, l) {
    let r, g, b;
    if (s === 0) {
        r = g = b = l;
    } else {
        const hue2rgb = (p, q, t) => {
            if (t < 0) t += 1;
            if (t > 1) t -= 1;
            if (t < 1 / 6) return p + (q - p) * 6 * t;
            if (t < 1 / 2) return q;
            if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
            return p;
        };
        const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        const p = 2 * l - q;
        r = hue2rgb(p, q, h + 1 / 3);
        g = hue2rgb(p, q, h);
        b = hue2rgb(p, q, h - 1 / 3);
    }
    return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
}

export default StaticFractalCanvas;