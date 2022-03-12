import React from 'react'
import "./compgraph.css"
import 'chart.js/auto';
import compGraphimg from "../Assests/graph.png"
import { Line } from "react-chartjs-2";
const CompGraph = () => {

  const data = {
    labels: ["0%", "20%", "40%", "60%", "80%", "100%"],
    datasets: [
      
      {
        
        data: [0, 30, 15, 25, 18, 0],
        fill: false,
        borderColor: "#6AA0F2"
      }
    ]
  };
  return (
    <div className='compgraph'>
        <div className="compgraph__title">
        <h3>
        Comparison Graph
        </h3>

        <p>
        You scored 37% percentile which is lower than the
average percentile 72% of all the engineers who took this assessment
        </p>
        <img src={compGraphimg} />
        {/* <div style={{height:"20rem",position:"relative", marginTop:"61%", padding:"1%"}}> */}
        {/* <Line data={data} 
        options={{
          responsive: true,
          maintainAspectRatio: false,
          width:"400",
          height:"400",
        }} /></div> */}
        </div>
    </div>
  )
}

export default CompGraph