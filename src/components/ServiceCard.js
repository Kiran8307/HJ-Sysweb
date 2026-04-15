      export default function ServiceCard({ title, desc }) {
  return (
    <div className="service-card">
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  );
}
