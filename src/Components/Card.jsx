import "../styles.css";

export default function Card({ onClick, pair }) {
  return (
    <div
      className={`element card ${pair.show || pair.found ? "cardFlip" : ""}`}
      onClick={onClick}
    >
      <div className="back">{pair.val}</div>
      <div className="front"></div>
    </div>
  );
}
