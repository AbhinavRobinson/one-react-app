/** Task Component
 * @returns Single Task
 */
const Task = ({ task }: { task: any }) => {
  return (
    <div className="w-full p-4 my-2 bg-indigo-100 rounded-md hover:bg-indigo-200">
      <h3 className="text-xl font-semibold">{task.text}</h3>
      <p>{task.day}</p>
    </div>
  );
};

export default Task;
