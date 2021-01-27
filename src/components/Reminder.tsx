import Button from "./Button";

/** Task Reminder Component
 * @returns Task Reminder
 */
const Reminder = ({ title = "Reminders" }) => {
  const onClick = () => {
    console.log("clicked");
  };

  return (
    <header className="flex flex-row w-2/3 p-12 bg-white border-2 border-gray-400 rounded-lg h-1/2">
      <h1 className="w-4/5 h-10 text-4xl font-medium align-middle">{title}</h1>
      <Button color="bg-green-500" text="Add Task" onClick={onClick} />
    </header>
  );
};

export default Reminder;
