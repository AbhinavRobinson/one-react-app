import Task from "./Task";

/** Tasks Component
 * @returns Tasks
 */
const Tasks = ({ tasks, onDelete }: { tasks: any[]; onDelete: Function }) => {
  return (
    <>
      {tasks.map((task) => (
        <Task key={task.id} task={task} onDelete={onDelete} />
      ))}
    </>
  );
};

export default Tasks;
