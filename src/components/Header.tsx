import Button from "./Button";

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
}: {
  title: string;
  hideAddTask: Function;
}) => {
  return (
    <header className="flex flex-row w-full h-16">
      <h1 className="w-4/5 text-4xl font-medium align-middle">{title}</h1>
      <Button color="bg-red-500" text="Add Task" onClick={hideAddTask} />
    </header>
  );
};

export default Header;
