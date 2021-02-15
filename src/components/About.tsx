import { Link, useLocation } from "react-router-dom";

const About = () => {
  const location = useLocation();

  return (
    <>
      {location.pathname === "/about" && (
        <div>
          <h4>Version 1.0.0</h4>
          <Link to="/">Go back to App</Link>
        </div>
      )}
    </>
  );
};

export default About;
