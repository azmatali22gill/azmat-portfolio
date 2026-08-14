import Image from "next/image";

const metrics = [
  { label: "Experience", value: "2+ yr / production" },
  { label: "Core Stack", value: "React · Next.js · Node", accent: true },
  { label: "Avg. Response Time", value: "< 4 hours" },
];

export default function Hero() {
  return (
    <section className="hero">
      <div className="wrap">
        <div className="hero-grid">
          <div className="hero-left">
            <div
              className="status-pill hero-anim"
              style={{ animationDelay: "0.75s" }}
            >
              <span className="pulse"></span>AVAILABLE FOR NEW PROJECTS
            </div>

            <h1
              className="headline hero-anim"
              style={{ animationDelay: "0.85s" }}
            >
              Full-stack systems, built to run without
              <span> you watching them.</span>
            </h1>

            <p className="sub hero-anim" style={{ animationDelay: "0.95s" }}>
              I design and build dashboards, admin panels, and web apps with
              React, Next.js, and Node — the kind of software clients stop
              worrying about the day it ships.
            </p>

            <div
              className="hero-ctas hero-anim"
              style={{ animationDelay: "1.05s" }}
            >
              <a href="#projects" className="btn btn-primary">
                View Projects
              </a>
              <a href="#contact" className="btn btn-ghost">
                Start a Project
              </a>
            </div>
          </div>

          <div
            className="hero-img hero-anim"
            style={{ animationDelay: "1.1s" }}
          >
            <Image
              src="/my.jpg"
              alt="Azmat Ali"
              width={400}
              height={533}
              priority
            />
          </div>
        </div>

        <div className="metrics hero-anim" style={{ animationDelay: "1.2s" }}>
          {metrics.map((metric) => (
            <div className="metric" key={metric.label}>
              <div className="label">{metric.label}</div>
              <div className={`value ${metric.accent ? "accent" : ""}`}>
                {metric.value}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}