import Reveal from "./Reveal";

const reasons = [
  {
    num: "01",
    title: "Production, not demos",
    body: "I ship admin panels and APIs teams use daily — Knox Digital, Readlink, Beloz — with auth, RBAC, and clean data models.",
  },
  {
    num: "02",
    title: "Own the full stack",
    body: "One developer for UI, REST APIs, MongoDB, and deploy. Less handoff, faster delivery, clearer ownership.",
  },
  {
    num: "03",
    title: "Security baked in",
    body: "JWT, protected routes, and role-based access from day one — so you don't retrofit trust after launch.",
  },
  {
    num: "04",
    title: "Easy to work with",
    body: "Clear updates, plain-language scope, and I stick around after ship for fixes. Reply window usually under a few hours.",
  },
];

export default function WhyHire() {
  return (
    <section id="hire">
      <div className="wrap">
        <Reveal>
          <div className="section-head">
            <div className="eyebrow">Why Hire Me</div>
            <h2>What your team gets when I join</h2>
          </div>
        </Reveal>

        <div className="why-grid">
          {reasons.map((item) => (
            <Reveal key={item.num}>
              <div className="why-item">
                <span className="why-num">{item.num}</span>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="hire-banner">
            <div className="hire-banner-copy">
              <span className="hire-live">
                <i></i> Open to opportunities
              </span>
              <h3>Looking for a full-stack developer who ships?</h3>
              <p>
                Available for full-time roles and contract work — admin panels,
                backends, and product features that stay maintainable.
              </p>
            </div>
            <div className="hire-banner-actions">
              <a href="#contact" className="btn btn-primary">
                Hire Me
              </a>
              <a
                href="mailto:azmatali22gill@gmail.com?subject=Hiring%20inquiry%20-%20Azmat%20Ali"
                className="btn btn-ghost"
              >
                Email Resume Request
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
