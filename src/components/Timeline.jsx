import { Line } from "react-chartjs-2";
import React from "react";

const Timeline = ({ meteorCount }) => {
  const data = {
    labels: Object.keys(meteorCount),
    datasets: [
      {
        label: "Meteors Per Year",
        fill: false,
        lineTension: 0.1,
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "rgba(75,192,192,1)",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "rgba(75,192,192,1)",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(75,192,192,1)",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: Object.values(meteorCount)
      }
    ]
  };
  return (
    <figure id="timeline">
      <Line data={data} />
    </figure>
  );
};

export default Timeline;
