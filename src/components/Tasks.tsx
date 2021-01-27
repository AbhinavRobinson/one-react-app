/** Tasks Component
 * @returns Tasks
 */
const Tasks = (tasks = [{ text: "" }]) => {
  return (
    <>
      {tasks.map((task) => (
        <h3>{task.text}</h3>
      ))}
    </>
  );
};

export default Tasks;
