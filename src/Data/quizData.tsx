export interface QuestionData {
  question: string;
  options: string[];
  answer: string;
}
export const quizData: QuestionData[] = [
  {
    question: "1. What is the difference between client-side rendering and server-side rendering?",
    options: [
      "Client-side rendering involves generating HTML on the server and sending it to the client.",
      "Server-side rendering involves rendering the UI on the client's browser using JavaScript.",
      "Client-side rendering is more SEO-friendly than server-side rendering.",
      "Server-side rendering provides better performance than client-side rendering."
    ],
    answer: "Server-side rendering involves rendering the UI on the client's browser using JavaScript."
  },
  {
    question: "2. Explain the concept of Big O notation and its significance in algorithms.",
    options: [
      "Big O notation is used to measure the physical size of data structures.",
      "Big O notation is used to analyze the efficiency and scalability of algorithms.",
      "Big O notation represents the number of operations in an algorithm.",
      "Big O notation is relevant only for sorting algorithms."
    ],
    answer: "Big O notation is used to analyze the efficiency and scalability of algorithms."
  },
  {
    question: "3. What is the difference between cookies and sessions in web development?",
    options: [
      "Cookies are stored on the client-side, while sessions are stored on the server-side.",
      "Cookies are more secure than sessions.",
      "Sessions are used to store user preferences, while cookies are used for authentication.",
      "Cookies are used to store large amounts of data, while sessions are used for small amounts of data."
    ],
    answer: "Cookies are stored on the client-side, while sessions are stored on the server-side."
  },
  {
    question: "4. Explain the concept of RESTful API versioning and its best practices.",
    options: [
      "RESTful API versioning is done by appending version numbers to the API endpoints.",
      "RESTful API versioning is not recommended as it can lead to compatibility issues.",
      "RESTful API versioning is done by adding version information in the request headers.",
      "RESTful API versioning should be avoided in favor of using query parameters."
    ],
    answer: "RESTful API versioning is done by appending version numbers to the API endpoints."
  },
  {
    question: "5. What is the purpose of an index in a database, and how does it improve query performance?",
    options: [
      "An index is used to store large amounts of data in the database.",
      "An index is a data structure that allows for faster data retrieval based on specified columns.",
      "An index is used for maintaining data consistency in the database.",
      "An index is created for every column in a database table."
    ],
    answer: "An index is a data structure that allows for faster data retrieval based on specified columns."
  },
  {
    question: "6. Explain the concept of garbage collection in programming languages like Java and C#.",
    options: [
      "Garbage collection is a process of reclaiming memory occupied by unused objects and releasing them for reuse.",
      "Garbage collection is a technique used for memory allocation in low-level languages.",
      "Garbage collection is only applicable in statically typed languages.",
      "Garbage collection is a process of freeing up memory occupied by active objects to improve performance."
    ],
    answer: "Garbage collection is a process of reclaiming memory occupied by unused objects and releasing them for reuse."
  },
  {
    question: "7. What are the advantages of using a microservices architecture over a monolithic architecture?",
    options: [
      "Microservices architecture is more complex and difficult to manage than a monolithic architecture.",
      "Microservices architecture allows for better scalability and independent deployment of services.",
      "Monolithic architecture provides better fault isolation compared to microservices.",
      "Microservices architecture is suitable only for small-scale applications."
    ],
    answer: "Microservices architecture allows for better scalability and independent deployment of services."
  },
  {
    question: "8. Explain the concept of virtual machines and their use in cloud computing.",
    options: [
      "Virtual machines are used for running physical servers in a data center.",
      "Virtual machines provide a physical abstraction and allow for multiple operating systems to run on a single physical machine.",
      "Virtual machines are limited to on-premises environments and cannot be used in cloud computing.",
      "Virtual machines are used only for desktop virtualization and not in server environments."
    ],
    answer: "Virtual machines provide a physical abstraction and allow for multiple operating systems to run on a single physical machine."
  },
  {
    question: "9. What is the purpose of an HTTP status code 404?",
    options: [
      "HTTP 404 indicates a successful request in which the resource has been created on the server.",
      "HTTP 404 indicates that the server cannot find the requested resource.",
      "HTTP 404 indicates a server error that occurred during the processing of the request.",
      "HTTP 404 indicates that the request is missing required parameters."
    ],
    answer: "HTTP 404 indicates that the server cannot find the requested resource."
  },
  {
    question: "10. Explain the concept of functional programming and its benefits.",
    options: [
      "Functional programming focuses on the use of objects and classes to build applications.",
      "Functional programming uses immutable data structures and avoids changing state.",
      "Functional programming is applicable only to front-end development.",
      "Functional programming is not suitable for parallel processing."
    ],
    answer: "Functional programming uses immutable data structures and avoids changing state."
  },
  {
    question: "11. What are CORS (Cross-Origin Resource Sharing) headers, and why are they important in web development?",
    options: [
      "CORS headers are used for compressing data in API responses.",
      "CORS headers are used to enable cross-origin requests in web browsers.",
      "CORS headers are used to enforce strict security measures in web applications.",
      "CORS headers are required for handling server-side caching of static assets."
    ],
    answer: "CORS headers are used to enable cross-origin requests in web browsers."
  },
  {
    question: "12. Explain the concept of Docker and its use in containerization.",
    options: [
      "Docker is a version control system for managing code repositories.",
      "Docker is a virtual machine for running multiple operating systems on a single physical machine.",
      "Docker is used for creating and managing containers to package applications and their dependencies.",
      "Docker is used for managing data in relational databases."
    ],
    answer: "Docker is used for creating and managing containers to package applications and their dependencies."
  },
  {
    question: "13. What is the difference between stateful and stateless authentication in web development?",
    options: [
      "Stateful authentication stores user session information on the client-side.",
      "Stateful authentication stores user session information on the server-side.",
      "Stateful authentication does not require a server to maintain session information.",
      "Stateless authentication uses cookies to store user credentials."
    ],
    answer: "Stateful authentication stores user session information on the server-side."
  },
  {
    question: "14. Explain the concept of cloud computing and its benefits.",
    options: [
      "Cloud computing is a physical data center where servers and networking equipment are hosted.",
      "Cloud computing allows businesses to store data only on local servers.",
      "Cloud computing provides on-demand access to a shared pool of computing resources over the internet.",
      "Cloud computing is not suitable for scaling applications."
    ],
    answer: "Cloud computing provides on-demand access to a shared pool of computing resources over the internet."
  },
  {
    question: "15. What is the role of an application load balancer in a web server setup?",
    options: [
      "Load balancers are used to manage data storage in web servers.",
      "Load balancers distribute incoming network traffic across multiple servers to ensure high availability.",
      "Load balancers are used to optimize database queries in web applications.",
      "Load balancers are used to monitor server resource usage."
    ],
    answer: "Load balancers distribute incoming network traffic across multiple servers to ensure high availability."
  },
  {
    question: "16. Explain the concept of the agile software development methodology.",
    options: [
      "Agile is a traditional and sequential approach to software development.",
      "Agile emphasizes detailed planning and documentation at the beginning of a project.",
      "Agile values customer collaboration, iterative development, and responding to change.",
      "Agile is suitable only for large-scale projects."
    ],
    answer: "Agile values customer collaboration, iterative development, and responding to change."
  },
  {
    question: "17. What is the role of a reverse proxy in web server configurations?",
    options: [
      "Reverse proxies are used for load balancing between multiple web servers.",
      "Reverse proxies are used to optimize database queries in web applications.",
      "Reverse proxies are used to monitor server resource usage.",
      "Reverse proxies are used to forward client requests to the appropriate backend server."
    ],
    answer: "Reverse proxies are used to forward client requests to the appropriate backend server."
  },
  {
    question: "18. Explain the concept of test-driven development (TDD) in software engineering.",
    options: [
      "TDD is a methodology in which developers write tests after implementing the code.",
      "TDD is a methodology in which developers write tests before implementing the code.",
      "TDD is a technique used only for manual testing of software applications.",
      "TDD is not applicable in agile development methodologies."
    ],
    answer: "TDD is a methodology in which developers write tests before implementing the code."
  },
  {
    question: "19. What are the benefits of using a framework like React or Angular in web development?",
    options: [
      "Frameworks like React and Angular are used only for server-side rendering.",
      "Frameworks like React and Angular make web applications slower and less performant.",
      "Frameworks like React and Angular provide a component-based architecture for building reusable UI elements.",
      "Frameworks like React and Angular are used only for styling web applications."
    ],
    answer: "Frameworks like React and Angular provide a component-based architecture for building reusable UI elements."
  },
  {
    question: "20. Explain the concept of continuous integration and continuous deployment (CI/CD) in software development.",
    options: [
      "CI/CD is a practice of manually deploying code changes to production.",
      "CI/CD is a practice of automatically merging code changes into the main branch.",
      "CI/CD is a practice of automatically testing and deploying code changes to production.",
      "CI/CD is a practice used only in small development teams."
    ],
    answer: "CI/CD is a practice of automatically testing and deploying code changes to production."
  },
];

