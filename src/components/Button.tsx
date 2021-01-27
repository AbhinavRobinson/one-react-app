/** Add Task Button Component
 * @returns Add task button
 */
const Button = ({
  color = "bg-black",
  text = "Add Tasks",
  onClick = () => {},
}) => {
  return (
    <button
      className={
        "justify-end w-1/5 h-10 font-semibold text-center text-white bg-black rounded border-transparent hover:border-gray-900 border-2 " +
        color
      }
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
