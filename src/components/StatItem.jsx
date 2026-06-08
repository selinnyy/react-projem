// components/StatItem.jsx
export default function StatItem({ count, label }) {
  return (
    <div className="stat-item">
      <h3>{count}</h3>
      <p>{label}</p>
    </div>
  );
}