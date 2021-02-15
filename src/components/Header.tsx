import Button from "./Button";
import { useLocation } from "react-router-dom";

/** Task Header Component
 *
 * @param {string} title - Title of app
 * @param {Function} hideAddTask - toggle addTask component
 *
 * @returns Task Header
 */
const Header = ({
  title = "Reminder",
  hideAddTask = () => {},
  showaddtask = false,
}: {
  title: string;
  hideAddTask: Function;
  showaddtask: Boolean;
}) => {
  return (
    <header className="flex flex-row w-full h-16">
      <h1 className="w-4/5 text-4xl font-medium align-middle">{title}</h1>
      {useLocation().pathname === "/" && (
        <Button
          color={showaddtask ? "bg-red-500" : "bg-green-500"}
          text={showaddtask ? "Cancel" : "Add Tasks"}
          onClick={hideAddTask}
        />
      )}
    </header>
  );
};

export default Header;
