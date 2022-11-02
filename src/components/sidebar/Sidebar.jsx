import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import BadgeIcon from '@mui/icons-material/Badge';
import DirectionsBusFilledIcon from '@mui/icons-material/DirectionsBusFilled';
import FeedbackIcon from '@mui/icons-material/Feedback';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import DepartureBoardOutlinedIcon from '@mui/icons-material/DepartureBoardOutlined';


const Sidebar = () => {
  const { dispatch } = useContext(DarkModeContext);
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">Ceylon Travel</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <li>
            <DashboardIcon className="icon" />
            <span>Dashboard</span>
          </li>
         
          <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              <HomeIcon className="icon" />
              <span>Home</span>
            </li>
          </Link>
          <Link to="/products" style={{ textDecoration: "none" }}>
            <li>
              <PeopleIcon className="icon" />
              <span>Passengers</span>
            </li>
          </Link>
          <li>
            <BadgeIcon className="icon" />
            <span>Employee</span>
          </li>

          
          <Link to="/allocate_employees_for_travel" style={{ textDecoration: "none" }}>
          <li>
            <DirectionsBusFilledIcon className="icon" />
            <span>Busses</span>
          </li>
          </Link>

          <Link to="/Timetable" style={{ textDecoration: "none" }}>
          <li>
            <DepartureBoardOutlinedIcon className="icon" />
            <span>Timtable</span>
          </li>
          </Link>
          <li>
            <MonetizationOnOutlinedIcon className="icon" />
            <span>Pramotion</span>
          </li>
         
          <li>
            <InsertChartIcon className="icon" />
            <span>Statistics</span>
          </li>
          <li>
            <FeedbackIcon className="icon" />
            <span>Feedback</span>
          </li>
        
          <p className="title">USER</p>
          <li>
            <AccountCircleOutlinedIcon className="icon" />
            <span>Profile</span>
          </li>
          <li>
            <ExitToAppIcon className="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "LIGHT" })}
        ></div>
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "DARK" })}
        ></div>
      </div>
    </div>
  );
};

export default Sidebar;
