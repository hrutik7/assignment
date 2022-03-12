import React from 'react'
import "./sidebar.css"
import dashgraph from "../Assests/dashboard.svg"
import award from "../Assests/award.png"
import internships from "../Assests/internships.png"
const Sidebar = () => {
  return (
    <div className='sidebar__container'>
        <div className="dashboard">
                <img src={dashgraph} />
                <div className="dashboard__content">
                    <h4>Dashboard</h4>
                </div>
        </div>

        <div className="skill__test" style={{marginLeft: "0rem",
    backgroundColor: "#F7F8FA",
    borderBottomRightRadius: "50px",
    borderTopRightRadius: "50px"}}>
        <img src={award} /><div className="dashboard__content" >
                    <h4 style={{color:"#445EE2"}}>Awards</h4>
                </div>
        </div>

        <div className="internships">
        <img src={internships} /><div className="dashboard__content">
                    <h4>Internships</h4>
                </div>
        </div>
    </div>
  )
}

export default Sidebar