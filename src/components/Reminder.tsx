/** Task Reminder Component
 * @returns Task Reminder
 */
const Reminder = ({ title = "Reminders" }) => {
  return (
    <header className="w-2/3 p-8 bg-white border-2 border-gray-400 rounded-lg h-1/3">
      <h1 className="text-3xl font-medium">{title}</h1>
    </header>
  );
};

export default Reminder;
