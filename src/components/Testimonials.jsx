import React from "react";

const Feature = ({ number, title, subtitle }) => (
  <div className="feature-card2">
    <span className="feature-number">{number}</span>
    <div>
      <h3>{title}</h3>
      <p>{subtitle}</p>
    </div>
  </div>
);

const Testimonial = ({ name, role, text, img, color }) => (
  <div className="testimonial-wrapper">
    <div className={`shape ${color}`} />

    <div className="testi">
      <img src={img} alt={name} className="avatar" />
      <h4>{name}</h4>
      <small className="muted">{role}</small>
      <p>{text}</p>
    </div>
  </div>
);

export default function TestimonialsSection() {
  return (
    <section className="testimonials">
      {/* ===== Features ===== */}
      <div className="features-grid2">
        <Feature
          number="1"
          title="AI Matching Algorithm"
          subtitle="Role‑Matched, Not Mass Applications"
        />
        <Feature
          number="2"
          title="Integrated Dashboard"
          subtitle="All Data In One Place"
        />
        <Feature
          number="3"
          title="Structured Process"
          subtitle="7‑Step Repeatable Workflow"
        />
        <Feature
          number="4"
          title="Real‑Time Analytics"
          subtitle="Placement Outcomes Tracked"
        />
      </div>

      {/* ===== Testimonials ===== */}
      <div className="testi-grid">
        <Testimonial
          name="Dr. Anil Kumar"
          role="Training & Placement Officer"
          text="TalentYug brought structure and transparency to our placement process. From company coordination to offer tracking, everything is now centralized and efficient."
          img="/images/anil.jpg"
          color="green"
        />

        <Testimonial
          name="Priya Sharma"
          role="HR Manager"
          text="Hiring from Tier 2/3 colleges used to be chaotic. TalentYug helped us shortlist better candidates, manage drives smoothly, and close offers faster."
          img="/images/priya.jpg"
          color="orange"
        />

        <Testimonial
          name="Rahul Verma"
          role="Final Year Student (B.Tech)"
          text="The mock interviews and clear application tracking boosted my confidence. I knew exactly where I stood in every hiring process."
          img="/images/rahul.jpg"
          color="blue"
        />
      </div>
    </section>
  );
}

