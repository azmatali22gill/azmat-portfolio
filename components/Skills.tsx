import Reveal from "./Reveal";

const categories = [
  {
    name: "Frontend",
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
    skills: ["MongoDB", "Mongoose", "Aggregation Pipelines", "Schema Design"],
  },
  {
    name: "Tools & Others",
    skills: ["Git", "GitHub", "Postman", "Vercel", "Responsive Design"],
  },
  {
    name: "Video Streaming",
    skills: ["Python", "FastAPI", "FFmpeg", "GStreamer"],
    note: "Video transcoding, real-time streaming pipelines, media processing, and backend API development.",
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
          {categories.map((category) => (
            <Reveal key={category.name}>
              <div className="skill-block">
                <h3>{category.name}</h3>
                <div className="tags">
                  {category.skills.map((skill) => (
                    <span className="tag" key={skill}>
                      {skill}
                    </span>
                  ))}
                </div>
                {category.note && (
                  <p className="skill-note">{category.note}</p>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}