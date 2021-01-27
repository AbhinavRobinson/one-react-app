/** Add Task Button Component
 * @returns Add task button
 */
const Button = ({ color = "bg-black", text = "Add Tasks" }) => {
  return (
    <button
      className={
        "justify-end w-1/5 h-10 font-semibold text-center text-white bg-black rounded " +
        color
      }
    >
      {text}
    </button>
  );
};

export default Button;
