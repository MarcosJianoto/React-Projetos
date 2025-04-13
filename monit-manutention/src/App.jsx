import "./App.css";
import MainContent from "./components/MainContent";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="principal">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="body">
        <MainContent />
      </div>
    </div>
  );
}

export default App;
