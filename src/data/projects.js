export const projectsData = [
  {
    id: 0,
    slug: 'portfolio',
    title: 'Portfolio',
    subtitle: 'Vishnu Vardhan',
    description: 'A dynamic portfolio showcasing my projects, skills, and contributions using the latest web technologies.',
    longDescription: 'My personal portfolio is built to highlight my journey as a developer. It integrates advanced features like profile views tracking, a love count mechanism, and server-side actions for seamless interactivity and performance.',
    tech: ['React.js', 'Vite', 'Vanilla CSS', 'Phosphor Icons', 'React Router'],
    features: [
      'API to track and display profile views in real-time.',
      'Love count feature to allow visitors to express appreciation for the work.',
      'Implemented server actions using the latest React features.',
      'Dynamic project listing with slug-based routing for detailed pages.',
      'Mobile-responsive and optimized for all devices.'
    ],
    challenges: [
      'Implementing real-time tracking for profile views efficiently.',
      'Designing and integrating a scalable database schema with Mongoose.',
      'Utilizing server actions for seamless and performant interactions.',
      'Ensuring cross-browser and device compatibility for UI components.'
    ],
    learnings: [
      'Deepened knowledge of React hooks and their use cases.',
      'Gained experience in designing interactive UI components.',
      'Improved ability to optimize performance for web applications.'
    ],
    github: 'https://github.com/vishnuisukapatla3',
    live: '#'
  },
  {
    id: 1,
    slug: 'revjobs-microservices',
    title: 'RevJobs Microservices Migration',
    subtitle: 'Cloud Architecture & DevOps',
    description: 'Migrated a monolithic job portal into domain-driven microservices deployed on AWS with automated CI/CD and containerization.',
    longDescription: 'This project involved re-architecting the RevJobs platform into independent microservices. Implemented a robust microservices ecosystem focusing on high availability, fault tolerance, and scalable infrastructure.',
    tech: ['Java 17', 'Spring Boot 3', 'Spring Cloud', 'Docker', 'Jenkins', 'AWS (EC2, S3, RDS)', 'API Gateway', 'Eureka', 'Resilience4j'],
    features: [
      'Implemented Centralized API Gateway using Spring Cloud Gateway for unified entry.',
      'Service Discovery and Registration with Netflix Eureka.',
      'Implemented Circuit Breaker pattern with Resilience4j for fault tolerance.',
      'Configured automated CI/CD pipelines using Jenkins for seamless multi-service deployments.',
      'Containerized all services with Docker and managed networking/volumes.'
    ],
    challenges: [
      'Handling cascading failures in a distributed microservices environment.',
      'Managing inter-service communication and eventual consistency.',
      'Configuring complex VPC security and cross-service authentication.'
    ],
    learnings: [
      'Mastered the implementation of the Circuit Breaker pattern to prevent system-wide failures.',
      'Deepened understanding of service discovery and load balancing in Spring Cloud.',
      'Gained hands-on experience in cloud infrastructure automation and DevOps practices.'
    ],
    github: 'https://github.com/vishnuisukapatla3',
    live: '#'
  },
  {
    id: 2,
    slug: 'revjobs-monolith',
    title: 'RevJobs Job Portal',
    subtitle: 'Full-Stack Platform',
    description: 'Developed a full-stack job recruitment platform supporting employers, candidates, and admins with real-time features.',
    longDescription: 'A comprehensive monolithic application built to handle complex recruitment workflows. It features a sophisticated role-based access control system and real-time candidate-employer interaction.',
    tech: ['Java', 'Spring Boot', 'Spring Security', 'JWT', 'React.js', 'MySQL', 'MongoDB', 'WebSockets'],
    features: [
      'Robust Authentication and Authorization using JWT and Spring Security.',
      'Real-time messaging and notifications using WebSockets.',
      'Hybrid data storage strategy using both MySQL (relational) and MongoDB (document).',
      'Advanced search and filtering system for thousands of job listings.'
    ],
    challenges: [
      'Securing various API endpoints with complex role-based access levels.',
      'Integrating React frontend with a Spring Boot backend seamlessly using CORS and JWT.',
      'Optimizing complex SQL queries for job matching algorithms.'
    ],
    learnings: [
      'Expertise in securing enterprise Java applications with modern security standards.',
      'Gained proficiency in full-stack integration and state management in React.',
      'Learned to manage hybrid database architectures for optimal performance.'
    ],
    github: 'https://github.com/vishnuisukapatla3',
    live: '#'
  }
];
