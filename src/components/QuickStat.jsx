import React from 'react'
import "./quickstart.css"
import Trophy from "../Assests/trophy.png"
import Tick from "../Assests/tick.png"
import Percentile from "../Assests/percentile.png"
const QuickStat = () => {
  return (
    <div className='quick__stat__container'>
        <div className="quick__stat__title">
            <h3>
                Quick Statistics
            </h3>
        </div>

        <div className="quick__stat__logos">
            <div className="trophy">
                <img src={Trophy} />

                <div className="stat__content">
                <h3>
                12,890
                </h3>
                <h4>
                YOUR RANK
                </h4>
            </div>
               
            </div>

            <div className="percentile">
            <img src={Percentile} />

            <div className="stat__content">
            <h3>
            37%
                </h3>

                <h4>
                PERCENTILE
                </h4>
            </div>
          
            </div>

            <div className="correctAnswers">
            <img src={Tick} />

            <div className="stat__content">
            <h3>
            07 / 15
                </h3>

                <h4>
                CORRECT ANSWERS
                </h4>
            </div>
          
            </div>

        </div>
    </div>
  )
}

export default QuickStat