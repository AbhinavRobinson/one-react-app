/** Task Component
 * @returns Single Task
 */
const Task = ({ task }: { task: any }) => {
  return (
    <div className="">
      <h3>{task.text}</h3>
      <p>{task.id}</p>
    </div>
  );
};

export default Task;
