import "./NavIconTooltip.css";

const NavIconTooltip = ({ text, children }) => (
  <div className="tooltip-container">
    {children}
    <span className="tooltip-text">{text}</span>
  </div>
);

export default NavIconTooltip;
