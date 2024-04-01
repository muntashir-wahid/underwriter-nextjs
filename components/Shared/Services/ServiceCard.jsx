export default function ServiceCard({ service }) {
  return (
    <article className="border rounded-lg p-8 flex flex-col gap-3">
      <figure className="p-3 bg-gray-200 rounded-full self-start">
        <img src={service.imageSrc} alt="Service image" />
      </figure>
      <h4 className="text-gray-900 font-semibold text-xl">{service.heading}</h4>
      <p className="text-gray-500 font-medium">{service.desc}</p>
    </article>
  );
}
