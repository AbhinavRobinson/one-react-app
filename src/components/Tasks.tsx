/** Tasks Component
 * @returns Tasks
 */
const Tasks = ({
  tasks = [{ id: 0, text: "No tasks available right now." }],
}) => {
  return (
    <>
      {tasks.map((task) => (
        <h3 key={task.id}>{task.text}</h3>
      ))}
    </>
  );
};

export default Tasks;
