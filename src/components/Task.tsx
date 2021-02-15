import { FaTimes } from "react-icons/fa";

/** Task Component
 * @returns Single Task
 */
const Task = ({
  task,
  onDelete,
  onToggle,
}: {
  task: any;
  onDelete: Function;
  onToggle: Function;
}) => {
  return (
    <div className="w-full p-4 my-2 bg-yellow-100 rounded-md hover:bg-yellow-200">
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
