/** Task Reminder Component
 * @returns Task Reminder
 */
const Reminder = ({ title = "Reminders" }) => {
  return (
    <header className="flex flex-row w-2/3 p-12 bg-white border-2 border-gray-400 rounded-lg h-1/2">
      <h1 className="w-4/5 h-10 text-4xl font-medium align-middle">{title}</h1>
      <button className="justify-end w-1/5 h-10 font-semibold text-center text-white bg-black rounded">
        Add Tasks
      </button>
    </header>
  );
};

export default Reminder;
