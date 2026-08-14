import Reveal from "./Reveal";

const steps = [
  {
    num: "01",
    title: "Discovery",
    body: "We talk through what you actually need, and I scope it in plain language — no jargon.",
  },
  {
    num: "02",
    title: "Build",
    body: "You get regular progress updates, not silence, until it's done.",
  },
  {
    num: "03",
    title: "Review",
    body: "You test it before it ships. Changes are quick, not a fight.",
  },
  {
    num: "04",
    title: "Support",
    body: "I stick around after launch for fixes, tweaks, and questions.",
  },
];

export default function Process() {
  return (
    <section id="process">
      <div className="wrap">
        <Reveal>
          <div className="section-head">
            <div className="eyebrow">How We'll Work Together</div>
            <h2>No surprises, from kickoff to launch</h2>
          </div>
        </Reveal>

        <div className="process">
          {steps.map((step) => (
            <Reveal key={step.num}>
              <div className="process-step">
                <div className="num">{step.num}</div>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}