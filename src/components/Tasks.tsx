/** Tasks Component
 * @returns Tasks
 */
const Tasks = ({ tasks = [{ id: "0", text: "test" }] }) => {
  return (
    <>
      {tasks.map((task) => (
        <h3 key={task.id}>{task.text}</h3>
      ))}
    </>
  );
};

export default Tasks;
