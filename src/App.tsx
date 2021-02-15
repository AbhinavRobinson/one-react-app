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
      id: "1",
      text: "Coding Session with Codechef",
      day: "Jan 28th at 3:30pm",
      reminder: true,
    },
    {
      id: "2",
      text: "Meeting for Nudge App",
      day: "Everyday at 8:45pm",
      reminder: false,
    },
  ]);

  /**
   * DELETE TASK
   * @param {string} id
   * @reutrns void
   */
  const deleteTask = (id: string) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  /**
   * TOGGLE REMINDER
   * @param {string} id
   */
  const toggleReminder = (id: string) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  return (
    <div className="flex items-center justify-center w-screen h-screen p-8 m-0 bg-gradient-to-tr from-yellow-500 to-red-300">
      <div className="flex flex-col w-2/3 h-auto max-w-screen-sm p-12 m-0 bg-white shadow-2xl rounded-xl">
        <Header />
        {tasks.length > 0 ? (
          <Tasks
            tasks={tasks}
            onDelete={deleteTask}
            onToggle={toggleReminder}
          />
        ) : (
          "No Tasks Added"
        )}
      </div>
    </div>
  );
};

export default App;
