// file: portfolioData.js
import {
    Brain,
    Cpu,
    GraduationCap,
    Zap,
    BookOpen,
    Code,
    Users,
} from 'lucide-react';

// Data for Journey section

export const journey = [
    {
        id: 1,
        date: "Present",
        title: "Ph.D. in Engineering Mechanics",
        description: "Pursuing doctoral research at the DARE Lab, focusing on mechano-intelligence, physical reservoir computing, and high-speed simulation of nonlinear dynamics.",
        location: "Blacksburg, VA",
        category: "Milestone",
        url: "https://www.vt.edu/"
    },
    {
        id: 2,
        date: "May 2025",
        title: "M.S. in Engineering Mechanics",
        description: "Completed Master's thesis on optimizing snake locomotion using a variational and analytical framework for friction and normal force modulation.",
        location: "Blacksburg, VA",
        category: "Milestone",
        url: "https://vtechworks.lib.vt.edu/items/9b5036be-fb58-4d1f-a9dd-b5a9e01e8ee7"
    },
    {
        id: 3,
        date: "August 2022",
        title: "Awarded Pratt Fellowship",
        description: "Received the prestigious Pratt fellowship from the Dept. of Biomedical Engineering and Mechanics in recognition of academic and research potential.",
        location: "Virginia Tech",
        category: "Achievement",
        url: "https://www.cals.vt.edu/academic-programs/current/graduate/pratt.html"
    },
    {
        id: 4,
        date: "June 2022",
        title: "Head of UAV Navigation & Control Systems",
        description: "Led software architecture development for high-payload UAVs at Octobotics Tech, focusing on control, localization, and robotic manipulation.",
        location: "Noida, India",
        category: "Growth",
        url: "https://photos.app.goo.gl/yDX625C4TKb3Vd4M6"
    },
    {
        id: 5,
        date: "June 2021",
        title: "Developed Indoor Drone Navigation Stack",
        description: "As an intern at FlytBase, engineered an indoor navigation stack using ORB-SLAM and developed C++/Python SDKs for drone docking stations.",
        location: "Pune, India",
        category: "Growth",
        url: "https://drive.google.com/file/d/1q3XXqSTcHIM_hwUPwzJ7vbrOtb-X6Sqb/view?usp=sharing"
    },
    {
        id: 6,
        date: "June 2020",
        title: "Graduated with B.Tech in Electrical Engineering",
        description: "Completed Bachelor's from VNIT with a thesis on the design and development of a fully autonomous delivery robot.",
        location: "Nagpur, India",
        category: "Milestone",
        url: "https://arxiv.org/abs/2103.09229"
    },
    {
        id: 7,
        date: "July 2019",
        title: "First Research Internship at Virginia Tech",
        description: "Interned at VT's Dept. of Biomedical Engineering & Mechanics, optimizing snake robot kinematics through a custom Arduino-MATLAB controller.",
        location: "Blacksburg, VA",
        category: "Growth",
        url: "https://drive.google.com/file/d/1D1uVCb8gkPx-yS6Ad9Or3WslyRbHdwoT/view?usp=sharing"
    },
    {
        id: 8,
        date: "September 2018",
        title: "Remote Internship at National University of Singapore",
        description: "Created mathematical models and simulations for cable-driven flexible manipulators using MATLAB and Simulink as a remote research intern.",
        location: "NUS, Singapore",
        category: "Growth",
        url: "https://github.com/YogeshPhalak/Simulation-Of-Cable-Driven-Flexible-Manipulators-Using-Matlab-and-Simulink"
    }
];

// Data for Research/Projects section
// A comprehensive list of your projects.
// The 'date' property in 'YYYY-MM-DD' format is crucial for chronological sorting.
export const projects = [
    {
        date: '2025-10-31',
        category: ['repository', 'graphics'],
        title: 'PhalcoPulse: A Real-Time 3D Visualization Engine',
        description: 'An independent software project to develop a lightweight 3D engine in Python using PyOpenGL for rapid prototyping of scientific simulations and animations.',
        link: 'https://github.com/PhalcoAi/PhalcoPulse',
        tags: ['PyOpenGL', 'Python', '3D Graphics', 'Scientific Visualization', 'Simulation'],
        image: 'https://images.unsplash.com/photo-1593349480503-64d42da14940?w=600',
        stars: 42, // You can update this value
    },
    {
        date: '2025-10-10',
        category: ['presentation'],
        title: 'Hyper-Yoshimura: Unleashing Meta-Stability in Deployable Robots',
        venue: 'ME4734 Robotics and Mechanisms Seminar, Virginia Tech',
        link: '#', // Add link to slides if available
        tags: ['Origami', 'Robotics', 'Deployable Structures', 'Nonlinear Dynamics'],
        image: 'https://images.unsplash.com/photo-1621237198-1243534578d4?w=600',
        audience: 'Faculty & Graduate Students',
    },
    {
        date: '2025-05-19',
        category: ['publication', 'presentation'],
        title: 'Hyper Yoshimura: A Novel Folding Pattern for Deployable Robots',
        venue: 'Submitted to Science Advances (Preprint Available)',
        link: 'https://arxiv.org/abs/2505.09919',
        tags: ['Origami', 'Robotics', 'Metastability', 'Research'],
        image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600',
        impact: 'High',
    },
    {
        date: '2025-05-29',
        category: ['repository'],
        title: 'ChapRotorDynamics: Chaos in the Chaplygin Sleigh',
        description: 'A Python repository for exploring chaotic behavior in the dynamic Chaplygin Sleigh with an attached rotor system.',
        link: 'https://github.com/YogeshPhalak/ChapRotorDynamics',
        tags: ['Chaos Theory', 'Nonholonomic Dynamics', 'Python', 'Simulation'],
        image: 'https://images.unsplash.com/photo-1614332287897-cdc485fa562d?w=600',
        stars: 1,
    },
    {
        date: '2024-12-01',
        category: ['publication'],
        title: 'Optimal Snake Locomotion on Flat Surfaces: An Analytical Framework',
        venue: 'Accepted to Philosophical Transactions A',
        link: 'https://arxiv.org/abs/2412.03725',
        tags: ['Biomechanics', 'Robotics', 'Snake Locomotion', 'Analytical Mechanics'],
        image: 'https://images.unsplash.com/photo-1605833192285-246995383f98?w=600',
        impact: 'High',
    },
    {
        date: '2024-08-27',
        category: ['publication', 'presentation'],
        title: 'Golden Ratio Yoshimura for Meta-Stable Deployment',
        venue: 'Philosophical Transactions A / Presented at IDETC-CIE 2024',
        link: 'https://royalsocietypublishing.org/doi/10.1098/rsta.2024.0009',
        tags: ['Origami', 'Deployable Structures', 'Mechanical Design'],
        image: 'https://images.unsplash.com/photo-1621980229871-398858258e70?w=600',
        impact: 'High',
    },
    {
        date: '2023-12-06',
        category: ['presentation', 'research'],
        title: 'How Snakes Regulate Weight to Compensate for Frictional Anisotropy',
        venue: 'Graduate Student Seminar & SICB Regional Meeting 2023',
        link: 'https://drive.google.com/file/d/1CI0QreH51XmhJEkB2qAxp50IjFMIgJ8w/view?usp=sharing',
        tags: ['Biomechanics', 'Snake Locomotion', 'Friction', 'Dynamics'],
        image: 'https://images.unsplash.com/photo-1568043219355-632634d20386?w=600',
        audience: '100+ Researchers',
    },
    {
        date: '2023-07-31',
        category: ['research', 'graphics'],
        title: 'Origami-Inspired Reservoir Computing',
        description: 'Summer research project investigating origami mechanical systems as physical reservoirs for computation, including development of a 3D animator.',
        link: 'https://drive.google.com/file/d/1KpoNI85WCr1AHlICNRPIOKTKpmQfqNJ1/view?usp=drive_link',
        tags: ['Origami', 'Reservoir Computing', 'Nonlinear Dynamics', '3D Visualization'],
        image: 'https://images.unsplash.com/photo-1526932372479-e58548957e6a?w=600',
    },
    {
        date: '2023-05-29',
        category: ['repository'],
        title: 'Cellular Automata for Natural Pattern Adaptation',
        description: 'A model exploring pattern adaptation in biology (e.g., animal coats) using cellular automata. Final project for a Mathematical Biology course.',
        link: 'https://github.com/YogeshPhalak/Natural-Pattern-Adaptation-CA',
        tags: ['Cellular Automata', 'Computational Biology', 'Pattern Formation', 'Python'],
        image: 'https://images.unsplash.com/photo-1575899919539-774b31a806a8?w=600',
        stars: 2,
    },
    {
        date: '2022-12-07',
        category: ['repository', 'graphics'],
        title: 'Realistic Snake Gaits in a C++ Game',
        description: 'A simple snake game developed with OpenGL that uses a discrete snake robot model to produce realistic slithering movements.',
        link: 'https://github.com/YogeshPhalak/Snake-Game-With-Realistic-Snake-Gaits',
        tags: ['C++', 'OpenGL', 'Game Development', 'Snake Gaits', 'Robotics'],
        image: 'https://images.unsplash.com/photo-1578344115789-18395f171c7b?w=600',
        stars: 9,
    },
    {
        date: '2021-10-27',
        category: ['repository', 'publication'],
        title: 'Decentralized Relative Localization for Multi-Robot Systems',
        description: 'A system based on Relative Signal Strength (RSS) and Tetrahedral Geometry for decentralized localization. Published at IEEE INOCON 2020.',
        link: 'https://github.com/YogeshPhalak/tetra-edm-localizer',
        tags: ['Multi-Robot Systems', 'Localization', 'MATLAB', 'Robotics'],
        image: 'https://images.unsplash.com/photo-1554310624-78e015822e1a?w=600',
        stars: 5,
    },
    {
        date: '2020-08-28',
        category: ['repository'],
        title: 'Simulation of Snake Locomotion Mechanisms',
        description: 'MATLAB implementation of various snake gaits (e.g., lateral undulation) on a simplified kinematical model of a discrete snake robot.',
        link: 'https://github.com/YogeshPhalak/Simulation-of-the-Snake-locomotion-mechanisms',
        tags: ['MATLAB', 'Snake Robot', 'Kinematics', 'Gait Simulation'],
        image: 'https://images.unsplash.com/photo-1629813254593-277e394337a6?w=600',
        stars: 38,
    },
    {
        date: '2020-08-18',
        category: ['repository'],
        title: 'Simulation of Cable-Driven Flexible Manipulators',
        description: 'Work from a remote internship at NUS, focused on simulating flexible, cable-driven manipulators using MATLAB, Simulink, and Simscape.',
        link: 'https://github.com/YogeshPhalak/Simulation-Of-Cable-Driven-Flexible-Manipulators-Using-Matlab-and-Simulink',
        tags: ['MATLAB', 'Simulink', 'Robotics', 'Flexible Manipulators'],
        image: 'https://images.unsplash.com/photo-1635069733223-3e4a3780354c?w=600',
        stars: 15,
    },
    {
        date: '2020-08-01',
        category: ['publication'],
        title: 'Design and Development of an Autonomous Delivery Robot',
        venue: 'Bachelor\'s Thesis, VNIT Nagpur (Published on arXiv)',
        link: 'https://arxiv.org/pdf/2103.09229.pdf',
        tags: ['Autonomous Navigation', 'ROS', 'Robotics', 'Hardware'],
        image: 'https://images.unsplash.com/photo-1614065336827-0f2735f4032d?w=600',
        impact: 'Milestone',
    },
    {
        date: '2019-03-01',
        category: ['research'],
        title: 'Artificial Neural Networks with Analog Circuits',
        description: 'Designed and implemented basic logic gates on a hardware-level Artificial Neural Network built with operational amplifiers.',
        link: 'https://drive.google.com/open?id=1ynYknlomjIvRUBmrQ20zmbIQ3V409FG2',
        tags: ['Hardware', 'Neural Networks', 'Analog Circuits', 'Electronics'],
        image: 'https://images.unsplash.com/photo-1550645612-82f5d2901b50?w=600',
    },
    {
        date: '2018-12-01',
        category: ['publication', 'hardware'],
        title: 'OSWalT: Omnidirectional Spherical Wall Traversing Robot',
        description: 'Designed and prototyped a wall-climbing robot using propeller thrust for adhesion, independent of surface inclination. Presented at ICRA 2018.',
        link: 'https://www.youtube.com/watch?v=iUGDm8NWliE',
        tags: ['Hardware', 'Robotics', 'Mechanical Design', 'UAV'],
        image: 'https://images.unsplash.com/photo-1581333107534-1317576f8273?w=600',
        impact: 'High',
    },
];

// Data for Expertise section

// A 5-point scale can be interpreted as:
// 1: Foundational - Basic concepts understood.
// 2: Practical - Can apply to simple projects.
// 3: Proficient - Confident, independent use.
// 4: Advanced - Can architect complex solutions.
// 5: Expert - Deep understanding, can teach or innovate.

export const skills = {
    'Research & Modeling': {
        items: [
            {name: 'Nonlinear Dynamics & Chaos', level: 5},
            {name: 'Physical Reservoir Computing', level: 5},
            {name: 'Reduced-Order Modeling', level: 4},
            {name: 'Biomechanics & Animal Locomotion', level: 4},
            {name: 'Continuum & Solid Mechanics', level: 3},
            {name: 'Mathematical Modeling', level: 4},
        ],
        colors: {
            light: {
                bg: 'bg-purple-500',
                gradient: 'from-purple-500 to-indigo-500',
                shadow: 'shadow-purple-500/50',
            },
            dark: {
                bg: 'bg-purple-500',
                gradient: 'from-purple-500 to-indigo-500',
                shadow: 'shadow-purple-400/50',
            }
        }
    },
    'Robotics & Control': {
        items: [
            {name: 'Control Systems Design', level: 4},
            {name: 'Robotics Kinematics & Dynamics', level: 4},
            {name: 'Localization & Navigation (SLAM)', level: 4},
            {name: 'Robot Operating System (ROS)', level: 3},
            {name: 'UAV/Drone Systems', level: 4},
            {name: 'Multi-Robot Systems', level: 3},
        ],
        colors: {
            light: {
                bg: 'bg-blue-500',
                gradient: 'from-blue-500 to-cyan-500',
                shadow: 'shadow-blue-500/50',
            },
            dark: {
                bg: 'bg-blue-500',
                gradient: 'from-blue-500 to-cyan-500',
                shadow: 'shadow-cyan-400/50',
            }
        }
    },
    'Software & Technical Stack': {
        items: [
            {name: 'Python (NumPy, SciPy)', level: 5},
            {name: 'MATLAB & Simulink', level: 5},
            {name: 'GPU Computing (PyOpenGL)', level: 3},
            {name: 'C & C++', level: 3},
            {name: 'Version Control (Git)', level: 4},
            {name: 'Containerization (Docker)', level: 2},
        ],
        colors: {
            light: {
                bg: 'bg-emerald-500',
                gradient: 'from-emerald-500 to-green-500',
                shadow: 'shadow-emerald-500/50',
            },
            dark: {
                bg: 'bg-emerald-500',
                gradient: 'from-emerald-500 to-green-500',
                shadow: 'shadow-green-400/50',
            }
        }
    },
    'Prototyping & Hardware': {
        items: [
            {name: 'CAD Modeling (SolidWorks, Fusion360)', level: 4},
            {name: 'Embedded Systems (Arduino)', level: 3},
            {name: 'Circuit Design & Simulation (MultiSim)', level: 3},
            {name: 'Rapid Prototyping & Fabrication', level: 3},
            {name: 'Hardware Testing & Validation', level: 4},
            {name: 'Sensor Integration', level: 3},
        ],
        colors: {
            light: {
                bg: 'bg-rose-500',
                gradient: 'from-rose-500 to-pink-500',
                shadow: 'shadow-rose-500/50',
            },
            dark: {
                bg: 'bg-rose-500',
                gradient: 'from-rose-500 to-pink-500',
                shadow: 'shadow-pink-400/50',
            }
        }
    },
};

// Data for Insights/Blog section

export const blogs = [
    {
        title: 'Understanding Mechano-Intelligence',
        excerpt:
            'An introduction to how physical systems can compute and process information through their inherent dynamics...',
        readTime: '5 min',
        date: 'Oct 2024',
        image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=600',
        tags: ['Theory', 'Introduction'],
        link: '#',
    },
    {
        title: 'Physical Reservoir Computing Explained',
        excerpt:
            'Breaking down the fundamentals of computation in physical substrates and why it matters for robotics...',
        readTime: '7 min',
        date: 'Sep 2024',
        image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600',
        tags: ['Computing', 'Robotics'],
        link: '#',
    },
    {
        title: 'The Beauty of Chaos in Engineering',
        excerpt:
            'How chaotic systems can be harnessed for computational purposes and practical applications...',
        readTime: '6 min',
        date: 'Aug 2024',
        image: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=600',
        tags: ['Chaos Theory', 'Engineering'],
        link: '#',
    },
];

// Data for Creative/Beyond section
export const creative = [
    {
        type: 'Photography',
        count: 24,
        image: 'https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=600',
        description: 'Capturing mechanisms in nature',
    },
    {
        type: 'Charcoal Sketching',
        count: 15,
        image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=600',
        description: 'Anatomical studies and abstracts',
    },
    {
        type: 'Travel',
        count: 12,
        image: 'https://images.unsplash.com/photo-1500835556837-99ac94a94552?w=600',
        description: 'Adventures and conferences',
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
    },
    {
        label: 'Publications',
        value: '14+',
        icon: BookOpen,
        color: 'from-blue-500 to-cyan-500',
        url: 'https://scholar.google.com/citations?user=TU2VNd8AAAAJ&hl=en',
    },
    {
        label: 'Projects',
        value: '8+',
        icon: Code,
        color: 'from-green-500 to-emerald-500',
        url: '#research',
    },
    {
        label: 'Collaborations',
        value: '15+',
        icon: Users,
        color: 'from-orange-500 to-red-500',
        url: '',
    },
];

// Data for Photography Gallery
export const photos = [
    {
        src: '/images/gallery/image1.png',
        width: 1200,
        height: 800,
        title: 'Beach Dog Walk',
        description: 'Man and dog enjoying a peaceful beach.'
    },
    {
        src: '/images/gallery/image2.png',
        width: 800,
        height: 1200,
        title: 'Morning Coffee',
        description: 'A cozy start to the day with coffee and pastry.'
    },
    {
        src: '/images/gallery/image3.png',
        width: 1600,
        height: 900,
        title: 'Snowy Mountains',
        description: 'Majestic peaks under a clear sky.'
    },
    {
        src: '/images/gallery/image4.png',
        width: 900,
        height: 1400,
        title: 'Enchanted Forest',
        description: 'Sunlight piercing through a lush green forest.'
    },
    {
        src: '/images/gallery/image5.png',
        width: 1500,
        height: 1000,
        title: 'Coastal Town',
        description: 'Beautiful architecture by the sea.'
    },
    {
        src: '/images/gallery/image6.png',
        width: 1000,
        height: 1500,
        title: 'City Skyline',
        description: 'Urban landscape at dusk with vibrant lights.'
    },
    {
        src: '/images/gallery/image7.png',
        width: 1400,
        height: 933,
        title: 'Desert Dunes',
        description: 'Rolling sand dunes under a dramatic sky.'
    },
    {
        src: '/images/gallery/image8.png',
        width: 933,
        height: 1400,
        title: 'Autumn Pathway',
        description: 'A serene path covered in fall foliage.'
    }


];

