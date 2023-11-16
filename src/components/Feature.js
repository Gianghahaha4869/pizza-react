const features = [
  {
    title: "Continuous Improvement",
    description:
      "Improving our products, quality, and customer experience is always a prerequisite in our business strategy to drive growth and become a leading pizza brand.",
  },
  {
    title: "Easy Experience",
    description: "We simply aim to become a household brand, anytime, anywhere.",
  },
  {
    title: "Aim for Excellence",
    description:
      '"Excellence" is not just a big concept. Instead, this value is at the core of each of our individuals, in every job they do.',
  },
  {
    title: "Show Passion",
    description:
      "We are willing to provide unconditional support and flexibly adjust based on challenges to find solutions.",
  },
];

function FeatureSection() {
  return (
    <section className="section-feature" id="feature">
      <div className="container">
        <div className="title-section">
          <h2>Why Pizza365?</h2>
        </div>
        <div className="features">
          {features.map((feature, i) => (
            <Feature feature={feature} i={i} key={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Feature({ feature, i }) {
  return (
    <div className={`feature-${i + 1}`}>
      <h3>{feature.title}</h3>
      <p>{feature.description}</p>
    </div>
  );
}

export default FeatureSection;
