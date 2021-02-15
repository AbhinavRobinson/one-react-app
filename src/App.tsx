import { useState, useEffect } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTasks from "./components/AddTasks";

/** Reminder Component
 * @returns App
 *
 * @author Abhinav Robinson
 */
const App: React.FC = () => {
  /**
   * TASKS STATE
   *
   * @summary staticly contains all task info
   */
  const [tasks, setTasks] = useState([
    { id: 0, text: "", day: "", reminder: false },
  ]);

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks();
      setTasks(tasksFromServer);
    };

    getTasks();
  }, []);

  // fetch tasks
  const fetchTasks = async () => {
    const res = await fetch("http://localhost:8000/tasks");

    const data = await res.json();

    return data;
  };

  /**
   * DELETE TASK
   *
   * @summary delete the selected task
   *
   * @param {string} id
   * @reutrns void
   */
  const deleteTask = (id: Number) => {
    setTasks(tasks.filter((task, index) => index !== id));
  };

  /**
   * TOGGLE REMINDER
   *
   * @summary toggle reminder on/off on click event
   *
   * @param {string} id
   * @returns void
   */
  const toggleReminder = (id: Number) => {
    setTasks(
      tasks.map((task, index) =>
        index === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  /**
   * ADD TASKS
   *
   * @summary add new task to tasks array
   *
   * @returns void
   */
  const addTask = (task: any) => {
    // generate random id
    const id = Math.floor(Math.random() * 100000) + 1;

    // Add new task
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
    // hide (close) add task
    showAddTask(false);
  };

  /**
   * SHOW ADD TASK STATE
   *
   * @param {Boolean} showaddtask - to show or not to show
   * @param {Function} showAddTask - toggle showaddtask
   */
  const [showaddtask, showAddTask] = useState(Boolean);

  /**
   * @summary hide or show (toggle) add task
   *
   * @returns void
   */
  const hideAddTask = () => {
    showAddTask(!showaddtask);
  };

  return (
    <div className="flex items-center justify-center w-screen h-screen p-8 m-0 bg-gradient-to-tr from-yellow-500 to-red-300">
      <div className="flex flex-col w-2/3 h-auto max-w-screen-sm p-12 m-0 bg-white shadow-2xl rounded-xl">
        <Header
          title="Reminder"
          hideAddTask={hideAddTask}
          showaddtask={showaddtask}
        />
        {showaddtask && <AddTasks onAdd={addTask} />}
        {/* if no tasks, show "No tasks added" */}
        {tasks.length ? (
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
