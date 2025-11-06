export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Work',
    href: '#work',
  },
  {
    id: 4,
    name: 'Contact',
    href: '#contact',
  },
];

export const clientReviews = [
  {
    id: 1,
    name: 'Emily Johnson',
    position: 'Marketing Director at GreenLeaf',
    img: 'assets/review1.png',
    review:
      'Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
  },
  {
    id: 2,
    name: 'Mark Rogers',
    position: 'Founder of TechGear Shop',
    img: 'assets/review2.png',
    review:
      'Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.',
  },
  {
    id: 3,
    name: 'John Dohsas',
    position: 'Project Manager at UrbanTech ',
    img: 'assets/review3.png',
    review:
      'I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
  },
  {
    id: 4,
    name: 'Ether Smith',
    position: 'CEO of BrightStar Enterprises',
    img: 'assets/review4.png',
    review:
      'Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.',
  },
];

export const myProjects = [
  {
    title: 'UNIFY, your personal newcomer companion',
    desc: 'A React Native mobile app that helps newcomers settle in Canada by connecting them to community, resources, and guidance through an intuitive, AI-powered interface.',
    subdesc:
      'Built with Expo and Supabase, Unify integrates secure authentication, real-time data, and AI chat modules to assist immigrants with local resources, job information, and community engagement.',
    href: 'https://unifysocial.ca/',
    texture: '/textures/project/project1.mp4',
    logo: '/assets/project-logo1.png',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      { id: 1, name: 'React.js', path: '/assets/react.svg' },
      { id: 2, name: 'TailwindCSS', path: 'assets/tailwindcss.png' },
      { id: 3, name: 'TypeScript', path: '/assets/typescript.png' },
      { id: 4, name: 'Framer Motion', path: '/assets/framer.png' },
    ],
  },
  {
    title: 'Panoramizer - Tool to Build Panoramic Images',
    desc: 'A C++ OpenCV application that automatically stitches overlapping images into seamless panoramas using custom feature detection and geometric alignment.',
    subdesc:
      'Implements FAST and FASTR corner detectors, SIFT descriptors, KNN matching with Lowe’s ratio test, and RANSAC-based homography estimation for robust panorama creation and blending.',
    href: 'https://github.com/rodrigoanasco/building-panoramas',
    texture: '/textures/project/project2.mp4',
    logo: '/assets/project-logo2.png',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      { id: 1, name: 'C++', path: '/assets/cpp.svg' },
      { id: 2, name: 'OpenCV', path: '/assets/opencv.png' },
      { id: 3, name: 'CMake', path: '/assets/cmake.png' },
    ],
  },
  {
    title: 'LearnVerse - Skill Trading Marketplace',
    desc: 'A full-stack platform where users trade skills as currency, promoting accessible education and global collaboration through a modern web interface.',
    subdesc:
      'Developed with React.js and Firebase, LearnVerse allows users to create profiles, post skill offers, chat in real time, and translate messages using Azure Cognitive Services for inclusivity.',
    href: 'https://learn-verse-one.vercel.app/',
    texture: '/textures/project/project3.mp4',
    logo: '/assets/project-logo3.png',
    logoStyle: {
      backgroundColor: '#60f5a1',
      background:
        'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
      border: '0.2px solid rgba(208, 213, 221, 1)',
      boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
    },
    spotlight: '/assets/spotlight3.png',
    tags: [
      { id: 1, name: 'React.js', path: '/assets/react.svg' },
      { id: 2, name: 'Firebase', path: '/assets/firebase.svg' },
      { id: 3, name: 'Azure AI', path: '/assets/azure.svg' },
      { id: 4, name: 'TailwindCSS', path: 'assets/tailwindcss.png' },
    ],
  },
  {
    title: 'ZIMA - Path Planning Algorithm',
    desc: 'An AI-driven navigation system for autonomous underwater vehicles (AUVs), designed to optimize hull-cleaning and inspection tasks using 3D neural mapping.',
    subdesc:
      'Developed the GBNN-based path planning algorithm, 3D hull discretization with KDTree, obstacle detection using plane fitting, and real-time visualization for robot path optimization.',
    href: 'https://subvision.ca/',
    texture: '/textures/project/project4.mp4',
    logo: '/assets/project-logo4.png',
    logoStyle: {
      backgroundColor: '#0E1F38',
      border: '0.2px solid #0E2D58',
      boxShadow: '0px 0px 60px 0px #2F67B64D',
    },
    spotlight: '/assets/spotlight4.png',
    tags: [
      { id: 1, name: 'Python', path: '/assets/python.svg' },
      { id: 2, name: 'Matplotlib', path: '/assets/matplotlib.png' },
      { id: 3, name: 'NumPy', path: '/assets/numpy.svg' },
    ],
  },
  {
    title: 'Sentiment-Based Stock Market Predictor',
    desc: 'A data science project combining financial news and market indicators to predict stock trends through sentiment analysis and machine learning models.',
    subdesc:
      'Collected and processed multi-source financial data with GDELT, applied FinBERT and TextBlob for sentiment scoring, and trained ensemble models (XGBoost, Random Forest) to predict price shifts.',
    href: 'https://github.com/rodrigoanasco/Sentiment-Based-Stock-Market-Predictor',
    texture: '/textures/project/project5.mp4',
    logo: '/assets/project-logo5.png',
    logoStyle: {
      backgroundColor: '#1C1A43',
      border: '0.2px solid #252262',
      boxShadow: '0px 0px 60px 0px #635BFF4D',
    },
    spotlight: '/assets/spotlight5.png',
    tags: [
      { id: 1, name: 'Python', path: '/assets/python.svg' },
      { id: 2, name: 'FinBERT', path: '/assets/finbert.png' },
      { id: 3, name: 'Scikit-learn', path: '/assets/scikitlearn.png' },
      { id: 4, name: 'Pandas', path: '/assets/pandas.png' },
    ],
  },
];


export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.008 : isMobile ? 0.009 : 0.013,
    deskPosition: isMobile ? [0.5, -1, 0] : [0.5, -4, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5.5, -5, 3] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [5, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [6.5, 4, 0] : [9, 3, 0],
    ringPosition: isSmall ? [-4, 2, 0] : isMobile ? [-5, 1, 0] : isTablet ? [-6, 1, 0] : [-9, 0.5, 0],
    targetPosition: isSmall ? [-5, -6, -10] : isMobile ? [-8, -5, -16] : isTablet ? [-11, -10, -10] : [-11, -10, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: 'SubVision Robotics',
    pos: 'Software Developer',
    duration: 'Feb 2025 - Present',
    title:
      "Implemented a Coverage Path Planning Algorithm using GBNN for ship hull cleaning robots. Built 3D mapping and obstacle detection pipelines with KDTree and plane fitting, and visualized robot navigation through real-time 3D simulations.",
    icon: '/assets/project-logo4.png',
    animation: 'victory',
  },
  {
    id: 2,
    name: 'Unify (Enactus SFU)',
    pos: 'Software Coordinator',
    duration: 'Feb 2025 - Present',
    title:
      "Developing Unify, a React Native app supporting immigrants in Canada. Integrated Supabase for secure authentication and real-time data, built AI-driven features, and managed Agile sprints and technical documentation.",
    icon: '/assets/project-logo1.png',
    animation: 'clapping',
  },
  {
    id: 3,
    name: 'Fraser International College',
    pos: 'Peer Educator',
    duration: 'Aug 2023 - Apr 2024',
    title:
      "Tutored computing and math courses, created study materials, and helped students improve understanding and performance through personalized guidance and collaboration with instructors.",
    icon: '/assets/fic.jpg',
    animation: 'salute',
  },
];
