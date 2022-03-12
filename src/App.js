
import "./App.css"
import CompGraph from "./components/CompGraph";
import HTML from "./components/HTML";
import Navbar from "./components/Navbar";
import QuestionAnalysis from "./components/QuestionAnalysis";
import QuickStat from "./components/QuickStat";
import Sidebar from "./components/Sidebar";
import SyllabusAnalysis from "./components/SyllabusAnalysis";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Sidebar />
      <HTML />
      <QuickStat />
      <CompGraph />
      <SyllabusAnalysis />
      <QuestionAnalysis />
    </div>
  );
}

export default App;
