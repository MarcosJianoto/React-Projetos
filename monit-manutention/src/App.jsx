import "./App.css";
import Background from "./components/Background";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="principal">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="body">
        <Background />
      </div>
    </div>
  );
}

export default App;
