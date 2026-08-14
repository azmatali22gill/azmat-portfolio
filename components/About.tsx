import Reveal from "./Reveal";

const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Express",
  "MongoDB",
  "Mongoose",
  "Zustand",
  "MUI",
  "JWT Auth",
  "REST APIs",
  "Git",
];

export default function About() {
  return (
    <section id="about">
      <div className="wrap">
        <Reveal>
          <div className="section-head">
            <div className="eyebrow">About</div>
            <h2>Developer behind the systems</h2>
          </div>
        </Reveal>

        <Reveal className="about-content">
          <p>
            I&apos;m Azmat Ali, a full-stack developer who cares about the
            boring stuff — the stuff that keeps software running long after
            launch. I design and build dashboards, admin panels, and web apps
            with clean architecture and reusable components, so what ships
            today stays maintainable tomorrow.
          </p>
          <p>
            From secure auth and role-based access to aggregation pipelines
            and audit trails, I build the whole stack — and I test it before
            it ever reaches production.
          </p>
          <div className="about-skills">
            {skills.map((skill) => (
              <span className="skill-chip" key={skill}>
                {skill}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}