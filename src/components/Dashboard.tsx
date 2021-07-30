import { Link } from "react-router-dom";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="Dashboard">
      <Link to="/search">Search</Link>
    </div>
  );
};

export default Dashboard;
