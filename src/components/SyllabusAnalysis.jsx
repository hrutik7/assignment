import React from 'react'
import "./syllabusanalysis.css"
import './styles.scss'
import ProgressBar from "@ramonak/react-progress-bar";
const SyllabusAnalysis = () => {
  return (
    <div className='syllabus__container'>
        <div className="syllabus__heading">
            <h3>
            Syllabus wise Analysis
            </h3>
        </div>

        <div className="syllabus__content">
            <p>
            HTML Tools, Forms, History
            </p>
            <ProgressBar
  completed={80}
  className="wrapper"
  barContainerClassName="container"
  completedClassName="barCompleted"
  labelClassName="label"
/>
            <p>
            Tags & References in HTML
            </p>
            <ProgressBar
  completed={60}
  width ="60%"
  className="wrapper_1"
  barContainerClassName="container_1"
  completedClassName="barCompleted_1"
  labelClassName="label_1"
  transitionDuration= "1s"
  
  transitionTimingFunction = "ease-in-out"
  
  animateOnRender = {true}
  initCompletedOnAnimation = "30"
/>
            <p>
            Tables & CSS Basics
            </p>
            <ProgressBar
  completed={20}
  width ="60%"
  className="wrapper_2"
  barContainerClassName="container_2"
  completedClassName="barCompleted_2"
  labelClassName="label_2"
  transitionDuration= "1s"
  
  transitionTimingFunction = "ease-in-out"
  
  animateOnRender = {true}
  initCompletedOnAnimation = "30"
/>
            <p>
            Tables & CSS Basics
            </p>

            <ProgressBar
  completed={96}
  width ="60%"
  className="wrapper_3"
  barContainerClassName="container_3"
  completedClassName="barCompleted_3"
  labelClassName="label_3"
  transitionDuration= "1s"
  
  transitionTimingFunction = "ease-in-out"
  
  animateOnRender = {true}
  initCompletedOnAnimation = "30"
/>
        </div>
    </div>
  )
}

export default SyllabusAnalysis