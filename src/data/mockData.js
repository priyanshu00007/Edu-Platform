export const COURSES = [
  {
    id: 1,
    title: 'Python Fundamentals',
    description: 'A rigorous introduction to variables, control flow, and object-oriented architecture.',
    level: 'Beginner',
    duration: '4 Weeks',
    lessons: [
      { id: 'l1', title: '01. Memory & Variables', content: 'Python variables do not need explicit declaration to reserve memory space. The declaration happens automatically when you assign a value to a variable.', codeSnippet: 'x = 5\ny = "Hello"\nprint(x, y)' },
      { id: 'l2', title: '02. Control Structures', content: 'Python uses indentation to define blocks of code. If, elif, and else statements are used for decision making.', codeSnippet: 'if x > 0:\n    print("Positive")\nelse:\n    print("Negative")' },
      { id: 'l3', title: '03. Modular Functions', content: 'A function is a block of organized, reusable code that is used to perform a single, related action.', codeSnippet: 'def greet(name):\n    return f"Hello, {name}!"' }
    ],
    quizzes: [
      { id: 'q1', question: 'Function Definition Keyword', options: ['func', 'def', 'function', 'define'], correct: 1 },
      { id: 'q2', question: 'Exponentiation Operator Output (2**3)', options: ['6', '5', '8', '9'], correct: 2 }
    ]
  },
  {
    id: 2,
    title: 'React Architecture',
    description: 'Component lifecycles, state management patterns, and hook implementation details.',
    level: 'Intermediate',
    duration: '6 Weeks',
    lessons: [
      { id: 'l1', title: '01. Virtual DOM & JSX', content: 'JSX is a syntax extension for JavaScript. It recommends that you use it with React to describe what the UI should look like.', codeSnippet: 'const App = () => <h1>Hello React</h1>;' },
      { id: 'l2', title: '02. State Hooks', content: 'useState is a Hook that lets you add React state to function components.', codeSnippet: 'const [count, setCount] = useState(0);' }
    ],
    quizzes: [
      { id: 'q1', question: 'Side Effect Hook', options: ['useSideEffect', 'useEffect', 'useUpdate', 'useWatch'], correct: 1 },
      { id: 'q2', question: 'Data Passing Mechanism', options: ['State', 'Props', 'Redux', 'Context'], correct: 1 }
    ]
  },
  {
    id: 3,
    title: 'Algorithmic Complexity',
    description: 'Analysis of algorithms, time-space trade-offs, and data structure selection.',
    level: 'Advanced',
    duration: '8 Weeks',
    lessons: [
      { id: 'l1', title: '01. Asymptotic Analysis', content: 'Big O describes the limiting behavior of a function when the argument tends towards infinity.', codeSnippet: '// O(n) example\nfor(let i=0; i<n; i++) { ... }' }
    ],
    quizzes: [
      { id: 'q1', question: 'Binary Search Complexity', options: ['O(n)', 'O(n^2)', 'O(log n)', 'O(1)'], correct: 2 }
    ]
  },
  {
    id: 4,
    title: 'Backend Systems',
    description: 'Server-side javascript, RESTful API design patterns, and database normalization.',
    level: 'Intermediate',
    duration: '10 Weeks',
    lessons: [
      { id: 'l1', title: '01. Runtime Environment', content: 'Node.js is an open-source, cross-platform JavaScript runtime environment.', codeSnippet: 'const http = require("http");' }
    ],
    quizzes: [
      { id: 'q1', question: 'Resource Creation Method', options: ['GET', 'PUT', 'POST', 'DELETE'], correct: 2 }
    ]
  }
];

export const PROJECTS = [
  {
    id: 1,
    title: 'Natural Language Processor',
    description: 'Implementation of a basic NLP pipeline using Python. Focus on tokenization and API integration.',
    tags: ['PYTHON', 'API', 'DATA'],
    difficulty: 'Intermediate'
  },
  {
    id: 2,
    title: 'Analytics Dashboard',
    description: 'Construction of a data visualization tool. Focus on component reusability and prop drilling.',
    tags: ['REACT', 'DATA', 'UI'],
    difficulty: 'Advanced'
  },
  {
    id: 3,
    title: 'CLI Weather Tool',
    description: 'Development of a command-line interface for fetching meteorological data.',
    tags: ['NODE', 'CLI', 'ASYNC'],
    difficulty: 'Beginner'
  },
  {
    id: 4,
    title: 'Real-time Game Engine',
    description: 'WebSocket implementation for low-latency state synchronization in a multiplayer environment.',
    tags: ['SOCKETS', 'SYSTEMS'],
    difficulty: 'Advanced'
  }
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: 'Sarah Chen',
    role: 'Engineer, Google',
    text: 'The rigorous, no-nonsense approach to curriculum is refreshing. It bridges the gap between academic theory and production code.'
  },
  {
    id: 2,
    name: 'M. Rodriguez',
    role: 'Freelance Developer',
    text: 'Clean documentation and structured learning paths. The portfolio projects are specified to industry standards.'
  },
  {
    id: 3,
    name: 'Emily Watson',
    role: 'Data Scientist',
    text: 'Efficient. The platform respects your time by focusing purely on core concepts and implementation details.'
  }
];

export const FAQS = [
  {
    question: "Prerequisites",
    answer: "Beginner tracks assume no prior knowledge. Advanced tracks require fluency in basic syntax and control structures."
  },
  {
    question: "Certification",
    answer: "Certificates of completion are issued upon passing all unit tests and final project review."
  },
  {
    question: "Pacing",
    answer: "Self-paced. Access to course materials is perpetual upon enrollment."
  }
];