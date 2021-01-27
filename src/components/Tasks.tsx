import Task from "./Task";

/** Tasks Component
 * @returns Tasks
 */
const Tasks = ({ tasks, onDelete }: { tasks: any[]; onDelete: any }) => {
  return (
    <>
      {console.log(tasks)}
      {tasks.map((task) => (
        <Task key={task.id} task={task} onDelete={onDelete} />
      ))}
    </>
  );
};

export default Tasks;
