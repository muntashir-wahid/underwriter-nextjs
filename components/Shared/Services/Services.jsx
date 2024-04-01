import ServiceCard from "./ServiceCard";

const servicesContent = [
  {
    id: "1",
    heading: "Affordable Auto Insurance",
    desc: "USA Underwriters offers affordable rates on quality coverage.",
    imageSrc: "assets/images/service-img.png",
  },
  {
    id: "2",
    heading: "Accidents Can Add Up",
    desc: "Accidents and infractions can linger long after the fines are paid and the car is repaired.",
    imageSrc: "assets/images/service-img.png",
  },
  {
    id: "3",
    heading: "Price Conscious",
    desc: "Price conscious consumers choose USA Underwriters for affordable auto insurance solutions.",
    imageSrc: "assets/images/service-img.png",
  },
];

export default function Services() {
  return (
    <section className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-3">
      {servicesContent.map((service) => (
        <ServiceCard key={service.id} service={service} />
      ))}
    </section>
  );
}
