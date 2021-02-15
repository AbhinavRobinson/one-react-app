import Task from "./Task";

/** Tasks Component
 * @returns Tasks
 */
const Tasks = ({
  tasks,
  onDelete,
  onToggle,
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
