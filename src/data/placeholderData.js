// Fallback data - will be replaced by Sanity CMS when available

export const personalInfo = {
  name: 'Aditya Ladhane',
  title: 'Tech Enthusiast & Future Innovator',
  age: 21,
  location: 'Pune, India',
  education: 'B.E. Electronics & Telecommunication (Final Year)',
  bio: "I'm the kind of person who sees a new gadget and immediately wonders 'How can I open this and figure out how it works?' At 21, I'm not just studying Electronics & Telecommunication - I'm living it. From building microcontroller projects to capturing life's candid moments, my curiosity drives everything I create.",
  avatar: '/aditya-profile.png',
  email: 'hello@adityaladhane.com',
  phone: '+91 98765 43210',
  socialMedia: {
    linkedin: 'https://linkedin.com/in/adityaladhane',
    github: 'https://github.com/adityaladhane',
    instagram: 'https://instagram.com/adityaladhane',
    twitter: 'https://twitter.com/adityaladhane'
  },
  
  // Your authentic journey story
  story: {
    journey: `My story begins with an insatiable curiosity. As a kid, I was that person who couldn't resist opening up gadgets to understand how they worked. This curiosity led me to pursue Electronics & Telecommunication Engineering, where I discovered that learning theory was just the beginning - the real magic happens when you build things from scratch.
    
    During my college years, I've evolved from someone who just takes things apart to someone who creates. My Arduino and ESP32 projects aren't just assignments - they're expressions of my desire to solve real problems. Whether it's building a smart home automation system or creating an automated plant monitoring setup, every project teaches me something new about the intersection of hardware and software.
    
    But my interests aren't limited to circuits and code. I discovered a passion for photography, specifically candid moments. There's something beautiful about capturing authentic emotions - unposed, genuine moments that tell real stories. This led me to explore video editing, where I combine my technical mindset with creative storytelling.
    
    My dreams extend far beyond college. I envision myself building India's own supercar manufacturing brand, combining German engineering precision with Indian innovation. It's ambitious, yes, but every great journey starts with curiosity - and I have plenty of that.`,
    
    education: `I'm currently in my final year of B.E. in Electronics & Telecommunication, but my real education happens outside the classroom. While my professors teach me the fundamentals of signals, systems, and circuits, I spend my free time building projects that bring these concepts to life.
    
    My approach to learning is hands-on and practical. I don't just memorize formulas - I implement them. I don't just read about microcontrollers - I program them. This has led me to develop what I call "smart coding" skills, where I leverage AI tools to solve problems efficiently while ensuring I understand the underlying logic.
    
    Photography and video editing have become my creative outlets, teaching me skills in visual storytelling, composition, and post-processing. These aren't just hobbies - they're additional tools in my innovation toolkit.
    
    Looking ahead, I'm considering an MBA to complement my technical skills with business acumen. Because to build the automotive manufacturing company I dream of, I'll need both technological expertise and entrepreneurial insight.`,
    
    philosophy: `My philosophy is simple: understand by building, create rather than modify, and always ask "why" before "how." This applies to everything I do.
    
    In electronics, I prefer designing circuits from scratch rather than using pre-built modules. It takes longer, but I learn more. In photography, I focus on candid moments because they're authentic - no artificial poses or forced smiles. In my future business plans, I want to build something new rather than copying existing models.
    
    I believe in the power of curiosity. When I see German automotive engineering, I don't just admire it - I study it, understand it, and think about how I can contribute to that level of precision and innovation. This is why I dream of driving on the Autobahn someday - not just for the experience, but to understand what makes German engineering so exceptional.
    
    My approach to coding is pragmatic. I use AI tools not as a crutch, but as a collaborator. I can analyze code, debug problems, and implement solutions, but I'm smart enough to leverage available tools to work more efficiently. This is the future of innovation - human creativity enhanced by artificial intelligence.`
  },
  
  // Your real achievements
  achievements: [
    { icon: 'Cpu', label: 'Electronics Projects', value: '15+', color: 'from-blue-400 to-cyan-400', description: 'Arduino & ESP32 builds' },
    { icon: 'Camera', label: 'Candid Moments', value: '1000+', color: 'from-purple-400 to-pink-400', description: 'Life documented authentically' },
    { icon: 'Video', label: 'Videos Edited', value: '25+', color: 'from-green-400 to-emerald-400', description: 'Event highlights & stories' },
    { icon: 'Zap', label: 'Years of Curiosity', value: '21+', color: 'from-orange-400 to-red-400', description: 'Never stopped wondering' }
  ],
  
  // Your core values
  coreValues: [
    {
      icon: 'Search',
      title: 'Curiosity-Driven',
      description: 'Every project starts with a question: "How does this work?" My curiosity has led me from basic circuits to complex automation systems, always pushing to understand the "why" behind the "what." This drive to explore and discover is what fuels my passion for both technology and life.',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: 'Wrench',
      title: 'Build From Scratch',
      description: 'I believe in creating rather than modifying. Whether it\'s designing an Arduino project, capturing the perfect candid shot, or planning my future automotive venture, I prefer to understand every component from the ground up. This approach takes longer, but the learning is invaluable.',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: 'Rocket',
      title: 'Future-Focused',
      description: 'My eyes are always on tomorrow. From dreaming about my own supercar manufacturing brand to exploring business through an MBA, I\'m building skills for the innovations of tomorrow. I see technology not just as it is, but as what it could become.',
      gradient: 'from-purple-500 to-pink-500'
    }
  ],
  
  currentFocus: [
    'Completing final year Electronics & Telecommunication projects',
    'Building advanced microcontroller-based IoT systems',
    'Documenting life through candid photography',
    'Creating engaging video content for college events',
    'Researching automotive manufacturing technologies',
    'Exploring business opportunities for future MBA'
  ],
  
  futureDreams: [
    'Launch my own supercar manufacturing brand in India',
    'Drive on the German Autobahn and study their engineering',
    'Complete MBA to complement technical skills with business acumen',
    'Create innovative electronic solutions for everyday problems',
    'Build a creative documentation and storytelling empire',
    'Bridge the gap between Indian innovation and global automotive excellence'
  ]
};

// Skills data for the Skills page
export const skillsData = {
  electronics: {
    title: 'Electronics & Hardware',
    icon: 'Cpu',
    color: 'from-blue-400 to-cyan-400',
    description: 'Building circuits, programming microcontrollers, and bringing hardware to life',
    skills: [
      { name: 'Arduino Programming', level: 90, years: '3+ years', experience: 'Advanced project builds' },
      { name: 'ESP32/ESP8266 Development', level: 85, years: '2+ years', experience: 'IoT systems & automation' },
      { name: 'Circuit Design & Analysis', level: 80, years: '3+ years', experience: 'From basic to complex circuits' },
      { name: 'PCB Design', level: 75, years: '2+ years', experience: 'Custom board layouts' },
      { name: 'Embedded Systems', level: 82, years: '3+ years', experience: 'Real-time system programming' },
      { name: 'Electronics Troubleshooting', level: 88, years: '4+ years', experience: 'Debug like a detective' }
    ]
  },
  creative: {
    title: 'Creative & Visual',
    icon: 'Camera',
    color: 'from-purple-400 to-pink-400',
    description: 'Capturing authentic moments and crafting compelling visual stories',
    skills: [
      { name: 'Candid Photography', level: 85, years: '2+ years', experience: 'Life documentation specialist' },
      { name: 'Video Editing', level: 70, years: '2+ years', experience: 'Event highlights & storytelling' },
      { name: 'Visual Storytelling', level: 78, years: '2+ years', experience: 'Authentic narrative creation' },
      { name: 'Content Creation', level: 80, years: '2+ years', experience: 'Multi-platform content' },
      { name: 'Adobe Lightroom', level: 82, years: '2+ years', experience: 'Photo post-processing' },
      { name: 'Adobe Premiere Pro', level: 72, years: '1+ years', experience: 'Video production workflow' }
    ]
  },
  technical: {
    title: 'Smart Coding & Problem Solving',
    icon: 'Code',
    color: 'from-green-400 to-emerald-400',
    description: 'Leveraging AI tools and logical thinking to solve complex problems',
    skills: [
      { name: 'Smart Coding with AI', level: 85, years: '2+ years', experience: 'Efficient problem-solving' },
      { name: 'Code Analysis & Debugging', level: 80, years: '3+ years', experience: 'Understanding complex systems' },
      { name: 'Problem Solving', level: 92, years: '21+ years', experience: 'Curiosity-driven approach' },
      { name: 'Technical Writing', level: 85, years: '3+ years', experience: 'Clear documentation' },
      { name: 'Research & Innovation', level: 88, years: '3+ years', experience: 'Exploring new possibilities' },
      { name: 'System Integration', level: 78, years: '2+ years', experience: 'Hardware-software fusion' }
    ]
  },
  business: {
    title: 'Business & Innovation',
    icon: 'TrendingUp',
    color: 'from-orange-400 to-red-400',
    description: 'Preparing for entrepreneurial journey and automotive industry dreams',
    skills: [
      { name: 'Entrepreneurial Thinking', level: 75, years: '2+ years', experience: 'Future business planning' },
      { name: 'Market Research', level: 72, years: '1+ years', experience: 'Industry trend analysis' },
      { name: 'Innovation Management', level: 78, years: '2+ years', experience: 'Turning ideas into reality' },
      { name: 'Product Development', level: 80, years: '2+ years', experience: 'From concept to prototype' },
      { name: 'Strategic Planning', level: 70, years: '1+ years', experience: 'Long-term vision setting' },
      { name: 'Automotive Industry Knowledge', level: 68, years: '1+ years', experience: 'Supercar manufacturing research' }
    ]
  }
};

export const toolsData = [
  { name: 'Arduino IDE', icon: '💻', category: 'Electronics', proficiency: 'Expert', usage: 'Daily' },
  { name: 'PlatformIO', icon: '🔧', category: 'Electronics', proficiency: 'Advanced', usage: 'Regular' },
  { name: 'Multimeter', icon: '⚡', category: 'Electronics', proficiency: 'Expert', usage: 'Daily' },
  { name: 'Oscilloscope', icon: '📊', category: 'Electronics', proficiency: 'Intermediate', usage: 'Weekly' },
  { name: 'Adobe Lightroom', icon: '📸', category: 'Photography', proficiency: 'Advanced', usage: 'Daily' },
  { name: 'Adobe Premiere Pro', icon: '🎬', category: 'Video', proficiency: 'Intermediate', usage: 'Weekly' },
  { name: 'Figma', icon: '🎨', category: 'Design', proficiency: 'Intermediate', usage: 'Regular' },
  { name: 'VS Code', icon: '🖥️', category: 'Development', proficiency: 'Advanced', usage: 'Daily' },
  { name: 'GitHub', icon: '🐙', category: 'Collaboration', proficiency: 'Advanced', usage: 'Daily' },
  { name: 'KiCad', icon: '⚙️', category: 'Electronics', proficiency: 'Intermediate', usage: 'Project-based' },
  { name: 'Fritzing', icon: '🔗', category: 'Electronics', proficiency: 'Advanced', usage: 'Prototyping' },
  { name: 'MATLAB', icon: '📈', category: 'Engineering', proficiency: 'Intermediate', usage: 'Academic' }
];

// Testimonials export (from previous About page)
export const testimonials = [
  {
    id: 1,
    name: 'Prof. Rajesh Kumar',
    position: 'Electronics Department Head',
    company: 'College of Engineering',
    quote: "Aditya's curiosity and hands-on approach to electronics is exceptional. He doesn't just learn concepts - he builds them from scratch.",
    avatar: '/testimonials/prof-kumar.jpg'
  },
  {
    id: 2,
    name: 'Sneha Patel',
    position: 'College Friend',
    company: 'Photography Enthusiast',
    quote: "The way Aditya captures candid moments is magical. He has this ability to be invisible while documenting the most beautiful, authentic moments.",
    avatar: '/testimonials/sneha.jpg'
  },
  {
    id: 3,
    name: 'Rohit Sharma',
    position: 'Project Collaborator',
    company: 'Tech Startup',
    quote: "Working with Aditya on electronics projects is amazing. His problem-solving approach and ability to figure out complex systems is impressive.",
    avatar: '/testimonials/rohit.jpg'
  },
  {
    id: 4,
    name: 'Dr. Priya Mehta',
    position: 'Academic Mentor',
    company: 'Research Guide',
    quote: "Aditya's vision of combining technology with business acumen is refreshing. His automotive dreams are backed by solid technical understanding.",
    avatar: '/testimonials/dr-mehta.jpg'
  },
  {
    id: 5,
    name: 'Arjun Desai',
    position: 'Video Editing Client',
    company: 'Event Organizer',
    quote: "Aditya's video editing skills brought our college tech fest to life. His ability to capture and edit authentic moments is remarkable.",
    avatar: '/testimonials/arjun.jpg'
  },
  {
    id: 6,
    name: 'Kavya Singh',
    position: 'Fellow Electronics Student',
    company: 'Study Group Partner',
    quote: "Aditya's approach to learning is inspiring. He doesn't just memorize - he experiments, builds, and truly understands every concept.",
    avatar: '/testimonials/kavya.jpg'
  }
];

// ... your existing personalInfo, skillsData, toolsData, testimonials ...

// Updated projects data with electronics focus
export const projects = [
  {
    id: 1,
    title: 'Smart Home Automation System',
    category: 'electronics',
    description: 'Complete IoT-based home automation using ESP32 with voice control, mobile app integration, and real-time monitoring. Features automated lighting, temperature control, security system, and energy management.',
    image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800&h=600&fit=crop',
    technologies: ['ESP32', 'Arduino IDE', 'MQTT', 'Sensors', 'Relay Modules'],
    status: 'completed',
    featured: true,
    details: {
      overview: 'A comprehensive home automation system built from scratch using ESP32 microcontroller. The system integrates multiple sensors, actuators, and communication protocols to create a smart, energy-efficient home environment.',
      components: [
        'ESP32 Development Board',
        'DHT22 Temperature & Humidity Sensor',
        'PIR Motion Sensors (3x)',
        '4-Channel Relay Module',
        'LDR Light Sensors',
        'Servo Motors for blinds control',
        '16x2 LCD Display',
        'Buzzer for alerts'
      ],
      buildProcess: `Phase 1: Circuit Design & Prototyping
- Designed the complete circuit using Fritzing and KiCad
- Created breadboard prototype with individual modules
- Tested each component separately before integration

Phase 2: PCB Design & Manufacturing
- Designed custom PCB for compact installation
- Used KiCad for schematic capture and layout
- Ordered PCBs from local manufacturer

Phase 3: Programming & Integration
- Developed modular C++ code for ESP32
- Implemented MQTT protocol for IoT communication
- Created mobile app interface using Flutter

Phase 4: Installation & Testing
- Installed system in actual home environment
- Conducted extensive testing for 2 weeks
- Fine-tuned sensors and automation rules`,
      challenges: 'Main challenges included power management for always-on system, reliable WiFi connectivity, and creating intuitive user interface. Solved power issues with efficient sleep modes and backup battery system.',
      results: 'Successfully reduced energy consumption by 30%, improved home security, and created convenient automation for daily tasks. System has been running reliably for 6+ months.',
      futureImprovements: 'Planning to add solar panel integration, advanced AI-based learning algorithms, and expansion to garden irrigation system.',
      technicalSpecs: {
        'Power Supply': '12V DC with battery backup',
        'Communication': 'WiFi 802.11n, MQTT Protocol',
        'Operating Temperature': '-10°C to +60°C',
        'Control Range': '100+ devices',
        'Response Time': '<500ms for local controls'
      }
    }
  },
  {
    id: 2,
    title: 'Arduino-based Traffic Light Simulation',
    category: 'electronics',
    description: 'Intelligent traffic management system prototype using Arduino with pedestrian crossing, emergency vehicle priority, and adaptive timing based on traffic density sensors.',
    image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=600&fit=crop',
    technologies: ['Arduino Uno', 'Ultrasonic Sensors', 'LEDs', 'IR Sensors'],
    status: 'completed',
    featured: true,
    details: {
      overview: 'A scaled model of intelligent traffic management system that demonstrates adaptive traffic control, pedestrian safety features, and emergency vehicle prioritization using Arduino and various sensors.',
      components: [
        'Arduino Uno R3',
        'Ultrasonic Sensors (HC-SR04) - 4x',
        'IR Sensors for vehicle detection',
        'LED Traffic Lights (12x)',
        'Push buttons for pedestrian crossing',
        'Servo motor for barrier gate',
        'LCD Display for status',
        'Jumper wires and breadboards'
      ],
      buildProcess: `Phase 1: System Analysis
- Studied real traffic light systems and timing
- Analyzed traffic patterns and requirements
- Created system architecture diagram

Phase 2: Hardware Assembly
- Built scale model of 4-way intersection
- Installed LED arrays for traffic signals
- Positioned ultrasonic sensors for vehicle detection
- Added pedestrian crossing buttons and displays

Phase 3: Algorithm Development
- Programmed adaptive timing algorithms
- Implemented emergency vehicle detection
- Created pedestrian crossing safety protocols
- Added night mode with different timing patterns

Phase 4: Testing & Optimization
- Tested with scale model vehicles
- Optimized sensor positioning and sensitivity
- Fine-tuned timing algorithms for efficiency
- Validated safety protocols`,
      challenges: 'Synchronizing multiple traffic lights, preventing conflicts, and ensuring pedestrian safety were major challenges. Solved using state machine programming and extensive safety checks.',
      results: 'Successfully demonstrated 40% improvement in traffic flow efficiency compared to fixed-timing systems. System correctly prioritizes emergency vehicles and ensures pedestrian safety.',
      futureImprovements: 'Integration with IoT for real-time traffic monitoring, machine learning for pattern recognition, and communication with vehicle systems.',
      technicalSpecs: {
        'Power Supply': '9V DC adapter',
        'Detection Range': '2-400cm (ultrasonic)',
        'Response Time': '<100ms',
        'Operating Modes': 'Normal, Night, Emergency, Maintenance',
        'Traffic Capacity': 'Up to 200 vehicles/hour per lane'
      }
    }
  },
  {
    id: 3,
    title: 'Candid Life Documentation Series',
    category: 'photography',
    description: 'Ongoing photography project capturing authentic, unposed moments of college life, family gatherings, and street photography. Focus on genuine emotions and spontaneous interactions.',
    image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&h=600&fit=crop',
    technologies: ['DSLR Camera', 'Adobe Lightroom', 'Natural Light'],
    status: 'ongoing',
    featured: true,
    details: {
      overview: 'A personal project focused on documenting authentic moments without artificial poses or setups. The goal is to capture the essence of real life through candid photography.',
      equipment: [
        'Canon EOS 1500D DSLR',
        '18-55mm Kit Lens',
        '50mm f/1.8 Prime Lens',
        'Adobe Lightroom for post-processing',
        'Natural and available light'
      ],
      approach: `Photography Philosophy:
- Be invisible while shooting
- Capture emotions, not just moments
- Focus on storytelling through images
- Respect privacy and get consent when needed

Technical Approach:
- Use fast shutter speeds to freeze action
- Shoot in burst mode for best expressions
- Prefer natural light over flash
- Minimal post-processing to maintain authenticity

Subject Areas:
- College events and student life
- Family gatherings and celebrations
- Street photography and daily life
- Friends and social interactions`,
      achievements: '1000+ candid shots captured, featured in college magazine, positive feedback from subjects who received their photos, growing Instagram following of photography enthusiasts.',
      challenges: 'Balancing being unobtrusive while getting good angles, dealing with low light situations without flash, and maintaining consistent quality across different environments.',
      impact: 'Created lasting memories for families and friends, documented important college events, and developed a unique photographic style focused on authenticity.',
      technicalSkills: 'Mastered manual camera settings, learned advanced Lightroom techniques, developed eye for composition and timing, improved ability to predict and capture decisive moments.'
    }
  },
  {
    id: 4,
    title: 'College Tech Fest Video Production',
    category: 'video',
    description: 'Complete video production for annual college technical festival including promotional videos, event coverage, and highlight reels. Used multiple camera angles and creative editing techniques.',
    image: 'https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?w=800&h=600&fit=crop',
    technologies: ['Adobe Premiere Pro', 'After Effects', 'DSLR', 'Audio Equipment'],
    status: 'completed',
    featured: false,
    details: {
      overview: 'Comprehensive video production project covering the entire tech fest from promotional content to final highlight reels, showcasing various technical competitions and cultural events.',
      equipment: [
        'Canon EOS 1500D for main footage',
        'Smartphone cameras for additional angles',
        'External microphone for interviews',
        'Tripod and handheld stabilizers',
        'Adobe Premiere Pro for editing',
        'After Effects for motion graphics'
      ],
      productionProcess: `Pre-Production:
- Created shot list and filming schedule
- Coordinated with event organizers
- Planned interview segments with participants
- Designed motion graphics templates

Production:
- 3 days of intensive filming
- Captured opening ceremony, competitions, and closing
- Conducted interviews with winners and organizers
- Gathered B-roll footage of campus and activities

Post-Production:
- Edited 5 different video deliverables
- Created promotional trailer (2 minutes)
- Produced full event documentary (15 minutes)
- Made social media clips for various platforms
- Added custom motion graphics and titles`,
      deliverables: [
        'Promotional Trailer - 2 minutes',
        'Full Event Documentary - 15 minutes',
        'Competition Highlights - 8 minutes',
        'Social Media Clips - 10x 30-60 seconds',
        'Thank You Video for Sponsors - 3 minutes'
      ],
      impact: 'Videos reached 50,000+ views across platforms, increased next year\'s participation by 25%, successfully promoted college\'s technical capabilities, received appreciation from college administration.',
      learnings: 'Improved video editing skills, learned event documentation workflow, developed ability to work under tight deadlines, enhanced storytelling through visual medium.'
    }
  },
  {
    id: 5,
    title: 'ESP32-based IoT Garden Monitor',
    category: 'electronics',
    description: 'Automated plant monitoring and irrigation system using ESP32 with soil moisture sensors, temperature monitoring, and mobile app control. Features automatic watering and real-time alerts.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop',
    technologies: ['ESP32', 'Soil Sensors', 'Water Pumps', 'Mobile App'],
    status: 'completed',
    featured: true,
    details: {
      overview: 'An intelligent garden monitoring system that automatically maintains optimal soil moisture levels, monitors environmental conditions, and provides real-time updates through a mobile application.',
      components: [
        'ESP32 DevKit V1',
        'Soil Moisture Sensors (3x)',
        'DHT22 Temperature/Humidity Sensor',
        'Water Level Sensor',
        '12V Water Pump',
        'Relay Module (2-channel)',
        'Solar Panel (optional)',
        '18650 Battery with charging module'
      ],
      systemFeatures: `Monitoring Capabilities:
- Real-time soil moisture monitoring
- Temperature and humidity tracking
- Water reservoir level monitoring
- Light intensity measurement
- Plant growth progress tracking

Automation Features:
- Automatic watering based on soil moisture
- Customizable watering schedules
- Weather-based irrigation adjustment
- Low water level alerts
- Plant care reminders

Mobile App Features:
- Real-time sensor data visualization
- Remote manual watering control
- Historical data graphs and trends
- Push notifications for alerts
- Multiple plant profile management`,
      technicalImplementation: `Hardware Setup:
- Waterproof sensor housing design
- Solar charging circuit for sustainability
- Relay control for water pump operation
- WiFi connectivity for IoT communication

Software Architecture:
- ESP32 firmware in C++ using Arduino IDE
- MQTT protocol for reliable communication
- Flutter-based mobile application
- Firebase backend for data storage
- REST API for mobile app integration

Data Management:
- Local data logging on SD card
- Cloud synchronization for backup
- Data analytics for plant health insights
- Automated report generation`,
      results: 'Successfully maintained optimal plant health, reduced water consumption by 40% compared to manual watering, enabled remote garden management, achieved 99% system uptime over 6 months of operation.',
      applications: 'Suitable for home gardens, greenhouse automation, small-scale farming, research projects, and educational demonstrations of IoT applications in agriculture.'
    }
  },
  {
    id: 6,
    title: 'Automotive ECU Simulation Project',
    category: 'electronics',
    description: 'Simulation of Electronic Control Unit for automotive applications using microcontrollers. Includes engine parameter monitoring, sensor data processing, and real-time diagnostics.',
    image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800&h=600&fit=crop',
    technologies: ['STM32', 'CAN Bus', 'Automotive Sensors', 'Real-time OS'],
    status: 'completed',
    featured: false,
    details: {
      overview: 'A comprehensive simulation of automotive Electronic Control Unit (ECU) functionality, designed to understand and replicate the complex systems used in modern vehicles for engine management and diagnostics.',
      components: [
        'STM32F4 Discovery Board',
        'MCP2515 CAN Controller',
        'Automotive-grade sensors simulation',
        'TFT Display for diagnostics',
        'Rotary encoder for user input',
        'Real-time clock module',
        'SD card for data logging'
      ],
      simulatedSystems: `Engine Management:
- Fuel injection timing control
- Ignition timing optimization
- Air-fuel ratio management
- Idle speed control
- Throttle position monitoring

Sensor Integration:
- Engine RPM calculation
- Coolant temperature monitoring
- Intake air temperature sensing
- Mass air flow measurement
- Oxygen sensor simulation

Diagnostic Features:
- OBD-II protocol implementation
- Error code generation and storage
- Real-time parameter monitoring
- Performance metrics calculation
- System health diagnostics`,
      technicalChallenges: `Real-time Constraints:
- Critical timing requirements for engine control
- Interrupt-driven sensor data processing
- Deterministic response times
- Multi-tasking with priority scheduling

Communication Protocols:
- CAN bus message formatting
- OBD-II standard compliance
- Diagnostic trouble code (DTC) management
- Network communication reliability

Safety Considerations:
- Fail-safe mechanisms implementation
- Redundant sensor monitoring
- Emergency shutdown procedures
- Data validation and error handling`,
      learningOutcomes: 'Gained deep understanding of automotive electronics, real-time embedded systems, CAN bus communication, automotive safety standards, and preparation for future work in automotive industry.',
      futureApplications: 'Foundation knowledge for automotive engineering career, understanding of vehicle diagnostics, preparation for electric vehicle control systems, and insight into automotive manufacturing processes.'
    }
  }
];

// Project categories with correct counts
export const projectCategories = [
  { id: 'all', name: 'All Projects', count: projects.length },
  { id: 'electronics', name: 'Electronics', count: projects.filter(p => p.category === 'electronics').length },
  { id: 'photography', name: 'Photography', count: projects.filter(p => p.category === 'photography').length },
  { id: 'video', name: 'Video', count: projects.filter(p => p.category === 'video').length }
];

// ... your existing personalInfo, skillsData, toolsData, testimonials, projects ...

// Enhanced blog posts data with detailed content for Aditya
export const blogPosts = [
  {
    id: 1,
    title: 'Why I Choose to Build Everything from Scratch: Lessons from Electronics',
    slug: 'why-i-build-from-scratch',
    excerpt: 'My philosophy of understanding technology by building it myself, and why I prefer creating over modifying existing solutions. From Arduino projects to life decisions.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop',
    category: 'philosophy',
    tags: ['Electronics', 'Innovation', 'Learning', 'Philosophy'],
    author: 'Aditya Ladhane',
    publishDate: '2024-01-15',
    readTime: '8 min read',
    featured: true,
    views: 1250,
    content: {
      introduction: `There's something deeply satisfying about taking apart a gadget, understanding its components, and then building something similar—or better—from the ground up. This isn't just a hobby for me; it's a fundamental approach to how I engage with technology and life.

When I see a smart home device in the market, my first thought isn't "should I buy this?" but rather "how can I build this myself?" This mindset has shaped my journey as an Electronics & Telecommunication student and continues to drive my passion for innovation.`,
      
      theWhyBehind: `Building from scratch isn't the easiest path. It takes more time, requires deeper understanding, and often leads to initial failures. So why do I choose this approach consistently?

**Complete Understanding**: When you build something yourself, you understand every component, every connection, every line of code. There's no "black box" mystery. If something breaks, you know exactly how to fix it.

**Customization Freedom**: Pre-built solutions come with limitations. When you build from scratch, you can customize every aspect to meet your exact needs. Want your home automation system to work with a specific sensor that's not commercially supported? No problem when you've built the entire system yourself.

**Learning Compound Effect**: Each project builds upon the previous one. The Arduino skills from my first LED project now help me design complex IoT systems. The troubleshooting skills from failed circuits help me debug any electronic system.`,

      realWorldExamples: `Let me share some concrete examples from my projects:

**Smart Home Automation**: Instead of buying expensive smart home hubs, I built my own using ESP32. Not only did it cost 70% less, but it also has features specifically designed for my home's layout and my family's routines.

**Traffic Light Simulation**: For my college project, I could have used simulation software. Instead, I built a physical model with actual sensors and microcontrollers. The hands-on experience taught me more about real-world constraints than any simulation could.

**Photography Documentation**: Rather than following generic photography tutorials, I developed my own candid photography style by experimenting with different techniques and understanding what works for authentic moment capture.`,

      challengesAndSolutions: `Building from scratch isn't without its challenges:

**Time Investment**: Projects take longer when you're learning and building simultaneously. My solution? I view the extra time as an investment in knowledge that pays dividends in future projects.

**Initial Failures**: First prototypes rarely work perfectly. I've learned to embrace failure as data—each failed attempt teaches me something valuable about the problem I'm trying to solve.

**Resource Requirements**: Building from scratch often requires more components and tools. I've built a network of suppliers and learned to start with basic components, upgrading as projects evolve.`,

      futureApplications: `This build-from-scratch philosophy extends beyond electronics:

**Business Ventures**: When I eventually launch my supercar manufacturing dream, I want to understand every aspect—from material science to manufacturing processes to customer experience.

**MBA Journey**: I plan to approach business education the same way—not just learning theories, but applying them to real ventures and understanding the practical implications.

**Innovation Mindset**: In a world of pre-built solutions, the ability to create from fundamentals becomes a competitive advantage.`,

      conclusion: `Building from scratch has taught me that the journey is often more valuable than the destination. Yes, it takes longer and requires more effort, but the deep understanding, problem-solving skills, and confidence gained are irreplaceable.

Every time I successfully build something that others buy ready-made, I'm not just saving money—I'm investing in my understanding of how the world works. And in a rapidly evolving technological landscape, that understanding is the most valuable asset I can have.

So the next time you see something interesting, don't just admire it—ask yourself: "How can I build this?" You might be surprised by what you discover about both the technology and yourself.`
    }
  },
  {
    id: 2,
    title: 'The Art of Candid Photography: Capturing Life Unposed',
    slug: 'candid-photography-authentic-moments',
    excerpt: 'How I developed my approach to documenting authentic moments and the stories behind my favorite shots. The beauty of genuine emotions captured naturally.',
    image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&h=600&fit=crop',
    category: 'photography',
    tags: ['Photography', 'Art', 'Documentation', 'Creativity'],
    author: 'Aditya Ladhane',
    publishDate: '2024-01-10',
    readTime: '7 min read',
    featured: true,
    views: 980,
    content: {
      introduction: `In a world saturated with posed selfies and staged photoshoots, there's something magical about capturing a genuine laugh, a moment of concentration, or the quiet joy of someone lost in thought. Candid photography has become my way of documenting life as it truly happens—authentic, unguarded, and beautiful.

My journey into candid photography started accidentally during college events. While others focused on getting the perfect group shots, I found myself drawn to the in-between moments: friends sharing a joke, the concentration on someone's face during a presentation, the spontaneous celebrations after a successful project demo.`,

      philosophyOfAuthenticity: `**Why Candid Over Posed?**

Posed photography has its place, but candid shots tell stories that staged photos simply cannot. When someone doesn't know they're being photographed, their true personality shines through. The shy smile, the animated gesture while explaining something exciting, the quiet moment of reflection—these are the images that transport you back to the actual feeling of that moment.

**The Ethics of Candid Photography**

With candid photography comes responsibility. I always ensure:
- I have implicit or explicit consent from people in my shots
- I respect private moments and don't intrude
- I share images only with permission
- I focus on positive, respectful moments

The goal is to celebrate life, not exploit unguarded moments.`,

      technicalApproach: `**Camera Settings for Candid Success**

Candid photography requires technical preparation:

**Fast Shutter Speeds**: People move unpredictably. I typically shoot at 1/125s or faster to freeze natural motion without blur.

**Burst Mode**: Expressions change in milliseconds. Burst mode helps capture that perfect micro-expression in a sequence of shots.

**Silent Shooting**: Many modern cameras have silent modes. This helps maintain the natural atmosphere without the distraction of camera clicks.

**Prime Lenses**: My 50mm f/1.8 is perfect for candid work—wide aperture for low light and beautiful background blur, focal length that doesn't require getting too close to subjects.`,

      storytellingThroughMoments: `**The Stories Behind My Favorite Shots**

*The Concentrated Coder*: During a hackathon, I captured a friend completely absorbed in debugging code at 2 AM. The focus, the messy hair, the empty coffee cups around—it perfectly encapsulated the dedication of student developers.

*Family Celebration*: At a cousin's graduation, instead of the formal photos, I caught the exact moment my aunt realized her daughter had graduated with honors. The surprise, joy, and pride on her face—that's a memory the family treasures more than any posed photo.

*Street Documentation*: Walking through Pune's markets, I documented the small interactions—a vendor helping a elderly customer, children playing between stalls, the focused craftsmanship of a street artist.`,

      challengesAndSolutions: `**Common Challenges in Candid Photography**

**Low Light Situations**: Many candid moments happen in less-than-ideal lighting. Solution: Master your camera's high ISO capabilities and embrace grain as part of the aesthetic.

**Timing**: The perfect expression lasts milliseconds. Solution: Anticipate moments—watch for the setup of a joke, the buildup to a reaction, the approach of an emotional moment.

**Being Invisible**: People act differently when they notice a camera. Solution: Use longer focal lengths, be patient, become part of the environment so people forget you're there.

**Equipment Limitations**: Not always practical to carry large camera gear. Solution: Master smartphone photography—modern phones are incredibly capable for candid work.`,

      postProcessingPhilosophy: `**Keeping It Authentic in Post**

My editing philosophy for candid photos is "enhance, don't alter":

- Adjust exposure and contrast to match what the moment felt like
- Maintain natural colors—avoid heavy filters that change the mood
- Crop for better composition but don't alter the essential story
- Sometimes black and white works better for emphasizing emotion over setting

The goal is to make the photo feel like the memory, not to create something that wasn't there.`,

      growthAndLearning: `**What Candid Photography Has Taught Me**

**Patience**: The best moments can't be rushed. Learning to wait and observe has made me more attentive to life in general.

**Human Connection**: Really seeing people—their expressions, reactions, interactions—has made me more empathetic and socially aware.

**Present Moment Awareness**: Always being ready to capture a moment has trained me to be more present and appreciative of everyday beauty.

**Technical Skills**: The unpredictability of candid photography has forced me to master my camera settings intuitively.`,

      futureDirections: `**Where This Journey Is Taking Me**

Candid photography started as a hobby but has become a valuable skill set:

- **Event Documentation**: Friends now ask me to document their important events because they know I'll capture the real emotions, not just the formal moments.

- **Social Media Content**: In an age of curated feeds, authentic content stands out. My candid approach brings genuineness to digital platforms.

- **Business Applications**: Understanding how to capture authentic moments will be valuable for future marketing and brand storytelling in my entrepreneurial ventures.

- **Personal Archive**: I'm building a rich archive of genuine moments from this phase of my life—college, friendships, family interactions—that I'll treasure decades from now.`,

      conclusion: `Candid photography has taught me that the most beautiful moments are often the unplanned ones. In our carefully curated digital world, there's immense value in documenting life as it actually happens—messy, spontaneous, and real.

Every candid shot is a small act of preserving authentic human experience. Whether it's a friend's genuine laughter, a moment of creative concentration, or the quiet beauty of everyday life, these images become windows to real moments that posed photography simply cannot capture.

The next time you're in a beautiful moment, resist the urge to immediately stage a photo. Sometimes the most powerful images happen when we simply observe and capture life as it unfolds naturally.`
    }
  },
  {
    id: 3,
    title: 'Smart Coding with AI: A Modern Approach to Problem Solving',
    slug: 'smart-coding-with-ai-tools',
    excerpt: 'How I leverage AI tools to solve problems efficiently while understanding the underlying logic. The future of programming is collaboration with AI.',
    image: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=800&h=600&fit=crop',
    category: 'technology',
    tags: ['AI', 'Programming', 'Productivity', 'Innovation'],
    author: 'Aditya Ladhane',
    publishDate: '2024-01-05',
    readTime: '9 min read',
    featured: false,
    views: 2100,
    content: {
      introduction: `There's a ongoing debate in the programming community: does using AI tools make you a better or worse programmer? As someone who openly embraces AI-assisted development while maintaining a strong foundation in understanding code logic, I believe we're asking the wrong question.

The real question isn't whether to use AI tools, but how to use them intelligently to enhance our problem-solving capabilities while deepening our understanding of the underlying principles.`,

      myApproachToAICoding: `**Smart Coding vs. Dependent Coding**

I call my approach "smart coding" because it's about intelligent collaboration with AI, not blind dependence. Here's how I differentiate:

**Smart Coding**:
- Use AI to generate boilerplate code, then understand and modify it
- Ask AI to explain complex algorithms or code patterns
- Leverage AI for debugging by describing the problem and analyzing suggestions
- Use AI to explore different approaches to the same problem

**Dependent Coding**:
- Copy-paste AI code without understanding what it does
- Rely on AI for basic syntax without learning the fundamentals
- Use AI as a replacement for learning rather than a learning accelerator

The key difference? Smart coding makes you better at programming; dependent coding makes you worse.`,

      practicalApplications: `**Real Examples from My Projects**

**Arduino Project Optimization**: When building my home automation system, I described my circuit requirements to AI and got multiple implementation approaches. Rather than using the first solution, I analyzed each approach, understood the trade-offs, and combined the best elements.

**Circuit Debugging**: When my ESP32 project wasn't reading sensor data correctly, I described the symptoms to AI. The suggestions led me to understand I2C communication protocols better than any textbook could.

**Algorithm Learning**: For my traffic light simulation, I needed to implement state machines. AI helped me understand the concept by generating examples, then I modified the logic for my specific requirements.

**Code Review**: I use AI as a second pair of eyes for code review, asking it to identify potential issues, suggest optimizations, and explain complex logic I've written.`,

      theEnhancedLearningProcess: `**How AI Accelerates Understanding**

Traditional learning often follows this path:
Read theory → Practice basic examples → Apply to real problems → Debug issues → Understand deeply

With AI assistance, the process becomes:
Describe problem → Generate multiple solutions → Analyze approaches → Understand trade-offs → Implement optimal solution → Debug with AI insights → Understand deeply

The AI-assisted path is faster and often leads to deeper understanding because:

1. **Multiple Perspectives**: AI can show you 3-4 different approaches to the same problem instantly
2. **Immediate Explanation**: You can ask "why" about any line of code and get detailed explanations
3. **Pattern Recognition**: AI helps you see patterns across different programming paradigms
4. **Error Analysis**: AI can explain not just what's wrong, but why it's wrong and how to fix it`,

      ethicsAndBestPractices: `**Responsible AI Usage in Programming**

**Academic Integrity**: When working on assignments or projects for evaluation, I'm transparent about AI usage and ensure I can explain every line of code I submit.

**Professional Standards**: In collaborative projects, I make sure team members understand any AI-generated code I contribute.

**Continuous Learning**: I regularly challenge myself to code without AI assistance to ensure my fundamental skills remain sharp.

**Understanding Over Speed**: I prioritize understanding AI suggestions over quickly implementing them.`,

      skillsThatMatter: `**What Skills Become More Important**

In an AI-assisted programming world, certain skills become even more valuable:

**Problem Decomposition**: The ability to break complex problems into clear, describable components that AI can help solve.

**Code Analysis**: Understanding what code does, why it works, and how to modify it becomes crucial when working with AI-generated solutions.

**Architecture Thinking**: AI is great at implementing specific functions but understanding system architecture and design patterns remains a human skill.

**Domain Knowledge**: In my electronics projects, understanding the hardware requirements and constraints helps me guide AI toward practical solutions.

**Debugging Intuition**: While AI can suggest fixes, developing intuition about where problems might occur is still essential.`,

      futureImplications: `**Preparing for the AI-Augmented Future**

**Industry Evolution**: Companies are already looking for developers who can effectively collaborate with AI tools while maintaining strong fundamental knowledge.

**Educational Shift**: Programming education is evolving to focus more on problem-solving and system design, with AI handling routine implementation.

**Innovation Opportunities**: AI assistance allows individual developers to build more complex systems, opening opportunities for solo entrepreneurs and small teams.

**Competitive Advantage**: Developers who master AI collaboration while maintaining deep understanding will be the most valuable in the job market.`,

      personalGrowthStory: `**My Journey with AI-Assisted Development**

Initially, I was skeptical about AI coding tools. I worried they would make me lazy or dependent. But after careful experimentation, I found the opposite was true.

**Month 1-2**: Used AI for simple tasks, focused on understanding every suggestion.

**Month 3-4**: Started using AI for more complex problems, developed my "explain this" habit.

**Month 5-6**: Began using AI for learning new concepts, treating it like an infinitely patient tutor.

**Current State**: AI has become my coding partner—I can tackle more ambitious projects because I can move faster through implementation while spending more time on design and optimization.

The result? I'm building more complex systems, learning faster, and understanding deeper than ever before.`,

      conclusion: `Smart coding with AI isn't about replacing human intelligence—it's about augmenting it. The developers who will thrive in the future aren't those who avoid AI or those who depend on it blindly, but those who learn to collaborate with it intelligently.

AI tools are like calculators for mathematicians—they handle the computational heavy lifting so we can focus on the creative and analytical aspects of problem-solving. Just as mathematicians didn't become worse at math when calculators were invented, programmers won't become worse at programming if they use AI tools wisely.

The key is maintaining curiosity, asking "why" and "how," and using AI as a learning accelerator rather than a thinking replacement. In doing so, we can build better solutions faster while continuously improving our understanding of the craft we love.

The future belongs to those who can think clearly about problems and communicate effectively with both humans and AI to solve them.`
    }
  },
  {
    id: 4,
    title: 'My Dream: Building India\'s Next Generation Supercar Brand',
    slug: 'indian-supercar-manufacturing-dream',
    excerpt: 'Why I believe the future of automotive innovation lies in India, and my vision for creating a supercar brand that combines German engineering precision with Indian innovation.',
    image: 'https://images.unsplash.com/photo-1544829099-b9a0c5303bea?w=800&h=600&fit=crop',
    category: 'dreams',
    tags: ['Automotive', 'Innovation', 'Entrepreneurship', 'Dreams'],
    author: 'Aditya Ladhane',
    publishDate: '2023-12-28',
    readTime: '12 min read',
    featured: true,
    views: 1850,
    content: {
      introduction: `Every time I see a Lamborghini, Ferrari, or McLaren, I don't just see a beautiful machine—I see decades of engineering excellence, cultural heritage, and unwavering commitment to pushing the boundaries of what's possible. But I also see an opportunity that's been waiting for the right moment: India's chance to join the ranks of the world's supercar manufacturers.

This isn't just a business dream for me; it's a vision of what Indian engineering and innovation can achieve when we dare to compete at the highest levels of automotive excellence.`,

      whyIndiaNow: `**The Perfect Storm of Opportunity**

Several factors are aligning to make this the perfect time for an Indian supercar manufacturer:

**Engineering Talent**: India produces world-class engineers who work for global automotive companies. We have the technical expertise—we just need to channel it toward high-performance automotive innovation.

**Manufacturing Capability**: Indian automotive manufacturing has evolved tremendously. Companies like Tata, Mahindra, and Bajaj have proven that Indian brands can compete globally.

**Digital Integration**: Unlike traditional supercar manufacturers, a new Indian brand can be built from the ground up with integrated digital systems, AI assistance, and IoT connectivity.

**Market Timing**: The global supercar market is ready for disruption, especially as it transitions toward hybrid and electric powertrains—areas where new manufacturers can compete on equal footing.

**Cultural Moment**: India is gaining confidence on the global stage in technology, space exploration, and innovation. Automotive excellence is the next frontier.`,

      visionAndPhilosophy: `**What Would Make an Indian Supercar Different?**

My vision isn't about copying existing supercar formulas—it's about creating something uniquely valuable:

**Smart Performance**: Integrating AI-driven performance optimization, predictive maintenance, and adaptive driving dynamics that learn from driver behavior.

**Sustainable Innovation**: Leading the transition to high-performance electric and hybrid systems while maintaining the emotional connection that supercars provide.

**Accessible Excellence**: Creating a brand ladder that makes supercar technology accessible at different price points, not just for the ultra-wealthy.

**Cultural Integration**: Incorporating Indian design philosophy, materials, and craftsmanship in ways that enhance rather than compromise performance.

**Digital-First Approach**: Built-in connectivity, over-the-air updates, and digital services that evolve the car's capabilities over time.`,

      technicalApproach: `**Engineering Philosophy: Learn, Adapt, Innovate**

**Study the Masters**: My plan begins with deep analysis of what makes German, Italian, and British supercars exceptional. This isn't about copying—it's about understanding the fundamental principles of high-performance engineering.

**Material Innovation**: Leveraging India's growing capabilities in advanced materials, composites, and metallurgy to create lighter, stronger chassis and body components.

**Powertrain Strategy**: 
- Phase 1: High-performance hybrid systems combining internal combustion with electric assistance
- Phase 2: Full electric with breakthrough battery technology and ultra-fast charging
- Phase 3: Next-generation powertrains (hydrogen, synthetic fuels, or yet-to-be-invented technologies)

**Manufacturing Philosophy**: Combining automated precision with artisanal craftsmanship—using robots for precision assembly while maintaining human touch for quality and customization.`,

      businessStrategy: `**Building a Sustainable Supercar Business**

**Start Small, Think Big**: Begin with limited production runs to establish quality reputation and brand prestige before scaling.

**Vertical Integration**: Control key technologies and components to ensure quality and enable rapid innovation cycles.

**Global Partnerships**: Collaborate with established suppliers and technology partners while building internal capabilities.

**Experience Design**: Supercars aren't just about the product—they're about the entire ownership experience, from purchase to service to community.

**Technology Licensing**: Develop innovations that can be licensed to other manufacturers, creating additional revenue streams.`,

      learningJourney: `**My Preparation Path**

**Technical Foundation**: My Electronics & Telecommunication background provides understanding of the increasing electronic complexity in modern supercars.

**Business Acumen**: Planning to pursue MBA to understand the business, finance, and management aspects of building a global automotive brand.

**Industry Experience**: Seeking opportunities to work with automotive companies or high-performance engineering firms to understand industry practices.

**Network Building**: Connecting with automotive engineers, designers, business leaders, and potential investors who share this vision.

**Prototype Development**: Starting with smaller projects—modified vehicles, electric conversions, performance upgrades—to build practical experience.`,

      marketOpportunity: `**The Global Supercar Market Reality**

**Market Size**: The global supercar market is worth over $26 billion and growing, driven by emerging market wealth and technological advancement.

**Customer Evolution**: Modern supercar buyers want more than just performance—they want technology, sustainability, and unique experiences.

**Competition Gaps**: 
- Most established brands are heritage-focused rather than innovation-focused
- Limited representation from Asian manufacturers despite Asia being a major market
- Opportunity for brands that understand digital-native customers

**Indian Market Potential**: India's wealth creation is accelerating, creating a domestic market for high-performance vehicles alongside global opportunities.`,

      challengesAndRealities: `**Honest Assessment of Challenges**

**Capital Requirements**: Supercar manufacturing requires massive initial investment for R&D, manufacturing facilities, and market entry.

**Regulatory Hurdles**: Global automotive regulations are complex and require significant expertise to navigate.

**Brand Building**: Creating a luxury brand takes time and consistent execution—there are no shortcuts to prestige.

**Technical Complexity**: Modern supercars integrate thousands of components from hundreds of suppliers—managing this complexity is a massive undertaking.

**Market Acceptance**: Convincing customers to pay supercar prices for a new brand requires exceptional product and marketing execution.

**Talent Acquisition**: Attracting world-class automotive talent to a startup requires compelling vision and competitive compensation.`,

      sustainabilityFocus: `**Environmental Responsibility in High Performance**

**Performance Without Compromise**: Proving that sustainable technologies can deliver supercar-level performance breaks down false choices between environmental responsibility and driving excitement.

**Technology Development**: Innovations developed for high-performance applications often trickle down to mainstream vehicles, amplifying environmental impact.

**Lifecycle Thinking**: Designing for recyclability, repairability, and upgradability to minimize environmental footprint over the vehicle's life.

**Carbon Neutrality**: Commitment to carbon-neutral manufacturing and operations from day one.`,

      culturalImpact: `**Beyond Business: Cultural and Economic Impact**

**Inspiring Innovation**: A successful Indian supercar brand would inspire a generation of engineers and entrepreneurs to think bigger about what's possible.

**Economic Development**: High-performance automotive manufacturing creates high-value jobs and develops advanced manufacturing capabilities.

**Global Perception**: Success in supercars would enhance India's global brand in engineering and innovation.

**Educational Partnership**: Collaborating with universities to advance automotive engineering education and research.

**Supplier Development**: Building a ecosystem of high-performance suppliers that can serve multiple industries.`,

      timelineAndMilestones: `**Realistic Development Timeline**

**Years 1-3: Foundation Building**
- Complete engineering education and gain industry experience
- Build initial team and advisory board
- Develop concept designs and initial prototypes
- Secure seed funding and establish legal structure

**Years 4-6: Product Development**
- Develop first production vehicle design
- Build manufacturing partnerships
- Complete regulatory approvals for initial markets
- Build brand awareness and pre-order pipeline

**Years 7-10: Market Entry and Growth**
- Launch first production vehicle
- Establish dealer network and service infrastructure
- Develop second generation products
- Achieve profitability and plan international expansion

**Years 10+: Global Expansion**
- Establish manufacturing presence in key markets
- Launch multiple product lines
- Consider strategic partnerships or public offering
- Cement position as global supercar manufacturer`,

      conclusion: `This dream might seem impossibly ambitious for a 21-year-old electronics student from Pune, but every great automotive brand started with someone who believed they could build something better.

Ferrari began with Enzo's racing passion. Lamborghini started because Ferruccio wanted to prove a point to Enzo Ferrari. McLaren grew from Bruce McLaren's engineering innovations. Koenigsegg began with Christian's teenage dream to build the perfect sports car.

What all these founders had in common wasn't vast initial resources or perfect timing—it was unwavering belief that they could create something exceptional, combined with the persistence to turn that belief into reality.

India has the engineering talent, the manufacturing capability, and the growing wealth to support a world-class supercar manufacturer. What we need is someone willing to take on the challenge of building it.

I believe that someone could be me. Not today, not tomorrow, but someday—when I've built the knowledge, the team, the resources, and the partnerships necessary to turn this dream into a plan, and that plan into reality.

The road from here to there is long and uncertain, but every journey of a thousand miles begins with a single step. My first step is finishing my engineering degree while building the foundation for everything that comes next.

The world doesn't know it yet, but the next great supercar brand might just come from India. And I intend to be the one who builds it.`
    }
  }
];

// Blog categories with correct counts
export const blogCategories = [
  { id: 'all', name: 'All Posts', count: blogPosts.length },
  { id: 'philosophy', name: 'Philosophy', count: blogPosts.filter(p => p.category === 'philosophy').length },
  { id: 'photography', name: 'Photography', count: blogPosts.filter(p => p.category === 'photography').length },
  { id: 'technology', name: 'Technology', count: blogPosts.filter(p => p.category === 'technology').length },
  { id: 'dreams', name: 'Dreams', count: blogPosts.filter(p => p.category === 'dreams').length }
];


// ... your existing personalInfo, skillsData, toolsData, testimonials, projects, blogPosts ...

// Photography gallery data
export const galleryPhotos = [
  {
    id: 1,
    title: "Golden Hour in Pune",
    url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&h=600&fit=crop&auto=format&q=80",
    thumbnailUrl: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&h=300&fit=crop&auto=format&q=80",
    description: "Captured during my evening walk, this sunset over Pune's skyline reminded me why I love candid photography.",
    category: "nature",
    date: "2024-01-15",
    location: "Pune, India",
    camera: "Canon EOS 1500D",
    settings: "f/8, 1/125s, ISO 200"
  },
  {
    id: 2,
    title: "Street Vendor's Focus",
    url: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&h=600&fit=crop&auto=format&q=80",
    thumbnailUrl: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=400&h=300&fit=crop&auto=format&q=80",
    description: "The concentration on this vendor's face while preparing street food. These authentic moments are what I live for.",
    category: "people",
    date: "2024-01-12",
    location: "Mumbai Street Market",
    camera: "Canon EOS 1500D",
    settings: "f/2.8, 1/60s, ISO 800"
  },
  {
    id: 3,
    title: "Friends Laughing",
    url: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&h=600&fit=crop&auto=format&q=80",
    thumbnailUrl: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=400&h=300&fit=crop&auto=format&q=80",
    description: "Unguarded laughter during college break. This is why I prefer candid over posed photography.",
    category: "people",
    date: "2024-01-08",
    location: "College Campus",
    camera: "Canon EOS 1500D",
    settings: "f/1.8, 1/125s, ISO 400"
  },
  {
    id: 4,
    title: "City Lights Reflection",
    url: "https://images.unsplash.com/photo-1494526585095-c41746248156?w=800&h=600&fit=crop&auto=format&q=80",
    thumbnailUrl: "https://images.unsplash.com/photo-1494526585095-c41746248156?w=400&h=300&fit=crop&auto=format&q=80",
    description: "Night photography experiment - capturing the city's energy through reflections and lights.",
    category: "urban",
    date: "2024-01-05",
    location: "Pune City Center",
    camera: "Canon EOS 1500D",
    settings: "f/4, 2s, ISO 100"
  },
  {
    id: 5,
    title: "Workshop Concentration",
    url: "https://images.unsplash.com/photo-1581092795442-8ec83f6c9b1f?w=800&h=600&fit=crop&auto=format&q=80",
    thumbnailUrl: "https://images.unsplash.com/photo-1581092795442-8ec83f6c9b1f?w=400&h=300&fit=crop&auto=format&q=80",
    description: "A fellow student deep in thought during our electronics workshop. The focus is palpable.",
    category: "academic",
    date: "2024-01-03",
    location: "Electronics Lab",
    camera: "Canon EOS 1500D",
    settings: "f/2.8, 1/80s, ISO 640"
  },
  {
    id: 6,
    title: "Monsoon Reflections",
    url: "https://images.unsplash.com/photo-1418065460487-3956c3043633?w=800&h=600&fit=crop&auto=format&q=80",
    thumbnailUrl: "https://images.unsplash.com/photo-1418065460487-3956c3043633?w=400&h=300&fit=crop&auto=format&q=80",
    description: "Pune's monsoon creates magical moments. This reflection captured after a heavy downpour.",
    category: "nature",
    date: "2024-01-01",
    location: "Pune Streets",
    camera: "Canon EOS 1500D",
    settings: "f/5.6, 1/60s, ISO 320"
  },
  {
    id: 7,
    title: "Tech Fest Energy",
    url: "https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?w=800&h=600&fit=crop&auto=format&q=80",
    thumbnailUrl: "https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?w=400&h=300&fit=crop&auto=format&q=80",
    description: "The excitement and energy during our college tech fest. Captured between official event photography.",
    category: "events",
    date: "2023-12-28",
    location: "College Auditorium",
    camera: "Canon EOS 1500D",
    settings: "f/3.2, 1/100s, ISO 800"
  },
  {
    id: 8,
    title: "Morning Coffee Ritual",
    url: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&h=600&fit=crop&auto=format&q=80",
    thumbnailUrl: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=300&fit=crop&auto=format&q=80",
    description: "The quiet morning ritual of coffee preparation. Finding beauty in everyday moments.",
    category: "lifestyle",
    date: "2023-12-25",
    location: "Home",
    camera: "Canon EOS 1500D",
    settings: "f/2.2, 1/80s, ISO 200"
  },
  {
    id: 9,
    title: "Architecture Details",
    url: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=800&h=600&fit=crop&auto=format&q=80",
    thumbnailUrl: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=400&h=300&fit=crop&auto=format&q=80",
    description: "The intricate details of old Pune architecture. History captured through my lens.",
    category: "architecture",
    date: "2023-12-22",
    location: "Old Pune",
    camera: "Canon EOS 1500D",
    settings: "f/8, 1/125s, ISO 100"
  },
  {
    id: 10,
    title: "Student Life Candid",
    url: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&h=600&fit=crop&auto=format&q=80",
    thumbnailUrl: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=400&h=300&fit=crop&auto=format&q=80",
    description: "Study session in the library. The dedication of my fellow students inspires me every day.",
    category: "academic",
    date: "2023-12-20",
    location: "College Library",
    camera: "Canon EOS 1500D",
    settings: "f/1.8, 1/60s, ISO 1600"
  },
  {
    id: 11,
    title: "Festival Colors",
    url: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&h=600&fit=crop&auto=format&q=80",
    thumbnailUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=300&fit=crop&auto=format&q=80",
    description: "The vibrant colors and joy during Diwali celebrations. Culture and emotion in one frame.",
    category: "events",
    date: "2023-11-15",
    location: "Community Festival",
    camera: "Canon EOS 1500D",
    settings: "f/4, 1/125s, ISO 400"
  },
  {
    id: 12,
    title: "Quiet Moment",
    url: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=800&h=600&fit=crop&auto=format&q=80",
    thumbnailUrl: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400&h=300&fit=crop&auto=format&q=80",
    description: "A moment of introspection captured during sunset. Sometimes the quiet moments speak the loudest.",
    category: "people",
    date: "2023-11-10",
    location: "College Terrace",
    camera: "Canon EOS 1500D",
    settings: "f/2.8, 1/80s, ISO 200"
  }
];

// Gallery categories
export const galleryCategories = [
  { id: 'all', name: 'All Photos', count: galleryPhotos.length },
  { id: 'people', name: 'People', count: galleryPhotos.filter(p => p.category === 'people').length },
  { id: 'nature', name: 'Nature', count: galleryPhotos.filter(p => p.category === 'nature').length },
  { id: 'urban', name: 'Urban', count: galleryPhotos.filter(p => p.category === 'urban').length },
  { id: 'events', name: 'Events', count: galleryPhotos.filter(p => p.category === 'events').length },
  { id: 'academic', name: 'Academic', count: galleryPhotos.filter(p => p.category === 'academic').length }
];
