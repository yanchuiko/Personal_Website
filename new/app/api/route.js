import { OpenAIClient, AzureKeyCredential } from "@azure/openai";
import { NextResponse } from "next/server";

const endpoint = process.env.AZURE_OPENAI_ENDPOINT;
const apiKey = process.env.AZURE_OPENAI_API_KEY;
const model = process.env.AZURE_OPENAI_MODEL;

export async function POST(req) {
  const { messages } = await req.json();

  const client = new OpenAIClient(endpoint, new AzureKeyCredential(apiKey));

  messages.unshift({
    role: "system",
    content: `You are my Chatbot, answering only questions based on the resume provided. Please make the answers look accurate and professional (with good indentation and formatting).
    Resume:
    ${DATA_RESUME}

    Help users learn more about Yan from his resume.`,
  });

  const response = await client.getChatCompletions(model, messages, {
    maxTokens: 128,
  });

  return NextResponse.json({
    message: response.choices[0].message.content,
  });
}

const DATA_RESUME = `
----------------------------------------------------------------------------------------------------------------------------
About
My Name: Yan
Age: 20
Job Title: Junior Software Developer
Country of Birth: Ukraine
Country of Residence: United Kingdom
City: Cambridge, United Kingdom
Phone Number: +44 7471 047582
Email: yanchuiko@gmail.com
LinkedIn: https://www.linkedin.com/in/yanchuiko/
GitHub: https://github.com/yanchuiko
----------------------------------------------------------------------------------------------------------------------------
Education:
High School: Specialized High School №194 ”Perspective”. Location: Kyiv, Ukraine. Date: Sep. 2015 – May 2022
Title of High School Course:  Math, Physics, Computer Science, English. Graduated with Diploma and Honours (GPA: 4.0)

University: Anglia Ruskin University. Location: Cambridge, UK. Date: Sep. 2022 – May 2025.  Expected First-Class Honours.
Title of University Course: Bachelor of Science, Software Engineering
----------------------------------------------------------------------------------------------------------------------------
Skills
Back End:  Java, C#, Python
Front End:  HTML, CSS, JavaScript
Datebase:  MySQL, PostgreSQL
Tools:  Azure DevOps, GitHub, Git
----------------------------------------------------------------------------------------------------------------------------
Experience:
Role: Software Developer Intern [Jun 2024 – Aug 2024] 
Company: AVEVA (Cambridge, UK)
Collaboratively developed a CRUD application using C# WinForms for generating and managing unique IDs
as part of a team, significantly enhancing operational efficiency within AVEVA Engineering. Utilized Scrum as an Agile framework in combination with Azure DevOps to effectively manage the project.
Worked closely with a teammate to enhance communication and foster a positive team environment,
leading to significant and impactful outcomes. Developed a RESTful API using ASP.NET Core and Blazor front-end during an internal company Hackathon,
earning our team 1st place by simplifying complex software processes
----------------------------------------------------------------------------------------------------------------------------
Projects:
Name: Personal Website
Date: August 2024 – October 2024
Description: Developed a responsive personal website that enhances user experience across devices while incorporating
various features. Integrated an AI Chatbot using Azure OpenAI to provide dynamic responses about my resume, improving
user interaction
Tools Used: HTML, CSS, JavaScript, Azure OpenAI

Name: Text Classification
Date: February 2024 – April 2024
Description: Analyzed, cleaned, and preprocessed a 200,000-row dataset for the news classification task. Developed
models using Multinomial Naive Bayes, Logistic Regression, and SVM with various vectorization techniques. Visualized results with bar charts, showing Linear SVM as the best performer with 78% accuracy
Tools Used: Python, Pandas, NumPy, Matplotlib, Seaborn

Name: CRM System
Date: October 2023 – December 2023
Description: Collaborated with a team to develop a CRM system for JJEP Ltd, focusing on backend with Spring Boot and
frontend with Thymeleaf. Assisted in implementing role-based authentication and security features using Spring Boot Security for safe
user access. Our project won 1st place in the university competition, earning Amazon gift certificates for the best project
Tools Used: Java, Spring Boot, Thymeleaf, PostgreSQL

Name: DB Design & Implementation
Date: September 2023 – November 2023
Description: Developed a comprehensive database for an e-commerce website, covering requirements analysis, schema
design, SQL implementation, and extensive testing to verify functionality and optimize performance
Tools Used: SQL, MySQL
----------------------------------------------------------------------------------------------------------------------------
Certifications:
Name: Career Essentials in Software Development by Microsoft and LinkedIn
Skills Acquired: Software Development Tools, Programming Languages, Agile Development
Name: Career Essentials in GitHub Professional Certificate
Skills Acquired: Git Version Control System, Collaboration and Workflow with GitHub

Language: Ukrainian (Native), Russian (Native), English (Working Proficiency)
Hobbies: Traveling, Photography, Basketball, Volleyball, Tennis, Computer Games

`;