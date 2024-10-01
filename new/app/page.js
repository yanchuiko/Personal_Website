"use client";
import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [messageInput, setMessageInput] = useState("");

  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "How can I help you learn more about Yan and his CV?",
    },
  ]);

  const submitForm = async (e) => {
    e.preventDefault();
    let newMessages = [...messages, { role: "user", content: messageInput }];
    setMessages(newMessages);
    setMessageInput("");
    const apiMessage = await fetch("/api", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ messages: newMessages }),
    }).then((res) => res.json());
    setMessages([
      ...newMessages,
      { role: "assistant", content: apiMessage.message },
    ]);
  };

  const toggleMobileMenu = () => {
    setMenuOpen((prevState) => !prevState);
  };

  const handleScroll = (e, sectionId) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const languageIcons = [
    { src: "./imgs/java.svg", alt: "Java" },
    { src: "./imgs/csharp.svg", alt: "CSharp" },
    { src: "./imgs/python.svg", alt: "Python" },
    { src: "./imgs/html.svg", alt: "HTML" },
    { src: "./imgs/css.svg", alt: "CSS" },
    { src: "./imgs/js.svg", alt: "JS" },
    { src: "./imgs/mysql.svg", alt: "MySQL" },
    { src: "./imgs/postgresql.svg", alt: "PostgreSQL" },
    { src: "./imgs/azure.svg", alt: "Azure" },
    { src: "./imgs/github.svg", alt: "GitHub" },
    { src: "./imgs/git.svg", alt: "Git" },
  ];

  return (
    <>
      <header>
        <a href="#" className="logo-holder">
          <div className="logo">YC</div>
          <div className="logo-text">Personal Website</div>
        </a>
        <nav>
          <ul id="menu" className={menuOpen ? "active" : ""}>
            <li>
              <a href="#skills" onClick={(e) => handleScroll(e, "skills")}>
                Skills
              </a>
            </li>
            <li>
              <a
                href="#experience"
                onClick={(e) => handleScroll(e, "experience")}
              >
                Work Experience
              </a>
            </li>
            <li>
              <a href="#projects" onClick={(e) => handleScroll(e, "projects")}>
                Projects
              </a>
            </li>
            <li>
              <a href="#bot" onClick={(e) => handleScroll(e, "bot")}>
                AI Chatbot
              </a>
            </li>
            <li>
              <a href="mailto:yanchuiko@gmail.com" className="button">
                Contact Me
              </a>
            </li>
          </ul>
          <a href="#" className="mobile-toggle" onClick={toggleMobileMenu}>
            <svg
              className="w-6 h-6 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth="2"
                d="M5 7h14M5 12h14M5 17h14"
              />
            </svg>
          </a>
        </nav>
      </header>
      <main>
        <section className="hero container">
          <div className="hero-blue">
            <div>
              <h1>
                <small>Hi I'm</small>
                Yan Chuiko
              </h1>
              <p>
                I’m a final-year Software Engineering student at Anglia Ruskin
                University in Cambridge. I am passionate about software
                development and thrive on using my skills to tackle real-world
                challenges, creating innovative solutions that can significantly
                enhance people's lives.
              </p>
              <div className="call-to-action">
                <a
                  href="./Yan_Chuiko_CV.pdf"
                  className="button black"
                  target="_blank"
                >
                  View Resume
                </a>
                <a href="mailto:yanchuiko@gmail.com" className="button white">
                  Contact Me
                </a>
              </div>
              <div className="social-links">
                <a href="https://github.com/yanchuiko" target="_blank">
                  <img src="./imgs/github.png" alt="GitHub" width="48" />
                </a>
                <a
                  href="https://www.linkedin.com/in/yanchuiko/"
                  target="_blank"
                >
                  <img src="./imgs/linkedin.png" alt="LinkedIn" width="48" />
                </a>
              </div>
            </div>
          </div>
          <div className="hero-yellow">
            <img src="./imgs/test1.png" alt="Yan Chuiko"/>
          </div>
        </section>
        <section className="logos container">
          <div className="marquee">
            <div className="track">
              {languageIcons.map((icon) => (
                <img key={icon.alt} src={icon.src} alt={icon.alt} width="128" />
              ))}
              {languageIcons.map((icon) => (
                <img
                  key={`${icon.alt}-duplicate`}
                  src={icon.src}
                  alt={icon.alt}
                  width="128"
                />
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="skills container">
          <h2>Skills</h2>
          <div className="holder-blue">
            <div className="skills-grid">
              <div className="skill-category" id="backend">
                <h3>Backend</h3>
                <ul>
                  <li>Java</li>
                  <li>C#</li>
                  <li>Python</li>
                </ul>
              </div>
              <div className="skill-category" id="frontend">
                <h3>Frontend</h3>
                <ul>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JavaScript</li>
                </ul>
              </div>
              <div className="skill-category" id="databases">
                <h3>Databases</h3>
                <ul>
                  <li>MySQL</li>
                  <li>PostgreSQL</li>
                </ul>
              </div>
              <div className="skill-category" id="tools">
                <h3>Tools</h3>
                <ul>
                  <li>Azure DevOps</li>
                  <li>GitHub</li>
                  <li>Git</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="experience" className="work-experience container">
          <h2>
            <small>Recent</small>
            Work Experience
          </h2>
          <div className="job-details">
            <div className="holder-blue">
              <h3>Software Developer Intern</h3>
              <div className="job-date">June 2024 - August 2024</div>
              <div className="images">
                <div className="image">
                  <a
                    href="https://www.linkedin.com/feed/update/urn:li:activity:7237034082285621249/"
                    target="_blank"
                  >
                    <img
                      src="./imgs/workplace-1.jpeg"
                      alt="Workplace 1 - AVEVA"
                    />
                  </a>
                </div>
                <div className="image">
                  <a
                    href="https://www.linkedin.com/feed/update/urn:li:activity:7237034082285621249/"
                    target="_blank"
                  >
                    <img
                      src="./imgs/workplace-2.jpeg"
                      alt="Workplace 2 - AVEVA"
                    />
                  </a>
                </div>
                <div className="image">
                  <a
                    href="https://www.linkedin.com/feed/update/urn:li:activity:7237034082285621249/"
                    target="_blank"
                  >
                    <img
                      src="./imgs/workplace-3.jpeg"
                      alt="Workplace 3 - AVEVA"
                    />
                  </a>
                </div>
              </div>
              <div className="text-container">
                <div className="left-text">
                  <p>
                    During my internship at AVEVA, I collaborated with a
                    teammate in the Schematics & Engineering team to develop a
                    CRUD application using C# WinForms, significantly improving
                    operational efficiency within AVEVA Engineering. We utilized
                    the Agile methodology Scrum in combination with Azure DevOps
                    to enhance communication and project management.
                  </p>
                </div>
                <div className="divider" />
                <div className="right-text">
                  <p>
                    Additionally, my teammate and I participated in a Hackathon
                    where we assisted in developing a RESTful API with ASP.NET
                    Core and the frontend with Blazor, earning 1st place. This
                    experience not only strengthened my technical skills but
                    also enhanced my teamwork and problem-solving abilities,
                    preparing me for future challenges.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="bento container">
          <h2>
            <small>Previous</small>
            Projects
          </h2>
          <div className="bento-grid">
            <a
              href="https://github.com/yanchuiko/CRM-System"
              className="bento-item"
              target="_blank"
            >
              <img src="./imgs/bento-1.jpg" alt="BGCCI" width="100%" />
              <figcaption>CRM System Project</figcaption>
            </a>
            <a
              href="https://github.com/yanchuiko/DB-Design-Implementation"
              className="bento-item"
              target="_blank"
            >
              <img src="./imgs/bento-2.jpg" alt="Churhview" width="100%" />
              <figcaption>DB Design & Implementation</figcaption>
            </a>
            <a
              href="https://github.com/yanchuiko/MusiConverter"
              className="bento-item"
              target="_blank"
            >
              <img src="./imgs/bento-3.jpg" alt="Harley" width="100%" />
              <figcaption>Music Converter</figcaption>
            </a>
            <a
              href="https://github.com/yanchuiko/ML-Text-Classification"
              className="bento-item"
              target="_blank"
            >
              <img src="./imgs/bento-4.jpg" alt="Bunbury" width="100%" />
              <figcaption>Text Classification</figcaption>
            </a>
          </div>
        </section>

        <section id="bot" className="chatbot container">
          <h2>
            <small>Talk to me</small>
            AI Chatbot
          </h2>
          <div className="chatbot-blue">
            <div className="chat-info">
              <h3>Azure AI Chatbot</h3>
              <p>
                I've created a chatbot that has all the details about my skills,
                work experience, and a copy of my CV. Feel free to ask it any
                questions to learn more about my background and what I’ve
                accomplished.
              </p>
              <p>
                You can also download my CV here if you'd like to review it. I'm
                actively seeking new opportunities, so if you think I’d be a
                good fit for any projects, don’t hesitate to reach out!
              </p>
              <a
                href="./Yan_Chuiko_CV.pdf"
                className="button black"
                target="_blank"
              >
                Download CV
              </a>
            </div>
            <div className="chat-box">
              <div className="scroll-area">
                <ul id="chat-log">
                  {messages.map((message, index) => (
                    <li key={index} className={`${message.role}`}>
                      <span className={`avatar`}>
                        {message.role === "user" ? "You" : "AI"}
                      </span>
                      <div className="message">{message.content}</div>
                    </li>
                  ))}
                </ul>
              </div>
              <form onSubmit={submitForm} className="chat-message">
                <input
                  type="text"
                  placeholder="Ask me something about Yan"
                  value={messageInput}
                  onChange={(e) => setMessageInput(e.target.value)}
                />
              </form>
            </div>
          </div>
        </section>
      </main>
      <footer>
        <p>Copyright &#169; 2024 Yan Chuiko. All Rights Reserved</p>
      </footer>
    </>
  );
}