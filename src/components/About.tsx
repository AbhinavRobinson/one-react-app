import { useLocation } from "react-router-dom";

const About = () => {
  const location = useLocation();

  return (
    <>
      {location.pathname === "/about" && (
        <div>
          <h2 className="font-semibold">one-react-app : Version 1.0.0</h2>
          <p className="py-2 font-normal">
            Hi! it's abhinav 👋 I'm a Developer and UI/UX Designer based in
            India.
          </p>
          <a
            href="https://github.com/AbhinavRobinson/one-react-app"
            className="hover:text-red-400"
          >
            Visit the Code here ⚡
          </a>
        </div>
      )}
    </>
  );
};

export default About;
