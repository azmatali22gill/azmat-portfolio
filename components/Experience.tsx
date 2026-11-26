import Reveal from "./Reveal";

type Role = {
  company: string;
  role: string;
  period: string;
  status: string;
  summary: string;
  points: string[];
  stack: string[];
  focus: string;
};

const roles: Role[] = [
  {
    company: "Oulmi Tech",
    role: "Full-Stack Developer",
    period: "Present",
    status: "Current",
    summary:
      "Building production software at Oulmi Tech — currently shipping the Knox Digital admin panel and backend: APIs, auth, and the dashboards teams use every day.",
    points: [
      "Lead full-stack development on Knox Digital — admin panel UI and Node.js / Express backend in production.",
      "Develop and ship admin panel features for internal tools and client-facing dashboards with React and Next.js.",
      "Design and maintain REST APIs for CRUD workflows, data management, and role-based access.",
      "Implement JWT authentication, protected routes, and RBAC so admins and users only see what they should.",
      "Model MongoDB schemas, wire aggregation queries, and keep error handling clean across the backend.",
      "Collaborate on end-to-end features — from UI flows in the admin panel to the APIs and database behind them.",
    ],
    stack: [
      "React",
      "Next.js",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT",
      "REST APIs",
    ],
    focus: "Admin panels · Backend APIs",
  },
  {
    company: "Ocyber",
    role: "Full-Stack Developer",
    period: "Previous",
    status: "Previous",
    summary:
      "Shipped client-facing products at Ocyber — including Readlink (user management) and Beloz Language Services (interpretation & translation site).",
    points: [
      "Built Readlink end to end — Next.js user management with JWT auth, RBAC, and an admin dashboard for full user lifecycle.",
      "Developed Beloz Language Services — a responsive website for interpretation and translation services with clean, mobile-friendly UI.",
      "Owned frontend and backend work across projects: secure auth, CRUD APIs, MongoDB schemas, and polished client UIs.",
      "Delivered production-ready features with clear error handling, protected routes, and reusable components.",
    ],
    stack: [
      "Next.js",
      "React",
      "MongoDB",
      "JWT",
      "HTML",
      "CSS",
      "JavaScript",
    ],
    focus: "Readlink · Beloz",
  },
];

export default function Experience() {
  return (
    <section id="experience">
      <div className="wrap">
        <Reveal>
          <div className="section-head">
            <div className="eyebrow">Experience</div>
            <h2>Where I ship production software</h2>
          </div>
        </Reveal>

        <div className="experience-list">
          {roles.map((item) => (
            <Reveal key={item.company}>
              <article className="experience-card" data-status={item.status}>
                <div className="experience-top">
                  <div className="experience-title">
                    <span className="experience-status">{item.status}</span>
                    <div>
                      <h3>{item.company}</h3>
                      <p className="subtitle">{item.role}</p>
                    </div>
                  </div>
                  <span className="experience-period">{item.period}</span>
                </div>

                <p className="experience-summary">{item.summary}</p>

                <ul>
                  {item.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>

                <div className="experience-bottom">
                  <div className="tags">
                    {item.stack.map((tag) => (
                      <span className="tag" key={tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                  <span className="experience-focus">{item.focus}</span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
