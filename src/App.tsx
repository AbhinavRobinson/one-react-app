import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";

/** Reminder Component
 * @returns App
 *
 * @author Abhinav Robinson
 */
const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: 0,
      text: "Test",
    },
  ]);

  return (
    <div className="flex items-center justify-center w-screen h-screen p-8 m-0 bg-indigo-900">
      <div className="flex flex-col w-2/3 p-12 m-0 bg-white border-2 border-gray-900 shadow-inner h-1/2 rounded-xl">
        <Header />
        <Tasks tasks={tasks} />
      </div>
    </div>
  );
};

export default App;
