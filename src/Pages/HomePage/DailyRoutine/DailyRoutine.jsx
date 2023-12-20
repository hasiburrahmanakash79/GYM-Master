import { FaChartLine, FaClipboardCheck, FaListAlt, FaSwimmer } from "react-icons/fa";

const DailyRoutine = () => {
  return (
    <div className="container mx-auto py-20">
      <div className="md:grid grid-cols-4 gap-8">
        <div className="card p-5 items-center text-center space-y-3">
          <FaChartLine  className="text-5xl text-red-500"/>
          <h1 className="text-3xl font-bold">PROGRESSION</h1>
          <p>
            Vestibulumipsum primis in faucibus orci luctus et ultrices posuere
            Curae onces
          </p>
        </div>
        <div className="card p-5 items-center text-center space-y-3">
          <FaSwimmer  className="text-5xl text-red-500"/>
          <h1 className="text-3xl font-bold">WORKOUT</h1>
          <p>
            Vestibulumipsum primis in faucibus orci luctus et ultrices posuere
            Curae onces
          </p>
        </div>
        <div className="card p-5 items-center text-center space-y-3">
          <FaClipboardCheck  className="text-5xl text-red-500"/>
          <h1 className="text-3xl font-bold">NUTRITION</h1>
          <p>
            Vestibulumipsum primis in faucibus orci luctus et ultrices posuere
            Curae onces
          </p>
        </div>
        <div className="card p-5 items-center text-center space-y-3">
          <FaListAlt  className="text-5xl text-red-500"/>
          
          <h1 className="text-3xl font-bold">DAILY CHART</h1>
          <p>
            Vestibulumipsum primis in faucibus orci luctus et ultrices posuere
            Curae onces
          </p>
        </div>
      </div>
    </div>
  );
};

export default DailyRoutine;
