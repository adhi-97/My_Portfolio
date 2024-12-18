import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

//export const LANDINGPAGE_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 5 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const LANDINGPAGE_CONTENT = `I am a passionate software Engineer with expertise in backend development coupled with a strong passion for artificial Intelligence and machine learning technologies. With more than 3 years of hands-on experience, I have consistent track record of solving complex technical challenges and delivering efficient, high-performance solutions and is dedicated towards cutting-edge technologies, combined with a focus on delivering impactful results, looking to build robust and innovative systems.`;

export const ABOUT_TEXT = `I am a dedicated and versatile backend developer with a strong passion for crafting efficient and high-performance solutions. With expertise in C, C++, Java, and Python, I specialize in solving complex technical challenges. I hold an M.Tech in Computer Science from IIT Kharagpur, where I focused on artificial intelligence and achieved an impressive CGPA of 9.06. Currently, I serve as an Assistant Manager in Technology Department at SMFG India, where I have demonstrated my ability to deliver impactful results, consistently ranking among the top 5% of employees. \n\nMy dedication to cutting-edge technologies and commitment to continuous learning allow me to adapt to new challenges in the fast-evolving tech landscape. I am also proud to have been awarded the prestigious YIP Fellowship from the Government of Kerala. Beyond my professional pursuits, I enjoy exploring emerging technologies and engaging with open-source projects, which further equips me to contribute effectively to any organization seeking to develop innovative and resilient systems.`;

export const EXPERIENCES = [
  {
    year: "2023 June - Present",
    role: "Assistant Manager: Technology",
    company: "SMFG India Credit Co. Ltd.",
    location: "Mumbai, Maharashtra",
    description: `Engineered scalable & robust backend systems using Java & Spring Boot, enhancing system reliability & performance by 20%.\nDeveloped efficient & secure server-side RESTful APIs, handling 36k requests per day & enhanced data access speed by 30x.\nDesigned & deployed microservices for liquid architecture framework, increasing system scalability & maintainability by 50%.\nOptimized database queries & transactions in MySQL using Redis caching, leading to a 25% reduction in query response time.\nIntegrated RabbitMQ for asynchronous processing in a pub-sub model, resulting in a 15% improvement in system throughput.\nDeployed & managed backend services on AWS (EC2, S3, RDS, Lambda) with CI/CD pipelines, achieving 99.9% uptime.\nApplied system design principles, including load balancing and fault tolerance, to ensure high availability & resilience.\nImplemented AES, RSA & IV based encryption mechanisms, ensuring data security & compliance with industry standards.\nContributed significantly to the migration of on-premises services to SFDC cloud, streamlining operations and improving system reliability, resulting in a 20% increase in operational efficiency.\nDeveloped a black-box algorithm framework for Google Pay integration, enabling more effective digital lending by accelerating transaction processing by 40% and driving a 25% improvement in business outcomes.\nLed code reviews & collaborated with cross-functional teams, ensuring adherence to best practices & improving code quality.\nIdentified & resolved performance bottlenecks, leading to a 30% increase in application efficiency & overall performance.`,
    technologies: [],
  },
  {
    year: "2024 Jan - Dec 2024",
    role: "Software Development Extern",
    company: "AlgoUniversity (backed by Y-Combinator)",
    location: "Remote",
    description: `Collaborated with 5+ senior engineers from top tech companies like Google, Apple, Microsoft, and Alphagrep, gaining hands-on experience in innovative software solutions and development best practices.\nContributed to the design and development of scalable applications, learning techniques to optimize performance and enhance system efficiency by 25%.\nEngaged in cross-functional learning, refining algorithms and adopting best practices, leading to a 25% improvement in code quality and a 20% reduction in bug incidence.\nDeveloped codeXpert, an online judge system with user authentication and automated evaluations, improving engagement by 30% and ensuring scalability with Docker.`,
    technologies: [],
  },
  {
    year: "2018 Apr - 2020 Jul",
    role: "Lead Systems Engineer",
    company: "Meraki7 | Ed-Tech Startup",
    location: "Ernakulam, Kerala",
    description: `Optimized an in-house algorithm, achieving a 5% reduction in operational costs and a 10% improvement in system efficiency.\nConducted predictive modeling to analyze customer behavior, reduced the bounce rate by 15%, resulting in a 20% increase in user retention.\nEnhanced system architecture and contributed to the development of key platform features, leading to a 25% increase in user engagement and a 15% boost in platform stability.\nLed troubleshooting and optimization initiatives, improving overall application performance by 30%.\nConducted educational workshops as part of new initiatives, contributing to the platform's 15% growth in user engagement within the first month.`,
    technologies: [],
  },
  {
    year: "2017 May - 2017 Jul",
    role: "Machine Learning Intern",
    company: "MadLabs Inc.",
    location: "Remote",
    description: `Proposed and implemented an interactive system to enhance user experience, resulting in a 10% increase in website traffic and improved user engagement.\nOptimized code for standardizing machine learning models, boosting their performance on unseen data by 20% and reducing code complexity by 20%, leading to a 30% faster execution time.\nCollaborated with cross-functional teams to fine-tune algorithms, resulting in a 25% improvement in system efficiency and a 20% increase in user interaction.\nConducted data analysis and feature engineering, improving model accuracy by 18% and enhancing the relevance of features, directly contributing to a 15% increase in product success metrics.`,
    technologies: [],
  },
];




export const PROJECTS = [
  {
    title: "Few-Shot Prediction on Brain Signals",
    image: project1,
    description:
      "Improved BCI feasibility in low-data environments, reducing data preparation costs by 80%. Revamped a few-shot based EEG signal pipeline, slashing the training cycle by 10x with a 5% higher F1 score.",
    technologies: ["Python", "Tensorflow", "Keras", "Pytorch", "Numpy", "Pandas", "Matplotlib"],
  },
  {
    title: "CodeXpert: An Online Judge System",
    image: project2,
    description:
      "Designed, developed, & deployed an Online Judge platform with automated code evaluation & 5+ key features. Implemented a multi-language execution engine utilizing Docker containers, processing 500+ daily submissions.",
    technologies: ["Python", "Django", "mysqlLite", "React", "Docker", "JWT Authentication"],
  },
  {
    title: "Cataverse: A Product Catalog Management System",
    image: project3,
    description:
      "Designed and implemented a RESTful API for managing a product catalog, enabling CRUD operations, filtering, and caching with Redis, boosting response times by 30%. Engineered efficient product retrieval and filtering features, handling over 10,000 product requests daily.",
    technologies: ["Java", "Spring Boot", "Redis", "PostgreSQL", "SLF4J", "OpenAPI", "Micrometer", "RESTful APIs"],
  },
  {
    title: "FileDirect: A Console-Based File Manager",
    image: project4,
    description:
      "Developed a client-server architecture in C based on TCP sockets to simulate Google Doc-like mechanisms with file operations. Integrated collaborative privilege access control and managed up to 5 concurrent client connections.",
    technologies: ["C", "TCP Sockets"],
  },
  {
    title: "Covi-Tracker: Information Bulletin on Covid-19 Pandemic",
    image: project1,
    description:
      "Designed a console-based app for query-dependent browsing & information extraction from over 150 Covid-related Wikipedia pages. Created an HTML parser using PLY with custom Lex and Yacc rules in Python.",
    technologies: ["Python", "PLY", "Lex", "Yacc", "HTML Parsing"],
  },
  {
    title: "Search Engine: Doc Retrieval with Respect to Query",
    image: project2,
    description:
      "Preprocessed the BDNews24 document (~90k corpus) using NLTK to generate an inverted positional index. Built a ranked retrieval model and improved recall by 5% with relevance feedback.",
    technologies: ["Python", "NLTK", "TF-IDF", "Search Algorithms"],
  },
  {
    title: "Mastermind Game using SAT Solver",
    image: project3,
    description:
      "Created fully functional code breaker & code maker modules in C++ with a set of 3 gaming constraints. Enhanced the game to handle repetition of colors among 4 pegs.",
    technologies: ["C++", "SAT Solver", "Game Development"],
  },
];


export const EDUCATION = [
  {
    degree: "M.Tech, Computer Science",
    school: "IIT Kharagpur",
    year: "Aug 2021 - Jun 2023",
    courses: [
      "Algorithm Design & Analysis",
      "Computing Lab",
      "Artificial Intelligence",
      "Machine Learning",
      "Information Retrieval",
      "Deep Learning"
    ],
    grade: "9.06/10"
  },
  {
    degree: "B.Tech, Electronics and Communication",
    school: "School of Engineering, CUSAT",
    year: "Aug 2015 - May 2019",
    courses: [
      "Linear Algebra & Transform Techniques",
      "Discrete Computational Structures",
      "Object Oriented Programming",
      "Technical Communication & Professional Ethics"
    ],
    grade: "7.94/10"
  },
  {
    degree: "Higher Secondary, AISSCE CBSE",
    school: "Bharathiya Vidya Bhavan's Vidya Mandir",
    year: "Jun 2013 - May 2015",
    courses: [
      "Computer Science",
      "Mathematics",
      "English"
    ],
    grade: "89%"
  },
  {
    degree: "High School, SSE CBSE",
    school: "Bharathiya Vidya Bhavan's Vidya Mandir",
    year: "Jun 2012 - May 2013",
    courses: [
      "Mathematics",
      "Science",
      "English"
    ],
    grade: "9.00/10"
  }
];



export const CONTACT = {
  address: "767 Fifth Avenue, New York, NY 10153 ",
  phoneNo: "+12 4555 666 00 ",
  email: "me@example.com",
};
