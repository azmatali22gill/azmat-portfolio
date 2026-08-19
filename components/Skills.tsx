import Reveal from "./Reveal";

const iconProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const categories = [
  {
    name: "Frontend",
    accent: "teal",
    icon: (
      <svg {...iconProps}>
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "HTML5",
      "CSS3",
      "JavaScript",
    ],
  },
  {
    name: "Backend",
    accent: "pink",
    icon: (
      <svg {...iconProps}>
        <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
        <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
        <line x1="6" y1="6" x2="6.01" y2="6" />
        <line x1="6" y1="18" x2="6.01" y2="18" />
      </svg>
    ),
    skills: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "JWT Authentication",
      "Role-Based Access Control",
    ],
  },
  {
    name: "Database",
    accent: "amber",
    icon: (
      <svg {...iconProps}>
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
      </svg>
    ),
    skills: ["MongoDB", "Mongoose", "Aggregation Pipelines", "Schema Design"],
  },
  {
    name: "Tools & Others",
    accent: "teal",
    icon: (
      <svg {...iconProps}>
        <polyline points="4 17 10 11 4 5" />
        <line x1="12" y1="19" x2="20" y2="19" />
      </svg>
    ),
    skills: ["Git", "GitHub", "Postman", "Vercel", "Responsive Design"],
  },
  {
    name: "Video Streaming",
    accent: "pink",
    icon: (
      <svg {...iconProps}>
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <line x1="7" y1="4" x2="7" y2="20" />
        <line x1="17" y1="4" x2="17" y2="20" />
      </svg>
    ),
    note: "Video transcoding, real-time streaming pipelines, media processing, and backend API development.",
    skills: ["Python", "FastAPI", "FFmpeg", "GStreamer"],
  },
];

export default function Skills() {
  return (
    <section id="skills">
      <div className="wrap">
        <Reveal>
          <div className="section-head">
            <div className="eyebrow">Skills</div>
            <h2>What I bring to the stack</h2>
          </div>
        </Reveal>

        <div className="skills-grid">
          {categories.map((category, i) => (
            <Reveal key={category.name}>
              <div className="skill-block" data-accent={category.accent}>
                <div className="skill-block-head">
                  <span className="skill-icon">{category.icon}</span>
                  <h3>{category.name}</h3>
                  <span className="skill-index">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                <div className="tags">
                  {category.skills.map((skill) => (
                    <span className="tag" key={skill}>
                      {skill}
                    </span>
                  ))}
                </div>

                {category.note && <p className="skill-note">{category.note}</p>}

                <div className="skill-block-foot">
                  <span>{category.skills.length} technologies</span>
                  <span className="foot-arrow">&rarr;</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}