import PropTypes from "prop-types";
// import { useLocation } from "react-router";
import Button from "./Button";
import logo from "../assets/logo.png";

const Header = ({ title, onAdd, showAdd }) => {
  return (
    <header className="header flex justify-between items-center pb-7">
      <div className="flex items-center">
        <img style={mainLogo} src={logo} alt="Task Tracker Logo" />
        <h1 className="font-bold text-2xl">{title}</h1>
      </div>
      <Button
        color={showAdd ? "rgba(255, 255, 255, 0.3)" : "orangered"}
        text={showAdd ? "Close" : "Add"}
        onClick={onAdd}
      />
    </header>
  );
};

Header.defaultProps = {
  title: "Task Tracker",
};

const mainLogo = {
  width: "25px",
  marginRight: "2px",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

// Css in Js
// const headingStyle = {
//    color: 'red',
//    backgroundColor: 'black'
// }

export default Header;
