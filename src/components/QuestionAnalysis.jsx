import React from 'react'
import "./qanalysis.css"
import 'chart.js/auto';
import { Doughnut } from "react-chartjs-2";
import pie from "../Assests/pie.png"
const QuestionAnalysis = () => {

    
    const data = {
        
        datasets: [
          {
            data: [15,7],
            backgroundColor: [ "#438AF6","#ECF2FF"],
          
            borderWidth: 2,
            
          }
        ]
      };

  
  return (
    <div className='question__analysis__container'>
        <div className="qa__title">
            <h3>
            Question Analysis
            </h3>
           
        </div>

        <div className="qa__subtitle">
            <p>
            You scored 7 question correct out of 15. However it
still needs some improvements
            </p>
        </div>

        <div className="qa__score">
        07 / 15
        </div>

        <div className="div__img">
        <Doughnut data={data} 
            options={{
                responsive: true,
                maintainAspectRatio: false,
                width:"400",
                height:"400",
              }} />
        </div>
        {/* <Doughnut data={data} /> */}
        {/*  */}
    </div>
  )
}

export default QuestionAnalysis