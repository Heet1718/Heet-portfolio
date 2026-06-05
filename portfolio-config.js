const CONFIG = {

   name:         "Heet Patel",
  initials:     "HP",
  role:         "AI/ML Engineer",
  tagline:      "Computer Engineering student at LDRP-ITR building AI/ML systems and full-stack applications. Turning data into decisions and ideas into products.",
  status:       "Open to Internships & Projects",
  location:     "Gandhinagar, GJ",
  locationShort:"Gujarat, India",
  college:      "LDRP-ITR",
  grad:         "2027",
  cgpa:         "8.10",
  cgpaMax:      "10",
  spec:         "AI/ML Enthusiast",

  email:        "heetpatel1718@gmail.com",
  phone:        "",
  linkedin:     "https://linkedin.com/in/heet-patel-14805537b",
  github:       "https://github.com/Heet1718",
  githubUsername:"Heet1718",
  leetcode:     "",
  resumeUrl:    "https://drive.google.com/file/d/1M1ByKI2Bf1H5yZEaPYXz_Kg9sWX4sCtt/view?usp=drive_link",
  web3formsKey: "9633c01a-3528-41ef-8404-7480cebdfea4",

  overview: {
    intro:
      "I'm a Computer Engineering student at LDRP Institute of Technology & Research (LDRP-ITR), Gandhinagar, Gujarat, expected to graduate in 2027. I specialize in Artificial Intelligence, Machine Learning, and Full-Stack Development — building systems that learn, adapt, and scale.",
    experience:
      "I've developed and deployed end-to-end ML pipelines, full-stack web applications, and data-driven tools. From content-based recommendation engines to pharmacy management systems, my projects reflect a blend of intelligent design and solid engineering.",
    goal:
      "Actively seeking internships and collaborative opportunities in AI/ML, Data Science, or Software Engineering where I can contribute meaningfully and continue growing in a fast-paced, real-world environment.",
    techList: [
      "Python", "Machine Learning", "Deep Learning", "Scikit-learn",
      "Pandas", "NumPy", "Streamlit", "JavaScript", "MySQL", "Git", "GitHub", "VS Code"
    ]
  },

  skills: [
    { icon: "💻", title: "Languages",        skills: ["Python", "C", "C++", "Java", "SQL"] },
    { icon: "🌐", title: "Web Development",  skills: ["HTML", "CSS", "JavaScript"] },
    { icon: "📊", title: "Data Science",     skills: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Scikit-learn"] },
    { icon: "🤖", title: "AI / ML",          skills: ["Machine Learning", "Deep Learning", "NLP (Basic)", "Content-Based Filtering"] },
    { icon: "🗄️", title: "Databases",        skills: ["MySQL", "phpMyAdmin"] },
    { icon: "🔧", title: "Tools & Platforms",skills: ["Git", "GitHub", "VS Code", "Vercel", "Streamlit"] }
  ],

  projects: [
    {
      id:       1,
      title:    "Movie Recommendation System",
      category: "AI/ML",
      emoji:    "🎬",
      bg:       "linear-gradient(135deg,#1a1a2e,#16213e)",
      image:    "",
      desc:     "Content-based filtering engine using the TMDB dataset, with a live poster API and interactive Streamlit UI.",
      tech:     ["Python", "Scikit-learn", "Pandas", "NumPy", "Streamlit", "Matplotlib", "TMDB API"],
      overview:
        "A machine learning recommendation engine using content-based filtering. Built on the TMDB dataset with a real-time poster API and Streamlit front-end.",
      features: [
        "Content-based filtering with cosine similarity",
        "Real-time movie posters via TMDB API",
        "Interactive Streamlit UI with search & filters",
        "Data pipeline with Pandas & NumPy",
        "Visualization with Matplotlib & Seaborn"
      ],
      architecture: "User Input → Feature Extraction → Cosine Similarity Matrix → Top-N Results → Streamlit UI",
      challenges:   "Optimizing cosine similarity computation for large matrices without degrading response time.",
      github:   "https://github.com/Heet1718",
      demo:     ""
    },
    {
      id:       2,
      title:    "Digital Pharmacy System",
      category: "Full Stack",
      emoji:    "💊",
      bg:       "linear-gradient(135deg,#0d1b0d,#1a3a1a)",
      image:    "",
      desc:     "Full-stack medical store management with inventory tracking, billing, and customer records via MySQL backend.",
      tech:     ["Python", "HTML", "CSS", "JavaScript", "MySQL", "phpMyAdmin"],
      overview:
        "A comprehensive medical store management system covering inventory, billing workflows, and customer records with a secure MySQL backend.",
      features: [
        "Medicine inventory management with expiry tracking",
        "Billing & invoice generation",
        "Customer record management",
        "Secure SQL query handling",
        "Admin dashboard with phpMyAdmin"
      ],
      architecture: "HTML/CSS/JS Frontend → Python Backend → MySQL Database (phpMyAdmin)",
      challenges:   "Designing a normalized relational schema for pharmacy inventory with expiry date tracking and secure parameterized SQL queries.",
      github:   "https://github.com/Heet1718",
      demo:     ""
    }
  ],

  certificates: [
    {
      id:    1,
      title: "Python for Data Science",
      org:   "NPTEL",
      date:  "2024",
      score: "76% — Elite",
      badge: "gold",
      emoji: "🏅",
      image: "",
      link:  ""
    }
  ]

};
