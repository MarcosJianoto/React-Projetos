import "./MainContent.css";
import UpcomingMaintenances from "./sections/UpcomingMaintenances";
import Report from "./sections/Report";
import DashboardSumary from "./sections/DashboardSumary";
import Diary from "./sections/Diary";
import Week from "./sections/Week";
import Month from "./sections/Month";
import Year from "./sections/Year";
import Total from "./sections/Total";

const MainContent = () => {
  return (
    <div className="background-container">
      <div className="section-box">
        <div>
          <Diary />
        </div>
      </div>
      <div className="section-box">
        <div>
          <Week />
        </div>
      </div>
      <div className="section-box">
        <div>
          <Month />
        </div>
      </div>
      <div className="section-box">
        <div>
          <Year />
        </div>
      </div>
      <div className="section-box-total">
        <div>
          <Total />
        </div>
      </div>
      <div className="section-box">
        <div>
          <Report />
        </div>
      </div>
      <div className="section-box">
        <div>
          <UpcomingMaintenances />
        </div>
      </div>
      <div className="section-box">
        <div>
          <DashboardSumary />
        </div>
      </div>
    </div>
  );
};

export default MainContent;
