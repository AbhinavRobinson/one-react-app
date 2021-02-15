import Task from "./Task";

/** Tasks Component
 * @param {Array} task
 * @typedef {Text, Day, Reminder} task
 *
 * @param {Function} onDelete : delete task
 * @param {Function} onToggle : toggle reminder
 *
 * @returns Tasks
 */
const Tasks = ({
  tasks = [],
  onDelete = () => {},
  onToggle = () => {},
}: {
  tasks: any[];
  onDelete: Function;
  onToggle: Function;
}) => {
  return (
    <>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onDelete={onDelete}
          onToggle={onToggle}
        />
      ))}
    </>
  );
};

export default Tasks;
