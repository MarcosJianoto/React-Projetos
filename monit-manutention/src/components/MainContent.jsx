import "./MainContent.css";
import Categorias from "./sections/Categorias";
import Equipments from "./sections/Equipments";
import HistoryManutentions from "./sections/HistoryManutentions";
import ModelsEquipments from "./sections/ModelsEquipments";
import Report from "./sections/Report";

const MainContent = () => {
  return (
    <div className="background-container">
      <div className="section-box-categories">
        <Categorias />
      </div>
      <div className="section-box">
        <div>
          <ModelsEquipments />
        </div>
      </div>
      <div className="section-box">
        <div>
          <Equipments />
        </div>
      </div>
      <div className="section-box">
        <div>
          <HistoryManutentions />
        </div>
      </div>
      <div className="section-box">
        <div>
          <Report />
        </div>
      </div>
    </div>
  );
};

export default MainContent;
