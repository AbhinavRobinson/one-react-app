import { FaTimes } from "react-icons/fa";

/**
 * @summary Task Component lists tasks
 *
 * @param {Array} task array
 * @def {id, text, day, reminder} task
 *
 * @param {Function} onDelete : delete task
 * @param {Function} onToggle : toggle reminder
 *
 * @returns Single Task
 */
const Task = ({
  task = [],
  onDelete = () => {},
  onToggle = () => {},
}: {
  task: any;
  onDelete: Function;
  onToggle: Function;
}) => {
  return (
    <div
      className={`w-full border-l-8 p-4 my-2 bg-yellow-100 rounded-md hover:bg-yellow-200 select-none ${
        task.reminder ? "border-green-500" : "border-transparent"
      }`}
      onDoubleClick={() => {
        onToggle(task.id);
      }}
    >
      <h3 className="flex flex-row justify-between w-full text-xl font-semibold">
        {task.text}
        <FaTimes
          className="self-center text-red-300 rounded-full cursor-pointer hover:text-red-600"
          onClick={() => onDelete(task.id)}
        />
      </h3>
      <p>{task.day}</p>
    </div>
  );
};

export default Task;
