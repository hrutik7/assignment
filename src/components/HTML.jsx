import React,{useState} from 'react'
import "./html.css"
import HTMLlogo from "../Assests/HTML.png"
import Arrow from "../Assests/arrowright.png"
const HTML = () => {

    
  const [show, setShow] = useState(false);
  const changeStyle = () => {
    
  };
  return (
    <div className="html__container">
        <img src={HTMLlogo} />

        <div className="html__title">
            <h3>
            Hypertext Markup Language
            </h3>
        </div>


        <div className="html__subtitle">
            <h4>
            Questions: 08 | Duration: 15 mins | Submitted on 5 June 2021
            </h4>
        </div>

        <div className="html__btn" onClick={changeStyle}>
            <button onClick={()=>{setShow(true)}} >
                update
            </button>
        </div>

            {/* update stat */}

        
            {
                 show ? <div>
                 <div className="update__skills__score">
                    <div className="update__skills__title">
                        <h3>
                        Update Skill Scores
                        </h3>
                    </div>
                    <div className="html__logo">
                    <img src={HTMLlogo} alt="" />
                    </div>

                    <div className="html__skills__subtitle">
                   <div className="dot_1">
                       <p style={{marginLeft:"10px",marginTop:"-1px",color:"white"}}>
                           1
                       </p>
                       </div>     
                            <p>
                        Update your rank
                        </p>
                            <button>
                            12890
                            </button>
                       
                        <br />
                        <div className="dot_2">
                        <p style={{marginLeft:"10px",marginTop:"-1px",color:"white"}}>
                           2
                       </p>
                        </div>
                        <p style={{marginTop:"3rem"}}>
                        Update your percentile (Out of 100%)
                        </p>
                        <button>
                        37
                            </button>
                       
                        <br />
                        <div className="dot_3"> <p style={{marginLeft:"10px",marginTop:"-1px",color:"white"}}>
                           3
                       </p></div>
                        <p style={{marginTop:"3rem"}}>
                        Update your current score (Out of 15)
                        </p>
                        <button>
                        07
                                </button>
                    </div>


                    <button id='cancel__btn' onClick={()=>{setShow(false)}}>
                        cancel
                    </button>


                    <button id='save' onClick={()=>{setShow(false)}}>
                        save <img src={Arrow} alt="" />
                    </button>
                    
                 </div>  <style>{'body { background: rgba(30, 39, 46, 0.7); }'}</style>
                 
                 </div>
            : null
               } 

    </div>
  )
}

export default HTML