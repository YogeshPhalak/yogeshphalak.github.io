// file: portfolioData.js
import {
    GraduationCap, BookOpen, Code, Users,
} from 'lucide-react';

// Data for Journey section

export const journey = [{
    id: 1,
    date: "Present",
    title: "Ph.D. in Engineering Mechanics",
    description: "Pursuing doctoral research at the DARE Lab, focusing on mechano-intelligence, physical reservoir computing, and high-speed simulation of nonlinear dynamics.",
    location: "Blacksburg, VA",
    category: "Milestone",
    url: "https://www.vt.edu/"
}, {
    id: 2,
    date: "May 2025",
    title: "M.S. in Engineering Mechanics",
    description: "Completed Master's thesis on optimizing snake locomotion using a variational and analytical framework for friction and normal force modulation.",
    location: "Blacksburg, VA",
    category: "Milestone",
    url: "https://vtechworks.lib.vt.edu/items/9b5036be-fb58-4d1f-a9dd-b5a9e01e8ee7"
}, {
    id: 3,
    date: "August 2022",
    title: "Awarded Pratt Fellowship",
    description: "Received the prestigious Pratt fellowship from the Dept. of Biomedical Engineering and Mechanics in recognition of academic and research potential.",
    location: "Virginia Tech",
    category: "Achievement",
    url: "https://www.cals.vt.edu/academic-programs/current/graduate/pratt.html"
}, {
    id: 4,
    date: "June 2022",
    title: "Head of UAV Navigation & Control Systems",
    description: "Led software architecture development for high-payload UAVs at Octobotics Tech, focusing on control, localization, and robotic manipulation.",
    location: "Noida, India",
    category: "Growth",
    url: "https://photos.app.goo.gl/yDX625C4TKb3Vd4M6"
}, {
    id: 5,
    date: "June 2021",
    title: "Developed Indoor Drone Navigation Stack",
    description: "As an intern at FlytBase, engineered an indoor navigation stack using ORB-SLAM and developed C++/Python SDKs for drone docking stations.",
    location: "Pune, India",
    category: "Growth",
    url: "https://drive.google.com/file/d/1q3XXqSTcHIM_hwUPwzJ7vbrOtb-X6Sqb/view?usp=sharing"
}, {
    id: 6,
    date: "June 2020",
    title: "Graduated with B.Tech in Electrical Engineering",
    description: "Completed Bachelor's from VNIT with a thesis on the design and development of a fully autonomous delivery robot.",
    location: "Nagpur, India",
    category: "Milestone",
    url: "https://arxiv.org/abs/2103.09229"
}, {
    id: 7,
    date: "July 2019",
    title: "First Research Internship at Virginia Tech",
    description: "Interned at VT's Dept. of Biomedical Engineering & Mechanics, optimizing snake robot kinematics through a custom Arduino-MATLAB controller.",
    location: "Blacksburg, VA",
    category: "Growth",
    url: "https://drive.google.com/file/d/1D1uVCb8gkPx-yS6Ad9Or3WslyRbHdwoT/view?usp=sharing"
}, {
    id: 8,
    date: "September 2018",
    title: "Remote Internship at National University of Singapore",
    description: "Created mathematical models and simulations for cable-driven flexible manipulators using MATLAB and Simulink as a remote research intern.",
    location: "NUS, Singapore",
    category: "Growth",
    url: "https://github.com/YogeshPhalak/Simulation-Of-Cable-Driven-Flexible-Manipulators-Using-Matlab-and-Simulink"
}];

// Data for Research/Projects section
// A comprehensive list of your projects.
// The 'date' property in 'YYYY-MM-DD' format is crucial for chronological sorting.
export const projects = [{
    date: '2025-10-31',
    category: ['repository', 'graphics'],
    title: 'PhalcoPulse: A Real-Time 3D Visualization Engine',
    description: 'An independent software project to develop a lightweight 3D engine in Python using PyOpenGL for rapid prototyping of scientific simulations and animations.',
    link: 'https://github.com/PhalcoAi/PhalcoPulse',
    tags: ['PyOpenGL', 'Python', '3D Graphics', 'Scientific Visualization', 'Simulation'],
    image: 'https://github.com/PhalcoAi/PhalcoPulse/blob/main/docs/PhalcoPulseStudio.gif?raw=true',
    stars: 42, // You can update this value
}, {
    date: '2025-10-10',
    category: ['presentation', 'publication'],
    title: 'Hyper-Yoshimura: Unleashing Meta-Stability in Deployable Robots',
    venue: 'ME4734 Robotics and Mechanisms Seminar, Virginia Tech',
    link: '#', // Add link to slides if available
    tags: ['Origami', 'Robotics', 'Deployable Structures', 'Nonlinear Dynamics'],
    image: 'https://images.unsplash.com/photo-1621237198-1243534578d4?w=600',
    audience: 'Faculty & Graduate Students',
}, {
    date: '2025-05-19',
    category: ['publication', 'presentation'],
    title: 'Hyper Yoshimura: A Novel Folding Pattern for Deployable Robots',
    venue: 'Submitted to Science Advances (Preprint Available)',
    link: 'https://arxiv.org/abs/2505.09919',
    tags: ['Origami', 'Robotics', 'Metastability', 'Research'],
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600',
    impact: 'High',
}, {
    date: '2025-05-29',
    category: ['repository'],
    title: 'ChapRotorDynamics: Chaos in the Chaplygin Sleigh',
    description: 'A Python repository for exploring chaotic behavior in the dynamic Chaplygin Sleigh with an attached rotor system.',
    link: 'https://github.com/YogeshPhalak/ChapRotorDynamics',
    tags: ['Chaos Theory', 'Nonholonomic Dynamics', 'Python', 'Simulation'],
    image: 'https://images.unsplash.com/photo-1614332287897-cdc485fa562d?w=600',
    stars: 1,
}, {
    date: '2024-12-01',
    category: ['publication'],
    title: 'Optimal Snake Locomotion on Flat Surfaces: An Analytical Framework',
    venue: 'Accepted to Philosophical Transactions A',
    link: 'https://arxiv.org/abs/2412.03725',
    tags: ['Biomechanics', 'Robotics', 'Snake Locomotion', 'Analytical Mechanics'],
    image: 'https://images.unsplash.com/photo-1605833192285-246995383f98?w=600',
    impact: 'High',
}, {
    date: '2024-08-27',
    category: ['publication', 'presentation'],
    title: 'Golden Ratio Yoshimura for Meta-Stable Deployment',
    venue: 'Philosophical Transactions A / Presented at IDETC-CIE 2024',
    link: 'https://royalsocietypublishing.org/doi/10.1098/rsta.2024.0009',
    tags: ['Origami', 'Deployable Structures', 'Mechanical Design'],
    image: 'https://images.unsplash.com/photo-1621980229871-398858258e70?w=600',
    impact: 'High',
}, {
    date: '2023-12-06',
    category: ['presentation', 'research'],
    title: 'How Snakes Regulate Weight to Compensate for Frictional Anisotropy',
    venue: 'Graduate Student Seminar & SICB Regional Meeting 2023',
    link: 'https://drive.google.com/file/d/1CI0QreH51XmhJEkB2qAxp50IjFMIgJ8w/view?usp=sharing',
    tags: ['Biomechanics', 'Snake Locomotion', 'Friction', 'Dynamics'],
    image: 'https://images.unsplash.com/photo-1568043219355-632634d20386?w=600',
    audience: '100+ Researchers',
}, {
    date: '2023-07-31',
    category: ['research', 'graphics'],
    title: 'Origami-Inspired Reservoir Computing',
    description: 'Summer research project investigating origami mechanical systems as physical reservoirs for computation, including development of a 3D animator.',
    link: 'https://drive.google.com/file/d/1KpoNI85WCr1AHlICNRPIOKTKpmQfqNJ1/view?usp=drive_link',
    tags: ['Origami', 'Reservoir Computing', 'Nonlinear Dynamics', '3D Visualization'],
    image: 'https://images.unsplash.com/photo-1526932372479-e58548957e6a?w=600',
}, {
    date: '2023-05-29',
    category: ['repository'],
    title: 'Cellular Automata for Natural Pattern Adaptation',
    description: 'A model exploring pattern adaptation in biology (e.g., animal coats) using cellular automata. Final project for a Mathematical Biology course.',
    link: 'https://github.com/YogeshPhalak/Natural-Pattern-Adaptation-CA',
    tags: ['Cellular Automata', 'Computational Biology', 'Pattern Formation', 'Python'],
    image: 'https://github.com/YogeshPhalak/Natural-Pattern-Adaptation-CA/raw/main/img/host_parasite1.gif',
    stars: 2,
}, {
    date: '2022-12-07',
    category: ['repository', 'graphics'],
    title: 'Realistic Snake Gaits in a C++ Game',
    description: 'A simple snake game developed with OpenGL that uses a discrete snake robot model to produce realistic slithering movements.',
    link: 'https://github.com/YogeshPhalak/Snake-Game-With-Realistic-Snake-Gaits',
    tags: ['C++', 'OpenGL', 'Game Development', 'Snake Gaits', 'Robotics'],
    image: 'https://github.com/YogeshPhalak/Snake-Game-With-Realistic-Snake-Gaits/raw/master/Media/SnakeGame.gif?w=600',
    stars: 9,
}, {
    date: '2021-10-27',
    category: ['repository', 'publication'],
    title: 'Decentralized Relative Localization for Multi-Robot Systems',
    description: 'A system based on Relative Signal Strength (RSS) and Tetrahedral Geometry for decentralized localization. Published at IEEE INOCON 2020.',
    link: 'https://github.com/YogeshPhalak/tetra-edm-localizer',
    tags: ['Multi-Robot Systems', 'Localization', 'MATLAB', 'Robotics'],
    image: 'https://images.unsplash.com/photo-1554310624-78e015822e1a?w=600',
    stars: 5,
}, {
    date: '2022-12-07',
    category: ['repository', 'graphics'],
    title: 'Image Compression with Haar Wavelets',
    description: 'A Python implementation of image compression and reconstruction using the Discrete Haar Wavelet Transform for decomposition and thresholding.',
    link: 'https://github.com/YogeshPhalak/Wavelet-Analysis-Image-Compression-Using-Discrete-Haar-Wavelet-Transform',
    tags: ['Python', 'Image Compression', 'Wavelet Transform', 'Haar Wavelet', 'NumPy', 'OpenCV'],
    image: 'https://github.com/YogeshPhalak/Wavelet-Analysis-Image-Compression-Using-Discrete-Haar-Wavelet-Transform./raw/master/media/Haar.gif?w=600',
    stars: 1,
}, {
    date: '2020-08-28',
    category: ['repository'],
    title: 'Simulation of Snake Locomotion Mechanisms',
    description: 'MATLAB implementation of various snake gaits (e.g., lateral undulation) on a simplified kinematical model of a discrete snake robot.',
    link: 'https://github.com/YogeshPhalak/Simulation-of-the-Snake-locomotion-mechanisms',
    tags: ['MATLAB', 'Snake Robot', 'Kinematics', 'Gait Simulation'],
    image: 'https://github.com/YogeshPhalak/Simulation-of-the-Snake-locomotion-mechanisms/raw/master/Media/SWDG_A_3_5.gif?w=600',
    stars: 38,
}, {
    date: '2020-08-18',
    category: ['repository'],
    title: 'Simulation of Cable-Driven Flexible Manipulators',
    description: 'Work from a remote internship at NUS, focused on simulating flexible, cable-driven manipulators using MATLAB, Simulink, and Simscape.',
    link: 'https://github.com/YogeshPhalak/Simulation-Of-Cable-Driven-Flexible-Manipulators-Using-Matlab-and-Simulink',
    tags: ['MATLAB', 'Simulink', 'Robotics', 'Flexible Manipulators'],
    image: 'https://images.unsplash.com/photo-1635069733223-3e4a3780354c?w=600',
    stars: 15,
}, {
    date: '2020-08-01',
    category: ['publication', 'hardware'],
    title: 'Design and Development of an Autonomous Delivery Robot',
    venue: 'Bachelor\'s Thesis, VNIT Nagpur (Published on arXiv)',
    link: 'https://arxiv.org/pdf/2103.09229.pdf',
    tags: ['Autonomous Navigation', 'ROS', 'Robotics', 'Hardware'],
    image: 'https://images.unsplash.com/photo-1614065336827-0f2735f4032d?w=600',
    impact: 'Milestone',
}, {
    date: '2019-03-01',
    category: ['research', 'hardware'],
    title: 'Artificial Neural Networks with Analog Circuits',
    description: 'Designed and implemented basic logic gates on a hardware-level Artificial Neural Network built with operational amplifiers.',
    link: 'https://drive.google.com/open?id=1ynYknlomjIvRUBmrQ20zmbIQ3V409FG2',
    tags: ['Hardware', 'Neural Networks', 'Analog Circuits', 'Electronics'],
    image: 'https://images.unsplash.com/photo-1550645612-82f5d2901b50?w=600',
}, {
    date: '2018-12-01',
    category: ['publication', 'hardware'],
    title: 'OSWalT: Omnidirectional Spherical Wall Traversing Robot',
    description: 'Designed and prototyped a wall-climbing robot using propeller thrust for adhesion, independent of surface inclination. Presented at ICRA 2018.',
    link: 'https://www.youtube.com/watch?v=iUGDm8NWliE',
    tags: ['Hardware', 'Robotics', 'Mechanical Design', 'UAV'],
    image: 'https://images.unsplash.com/photo-1581333107534-1317576f8273?w=600',
    impact: 'High',
},];

// Data for Expertise section

// A 5-point scale can be interpreted as:
// 1: Foundational - Basic concepts understood.
// 2: Practical - Can apply to simple projects.
// 3: Proficient - Confident, independent use.
// 4: Advanced - Can architect complex solutions.
// 5: Expert - Deep understanding, can teach or innovate.

export const skills = {
    'Research & Modeling': {
        items: [{
            name: 'Nonlinear Dynamics & Chaos',
            level: 5
        }, {
            name: 'Physical Reservoir Computing',
            level: 5
        }, {
            name: 'Reduced-Order Modeling',
            level: 5
        }, {
            name: 'Biomechanics & Animal Locomotion',
            level: 4
        }, {
            name: 'Continuum & Solid Mechanics',
            level: 3
        }, {
            name: 'Mathematical Modeling',
            level: 4
        },],
        colors: {
            light: {
                bg: 'bg-purple-500', gradient: 'from-purple-500 to-indigo-500', shadow: 'shadow-purple-500/50',
            },
            dark: {
                bg: 'bg-purple-500', gradient: 'from-purple-500 to-indigo-500', shadow: 'shadow-purple-400/50',
            }
        }
    },
    'Robotics & Control': {
        items: [{
            name: 'Control Systems Design',
            level: 4
        }, {
            name: 'Robotics Kinematics & Dynamics',
            level: 4
        }, {
            name: 'Localization & Navigation (SLAM)',
            level: 4
        }, {
            name: 'Robot Operating System (ROS)',
            level: 3
        }, {
            name: 'UAV/Drone Systems',
            level: 4
        }, {
            name: 'Multi-Robot Systems',
            level: 3
        },],
        colors: {
            light: {
                bg: 'bg-blue-500', gradient: 'from-blue-500 to-cyan-500', shadow: 'shadow-blue-500/50',
            },
            dark: {
                bg: 'bg-blue-500', gradient: 'from-blue-500 to-cyan-500', shadow: 'shadow-cyan-400/50',
            }
        }
    },
    'Software & Technical Stack': {
        items: [{
            name: 'Python',
            level: 5
        }, {
            name: 'MATLAB & Simulink',
            level: 5
        }, {
            name: 'GPU Computing (PyOpenGL, PyCuda)',
            level: 3
        }, {
            name: 'C & C++',
            level: 3
        }, {
            name: 'Version Control (Git)',
            level: 4
        }, {
            name: 'Containerization (Docker)',
            level: 2
        },],
        colors: {
            light: {
                bg: 'bg-emerald-500', gradient: 'from-emerald-500 to-green-500', shadow: 'shadow-emerald-500/50',
            },
            dark: {
                bg: 'bg-emerald-500', gradient: 'from-emerald-500 to-green-500', shadow: 'shadow-green-400/50',
            }
        }
    },
    'Prototyping & Hardware': {
        items: [{
            name: 'CAD Modeling (SolidWorks, Fusion360)',
            level: 5
        }, {
            name: 'Embedded Systems (Arduino)',
            level: 5
        }, {
            name: 'Circuit Design & Simulation (MultiSim)',
            level: 3
        }, {
            name: 'Rapid Prototyping & Fabrication',
            level: 3
        }, {
            name: 'Hardware Testing & Validation',
            level: 4
        }, {
            name: 'Sensor Integration',
            level: 3
        },],
        colors: {
            light: {
                bg: 'bg-rose-500', gradient: 'from-rose-500 to-pink-500', shadow: 'shadow-rose-500/50',
            },
            dark: {
                bg: 'bg-rose-500', gradient: 'from-rose-500 to-pink-500', shadow: 'shadow-pink-400/50',
            }
        }
    },
};

// Data for Insights/Blog section

export const blogs = [
    {
        title: 'How I Built My React + Tailwind Portfolio (And How You Can Too!)',
        excerpt: 'A step-by-step guide on building a modern portfolio from scratch using React, Vite, and Tailwind CSS, and deploying it for free to GitHub Pages.',
        slug: 'how-i-built-this-portfolio', // <-- This MUST match your filename
        readTime: '8 min', // This is a more accurate estimate for this post
        date: 'November 2024',
        image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&q=80',
        tags: ['React', 'Vite', 'Tailwind CSS', 'GitHub Pages', 'Tutorial', 'Web Development'], // <-- No Framer Motion
    },
];


// Data for Summary/Stats section
export const stats = [
    {
    label: 'Research Years',
    value: '6+',
    icon: GraduationCap,
    color: 'from-purple-500 to-pink-500',
    url: '#research',
}, {
    label: 'Publications',
    value: '14+',
    icon: BookOpen,
    color: 'from-blue-500 to-cyan-500',
    url: 'https://scholar.google.com/citations?user=TU2VNd8AAAAJ&hl=en',
}, {
    label: 'Projects',
    value: projects.length.toString() + '+',
    icon: Code,
    color: 'from-green-500 to-emerald-500',
    url: '#research',
}, {
    label: 'Collaborations',
    value: '5+',
    icon: Users,
    color: 'from-orange-500 to-red-500',
    url: '',
},];

// Data for Photography Gallery
export const photos = [
    {
    src: '/images/gallery/ffb04931e463.jpg',
    width: 1920,
    height: 2560,
    title: "Sylvan Sparkle",
    description: "Bare trees shimmer with a coating of ice, backlit by a brilliant sun that reflects off the frozen ground, creating a stark yet beautiful winter scene."
}, {
    src: '/images/gallery/6ee378ed2884.jpg',
    width: 1920,
    height: 1440,
    title: "Academic Stone Beneath the Blue",
    description: "The stately stone facade of the College of Liberal Arts and Human Sciences building stands prominently under a clear, expansive blue sky."
}, {
    src: '/images/gallery/c9770e2a389c.jpg',
    width: 1920,
    height: 2560,
    title: "Winter's Golden Veil",
    description: "A stark, bare tree stands prominently on a gentle hill, its intricate branches silhouetted against a cloudy sky infused with a soft, ethereal golden light."
}, {
    src: '/images/gallery/569279672476.jpg',
    width: 1920,
    height: 2560,
    title: "Skyward Tapestry",
    description: "A magnificent, leafless tree stands as a bold silhouette against a vivid blue sky adorned with delicate, wispy clouds above a tranquil green expanse."
}, {
    src: '/images/gallery/62f0c58b0217.jpg',
    width: 1920,
    height: 2560,
    title: "Dusk on the Seasonal Path",
    description: "Golden light from the setting sun illuminates a quiet street, where bare winter trees stand beside the vibrant pink of newly bloomed blossoms under a dramatic, cloudy sky."
}, {
    src: '/images/gallery/5f0588387f7d.jpg',
    width: 1920,
    height: 2560,
    title: "Majestic Ascent",
    description: "Warm sunlight highlights the intricate stonework of a soaring Gothic tower, reaching towards a vast and clear azure sky."
}, {
    src: '/images/gallery/1cbf621b4072.jpg',
    width: 1920,
    height: 1440,
    title: "Collegiate Gothic Morning",
    description: "Sunlight bathes the majestic stone buildings and expansive green quad of a university campus, with tables set out for an event under a clear blue sky."
}, {
    src: '/images/gallery/15c9cd95fa4e.jpg',
    width: 1920,
    height: 2560,
    title: "Gothic Pathways, Budding Greens",
    description: "A sun-dappled stone path leads through a historic university campus, framed by old-world architecture and trees just awakening to spring."
}, {
    src: '/images/gallery/5a1edced7626.jpg',
    width: 1920,
    height: 2560,
    title: "Rhythm of Light and Wood",
    description: "Bright sunlight casts a striking pattern of long shadows across a weathered wooden pier, leading the eye past waterfront buildings to a distant bridge over tranquil waters."
}, {
    src: '/images/gallery/72643750754c.jpg',
    width: 1920,
    height: 1440,
    title: "Azure Horizon, Sandy Embrace",
    description: "Gentle waves kiss the wide sandy shore under a vast, cloudless blue sky, with a few figures enjoying the distant beach."
}, {
    src: '/images/gallery/5801d7a918fa.jpg',
    width: 1920,
    height: 2560,
    title: "Urban Ascent",
    description: "Dynamic architecture soars towards a brilliant blue sky, showcasing a captivating blend of modern skyscrapers and ornate classical structures from a ground-level perspective."
}, {
    src: '/images/gallery/c5bfe608aa1b.jpg',
    width: 1920,
    height: 2560,
    title: "Atlanta's Golden Glow",
    description: "An elevated view captures Atlanta's downtown, where modern skyscrapers and historic buildings are bathed in the warm, cloud-dappled light of late afternoon."
}, {
    src: '/images/gallery/1187e4a8fe7a.jpg',
    width: 1920,
    height: 2560,
    title: "Skyline's Gentle Glow",
    description: "Warm lights from towering skyscrapers illuminate a tranquil urban street under the deep blue of the night sky."
}, {
    src: '/images/gallery/bebb0424d8c6.jpg',
    width: 1920,
    height: 2560,
    title: "Urban Veins to the Skyline",
    description: "Curving light rail tracks stretch into the distance, leading towards a vibrant city skyline punctuated by modern architecture and overhead power lines."
}, {
    src: '/images/gallery/9a38dede3f6b.jpg',
    width: 1920,
    height: 2560,
    title: "Sky-Lit Grandeur",
    description: "The elegant, multi-story atrium of a historic building is bathed in natural light from its vast glass ceiling, featuring ornate balconies and an array of hanging white banners."
}, {
    src: '/images/gallery/3eb2e392a7c7.jpg',
    width: 1920,
    height: 1440,
    title: "Evening's Embrace",
    description: "The sky glows with warm golden and soft blue hues as dramatic clouds blanket a verdant park landscape at dusk."
}, {
    src: '/images/gallery/20f13aae8fd2.jpg',
    width: 1920,
    height: 1440,
    title: "River Valley Serenity",
    description: "Lush green mountains frame a tranquil river, reflecting the bright blue sky with scattered clouds on a clear day."
}, {
    src: '/images/gallery/afcc1ae12166.jpg',
    width: 1920,
    height: 2560,
    title: "City's Fiery Farewell",
    description: "A dramatic orange and pink sunset illuminates a darkening urban streetscape, where glowing streetlights and car headlights mark the end of the day."
}, {
    src: '/images/gallery/7e3d9cea812d.jpg',
    width: 1920,
    height: 2560,
    title: "Stone Sentinel",
    description: "An imposing, castle-like stone building with multiple towers stands majestically under a bright blue sky, with geometric pathways in the foreground."
}, {
    src: '/images/gallery/97c102519fff.jpg',
    width: 1920,
    height: 2560,
    title: "Turreted Victorian Charm",
    description: "An elegant Queen Anne style house, painted in muted green and deep red, proudly displays its prominent circular turret and wrap-around porch under a soft, overcast sky."
}, {
    src: '/images/gallery/d3ac695a19ad.jpg',
    width: 1920,
    height: 1440,
    title: "Whispers on the Water",
    description: "A tranquil lake perfectly mirrors the radiant setting sun and wispy clouds above, viewed from behind a rustic wooden railing."
}, {
    src: '/images/gallery/b872853a7603.jpg',
    width: 1920,
    height: 2560,
    title: "Shadow Play by Gaslight",
    description: "A warm gas lantern illuminates a textured white brick wall, casting intricate shadows of foliage against the night."
}, {
    src: '/images/gallery/0ca97e152f0a.jpg',
    width: 1920,
    height: 1440,
    title: "Horizon Ablaze",
    description: "The setting sun ignites the sky in fiery orange and red, casting dramatic silhouettes over rolling mountains and a peaceful valley."
}, {
    src: '/images/gallery/cbdc81b03f15.jpg',
    width: 1920,
    height: 2560,
    title: "Nature's Grand Portal",
    description: "A magnificent natural rock arch frames a clear blue sky dotted with clouds, revealing the grand scale of this ancient geological wonder."
}, {
    src: '/images/gallery/ee5759c6bba1.jpg',
    width: 1920,
    height: 1440,
    title: "Evening's Fiery Canvas",
    description: "Vibrant orange and pink clouds ignite the sky at dusk, silhouetting a grand stone building and trees below."
}, {
    src: '/images/gallery/6eed717ae51b.jpg',
    width: 1920,
    height: 2560,
    title: "A Woodland Kaleidoscope",
    description: "A winding forest path covered in fallen leaves leads into a vibrant autumn canopy of green, gold, and crimson."
}, {
    src: '/images/gallery/727619e7b552.jpg',
    width: 1920,
    height: 2560,
    title: "Autumn's Lace",
    description: "Intricate tree branches, some still adorned with golden autumn leaves and others starkly bare, create a delicate silhouette against a soft, bright sky."
}, {
    src: '/images/gallery/fbc1089af153.jpg',
    width: 1920,
    height: 2560,
    title: "Silver Stallion Under a Mackerel Sky",
    description: "A sleek silver Ford Mustang convertible rests on a grassy slope, set against a dramatic cloudy sky and a stark, leafless tree."
}, {
    src: '/images/gallery/ebcddcdb481a.jpg',
    width: 1920,
    height: 1440,
    title: "Autumn's Golden Embrace",
    description: "The setting sun casts a vibrant golden glow over rolling hills blanketed in brilliant autumn foliage, creating a breathtaking landscape."
}, {
    src: '/images/gallery/bd465abfaa88.jpg',
    width: 1920,
    height: 2560,
    title: "Sentinel of the Setting Sun",
    description: "A weathered, leafless tree stands prominently on a hillside, overlooking rolling autumn forests under a dramatic, cloud-filled sky touched by the warm glow of the setting sun."
},];

// Data for the Charcoal Sketching gallery.
// Replace these with your own images and dimensions.

export const sketches = [
    {
    src: '/images/sketchbook/7c1cfa963e7f.jpg',
    width: 1920,
    height: 2175,
    title: "Lines of Thought",
    description: "A contemplative graphite portrait of a woman, with drawing tools beside it, captures a quiet moment of artistic creation."
}, {
    src: '/images/sketchbook/6023e949e994.jpg',
    width: 1920,
    height: 1433,
    title: "Pencil & Progress",
    description: "Two engaging pencil portraits, along with art supplies and technical documents, reveal a workspace where creativity and academic pursuits beautifully intertwine."
}, {
    src: '/images/sketchbook/5989506df604.jpg',
    width: 1920,
    height: 2560,
    title: "Silent Gaze in Charcoal",
    description: "A striking monochromatic portrait of a woman with a bindi, her intense gaze rendered through bold charcoal strokes on textured paper."
}, {
    src: '/images/sketchbook/46519bc35a62.jpg',
    width: 1920,
    height: 2560,
    title: "Graphite Grin",
    description: "A joyful, closed-eyed smile radiates from this expressive monochrome sketch, created with the pencil visible alongside the artwork."
}, {
    src: '/images/sketchbook/0b2ad3e673be.jpg',
    width: 1920,
    height: 2560,
    title: "Silent Reflection",
    description: "A charcoal portrait captures a woman with closed eyes and traditional adornments, embodying a serene moment of deep introspection."
}, {
    src: '/images/sketchbook/4790e1b3f53d.jpg',
    width: 1920,
    height: 2560,
    title: "Melody in Graphite",
    description: "An expressive pencil portrait captures a woman with a bindi and flowing dark hair, holding a flute to her lips with a captivating gaze."
}, {
    src: '/images/sketchbook/4ba79f324441.jpg',
    width: 1920,
    height: 2560,
    title: "Scars and Stare",
    description: "This intense graphite portrait features a rugged man with an unflinching gaze and prominent facial scars, rendered with expressive, textured pencil strokes."
}, {
    src: '/images/sketchbook/e38a3c7da69c.jpg',
    width: 1920,
    height: 1406,
    title: "Phantom of the High Seas",
    description: "A dramatic monochrome sketch captures a large, stylized sailing ship, its weathered sails and hull suggesting a long journey's end or a ghostly presence on the shore."
},];


// Data for Creative/Beyond section
export const creative = [{
    type: 'Photography', // size of const photos array
    count: photos.length,
    image: 'https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=600',
    description: 'Capturing mechanisms in nature',
}, {
    type: 'Charcoal Sketching',
    count: sketches.length,
    image: 'https://images.unsplash.com/photo-1505569127510-bde1536937bc?w=600',
    description: 'Expressive portraits and figure studies',
},
//     {
//     type: 'Travel',
//     count: 12,
//     image: 'https://images.unsplash.com/photo-1500835556837-99ac94a94552?w=600',
//     description: 'Adventures and conferences',
// },
];
