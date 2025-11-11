// file: src/utils/Math.jsx
import React from 'react';
import 'katex/dist/katex.min.css';
import katex from 'katex';

export const InlineMath = ({math}) => {
    const html = katex.renderToString(math, {
        throwOnError: false,
        displayMode: false,
    });

    return <span dangerouslySetInnerHTML={{__html: html}}/>;
};

export const BlockMath = ({math}) => {
    const html = katex.renderToString(math, {
        throwOnError: false,
        displayMode: true,
    });

    return (
        <div
            style={{
                padding: '1.5rem',
                background: 'rgba(147, 51, 234, 0.05)',
                borderRadius: '0.75rem',
                margin: '1.5rem 0',
                textAlign: 'center',
                overflow: 'auto'
            }}
            dangerouslySetInnerHTML={{__html: html}}
        />
    );
};

export const Math = ({children, display = false}) => {
    if (display) {
        return <BlockMath math={children}/>;
    }
    return <InlineMath math={children}/>;
};