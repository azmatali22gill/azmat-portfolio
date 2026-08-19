"use client";

import { useState, type FormEvent } from "react";
import Reveal from "./Reveal";

const contact = {
  email: "azmatali22gill@gmail.com",
  phone: "+92 310 6138975",
  phoneLink: "tel:+923106138975",
  location: "Islamabad, Pakistan",
  github: "https://github.com/azmatali22gill",
  linkedin: "https://www.linkedin.com/in/azmat-gill-394333389",
};

const iconProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const icons = {
  mail: (
    <svg {...iconProps}>
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  ),
  phone: (
    <svg {...iconProps}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  ),
  pin: (
    <svg {...iconProps}>
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  ),
  github: (
    <svg {...iconProps}>
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    </svg>
  ),
  linkedin: (
    <svg {...iconProps}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4V9h4v1.5A6 6 0 0 1 16 8z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  ),
};

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const subject = encodeURIComponent(`Project inquiry from ${name}`);
    const body = encodeURIComponent(
      `Hi Azmat,\n\n${message}\n\n- ${name}\n${email}`,
    );
    window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <section id="contact">
      <div className="wrap">
        <Reveal>
          <div className="section-head">
            <div className="eyebrow">Contact</div>
            <h2>Let&apos;s build something reliable</h2>
          </div>
        </Reveal>

        <Reveal>
          <div className="contact-grid">
            <div className="contact-info">
              <div className="info-eyebrow">Direct</div>

              <a className="contact-row" href={`mailto:${contact.email}`}>
                <span className="row-icon">{icons.mail}</span>
                <span className="row-body">
                  <span className="row-label">Email</span>
                  <span className="row-value">{contact.email}</span>
                </span>
              </a>

              <a className="contact-row" href={contact.phoneLink}>
                <span className="row-icon">{icons.phone}</span>
                <span className="row-body">
                  <span className="row-label">Phone / WhatsApp</span>
                  <span className="row-value">{contact.phone}</span>
                </span>
              </a>

              <div className="contact-row">
                <span className="row-icon">{icons.pin}</span>
                <span className="row-body">
                  <span className="row-label">Location</span>
                  <span className="row-value">{contact.location}</span>
                </span>
              </div>

              <div className="info-eyebrow">Elsewhere</div>

              <div className="contact-socials">
                <a
                  href={contact.github}
                  target="_blank"
                  rel="noopener"
                  className="social-btn"
                >
                  {icons.github}
                  GitHub
                </a>
                <a
                  href={contact.linkedin}
                  target="_blank"
                  rel="noopener"
                  className="social-btn"
                >
                  {icons.linkedin}
                  LinkedIn
                </a>
              </div>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="field">
                  <label htmlFor="cf-name">Your name</label>
                  <input
                    id="cf-name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Jane Doe"
                    required
                  />
                </div>
                <div className="field">
                  <label htmlFor="cf-email">Your email</label>
                  <input
                    id="cf-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="jane@company.com"
                    required
                  />
                </div>
              </div>

              <div className="field">
                <label htmlFor="cf-message">Your message</label>
                <textarea
                  id="cf-message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell me what you're trying to build..."
                  required
                />
              </div>

              <div className="form-foot">
                <button type="submit" className="btn btn-primary">
                  Send Message
                </button>
                <span className="form-note">
                  {sent
                    ? "Opening your email app - I usually reply within a few hours."
                    : "Opens your email app with the message pre-filled."}
                </span>
              </div>
            </form>
          </div>
        </Reveal>
      </div>
    </section>
  );
}