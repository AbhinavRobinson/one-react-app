import Reminder from "./components/Reminder";

/** Reminder Component
 * @returns {JsxElement} App
 *
 * @author Abhinav Robinson
 */
const App = () => {
  return (
    <div className="w-screen h-screen p-0 m-0 bg-blue-100">
      {/** Reminder
       * @component Reminder
       */}
      <Reminder />
    </div>
  );
};

export default App;
