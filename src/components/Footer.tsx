import { Link, useLocation } from "react-router-dom";

/**
 * FOOTER
 */
const Footer = () => {
  return (
    <footer className="mt-10 text-center">
      <p>
        Copyright <span className="font-semibold">Abhinav Robinson</span> &copy;
        2021
      </p>
      {useLocation().pathname === "/" && (
        <Link to="/about" className="hover:text-red-400">
          About
        </Link>
      )}
      {useLocation().pathname === "/about" && (
        <Link to="/" className="hover:text-red-400">
          Go back to App
        </Link>
      )}
    </footer>
  );
};

export default Footer;
