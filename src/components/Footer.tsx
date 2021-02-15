import { Link, useLocation } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <p>Copyright &copy; 2021</p>
      {useLocation().pathname === "/" && <Link to="/about">About</Link>}
    </footer>
  );
};

export default Footer;
