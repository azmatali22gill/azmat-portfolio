import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section id="contact">
      <div className="wrap">
        <Reveal>
          <div className="contact-box">
            <h2>Let's build something reliable</h2>
            <p>
              Tell me what you're trying to build. I'll reply within a few
              hours with a clear plan and a straight answer on timeline and
              cost.
            </p>
            <div className="contact-links">
              <a
                href="https://github.com/azmatali22gill"
                target="_blank"
                rel="noopener"
                className="btn btn-primary"
              >
                GitHub
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}