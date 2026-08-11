import ProcessCard from "@/components/Cards/ProcessCard";

const processSteps = [
  {
    id: 1,
    title: "Research",
    image: "/images/webp/process-1.webp",
    alt: "Research process",
    description:
      "At the beginning of each project, we dive deep into understanding your unique needs and objectives. Our team conducts comprehensive research to gain clear insights, enabling us to map out the ideal layout and key features your website should offer.",
  },
  {
    id: 2,
    title: "Concept",
    image: "/images/webp/process-2.webp",
    alt: "Website concept development",
    description:
      "Before advancing further, we refine our initial ideas. We generate a multitude of preliminary concepts and enhance them through collaborative brainstorming, ensuring our ideas are both creative and practical.",
  },
  {
    id: 3,
    title: "Execution",
    image: "/images/webp/process-3.webp",
    alt: "Website design execution",
    description:
      "Based on your detailed specifications, we design a custom website layout that truly reflects your brand's identity online. Our dedicated experts value your feedback at every stage, ensuring the final product aligns perfectly with your vision.",
  },
];



const InnerProcessSection = () => {
  return (
    <section className="inner-process">
      <div className="container">
        <div className="heading">
          <h3>
            Our Approach <span>to Exceptional</span> Web Design
          </h3>

          <p>
            Each phase of our process is celebrated for its streamlined
            efficiency, transparent methods, and the remarkable results it
            delivers to our clients.
          </p>
        </div>

        <div className="inner-process-wrap">
          <div className="row">
            {processSteps.map((step) => (
              <ProcessCard key={step.id} step={step} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InnerProcessSection;