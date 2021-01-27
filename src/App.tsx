import Reminder from "./components/Reminder";

/** Reminder Component
 * @returns App
 *
 * @author Abhinav Robinson
 */
const App = () => {
  return (
    <div className="flex items-center justify-center w-screen h-screen p-8 m-0 bg-blue-50">
      {/** Reminder
       * @component Reminder
       */}
      <Reminder />
    </div>
  );
};

export default App;
