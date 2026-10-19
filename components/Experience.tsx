import Reveal from "./Reveal";

type Role = {
  company: string;
  role: string;
  period: string;
  status: string;
  summary: string;
  points: string[];
  stack: string[];
};

const roles: Role[] = [
  {
    company: "Knox Digital",
    role: "Full-Stack Developer",
    period: "Present",
    status: "Current",
    summary:
      "Building and maintaining production admin panels and backend systems — APIs, auth, and the dashboards teams use every day.",
    points: [
      "Develop and ship admin panel features for internal tools and client-facing dashboards with React and Next.js.",
      "Design and maintain Node.js / Express REST APIs for CRUD workflows, data management, and role-based access.",
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
              <article className="experience-card">
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
                  <span className="experience-focus">
                    Admin panels · Backend APIs
                  </span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
