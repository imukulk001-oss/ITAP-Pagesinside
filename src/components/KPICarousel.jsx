import { useRef } from "react";
import "./KPICarousel.css";

const KPICarousel = ({ kpiStats }) => {
  const scrollRef = useRef(null);

  const scrollAmount = 300; // how much to scroll per click

  const scrollLeft = () => {
    scrollRef.current.scrollBy({
      left: -scrollAmount,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({
      left: scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div className="kpi-container">
      {/* Left Arrow */}
      <button className="kpi-arrow-btn left" onClick={scrollLeft}>
        ◀
      </button>

      {/* Scroll Area */}
      <div className="kpi-scroll" ref={scrollRef}>
        {kpiStats.map((kpi, index) => (
          <div key={index} className="kpi-card">
            <h4>{kpi.title}</h4>
            <h2>{kpi.value}</h2>
            <p>{kpi.change} vs last week</p>
          </div>
        ))}
      </div>

      {/* Right Arrow */}
      <button className="kpi-arrow-btn right" onClick={scrollRight}>
        ▶
      </button>
    </div>
  );
};

export default KPICarousel;
