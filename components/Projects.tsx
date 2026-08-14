import Reveal from "./Reveal";
import Gallery from "./Gallery";

type Project = {
  title: string;
  subtitle: string;
  stack: string[];
  date?: string;
  link?: string;
  gallery?: boolean;
  points: string[];
};

const projects: Project[] = [
  {
    title: "Readlink",
    subtitle: "Full-Stack User Management System",
    date: "06/2025",
    stack: ["Next.js", "MongoDB", "JWT", "RBAC"],
    gallery: true,
    points: [
      "Full-stack user management system with secure authentication, authorization, and complete user lifecycle management.",
      "JWT-based login and registration, protected routes, and Role-Based Access Control (RBAC) with Admin and User roles.",
      "Admin dashboard for creating, updating, deleting, searching, and managing users, while regular users can update their own profiles.",
      "Backend built on Next.js API routes with MongoDB for efficient CRUD operations, clean schemas, and proper error handling.",
    ],
  },
  {
    title: "AI Support SaaS Platform",
    subtitle: "AI-powered customer support application",
    stack: ["Next.js", "Node.js", "Express.js", "MongoDB"],
    link: "https://ai-support-saas-ten.vercel.app/",
    points: [
      "Full-stack AI-powered Support SaaS application with a Next.js frontend and Node.js, Express.js, and MongoDB backend.",
      "Secure REST APIs for user authentication, data management, and AI support functionalities.",
      "AI-powered support responses, user management, and a scalable backend architecture.",
      "Clean database schemas, robust error handling, and API-based architecture following modern web development practices.",
    ],
  },
  {
    title: "Beloz Language Services",
    subtitle: "Language interpretation & translation website",
    stack: ["HTML", "CSS", "JavaScript", "Responsive UI"],
    link: "https://beloze-website.vercel.app/Home.html",
    points: [
      "Responsive language interpretation and translation website providing easy access to professional language solutions.",
      "Showcases Video Remote Interpreting, Over-the-Phone Interpreting, In-Person Interpreting, and translation services.",
      "Includes company information and contact options in a clean, mobile-friendly interface.",
    ],
  },
];

export default function Projects() {
  return (
    <section id="projects">
      <div className="wrap">
        <Reveal>
          <div className="section-head">
            <div className="eyebrow">Projects</div>
            <h2>Things I've built, end to end</h2>
          </div>
        </Reveal>

        <div className="projects-list">
          {projects.map((project, i) => (
            <Reveal key={project.title}>
              <div className="project-rich">
                <div className="project-rich-top">
                  <div className="project-rich-title">
                    <span className="project-num">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3>{project.title}</h3>
                      <p className="subtitle">{project.subtitle}</p>
                    </div>
                  </div>
                  {project.date && <span className="project-date">{project.date}</span>}
                </div>

                <ul>
                  {project.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>

                <div className="project-rich-bottom">
                  <div className="tags">
                    {project.stack.map((tag) => (
                      <span className="tag" key={tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                  {project.gallery ? (
                    <Gallery />
                  ) : (
                    project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener"
                        className="btn btn-primary"
                      >
                        Visit Website &rarr;
                      </a>
                    )
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}