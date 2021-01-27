import Task from "./Task";

/** Tasks Component
 * @returns Tasks
 */
const Tasks = ({ tasks }: { tasks: any[] }) => {
  return (
    <>
      {console.log(tasks)}
      {tasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </>
  );
};

export default Tasks;
