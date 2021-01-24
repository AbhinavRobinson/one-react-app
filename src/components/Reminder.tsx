/** Task Reminder Component
 * @returns Task Reminder
 */
const Reminder = ({ title = "Reminders" }) => {
  return (
    <header className="flex flex-row w-2/3 p-8 bg-white border-2 border-gray-400 rounded-lg h-1/3">
      <h1 className="text-3xl font-medium">{title}</h1>
      <button className="w-24 h-8 text-sm text-center text-white bg-blue-400 rounded-lg">
        Add Tasks
      </button>
    </header>
  );
};

export default Reminder;
