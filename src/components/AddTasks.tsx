import { useState } from "react";

/**
 * @summary gives ability to add tasks
 *
 * @param {Function} onAdd : add tasks
 * @param {Boolean} showAddTask : toggle this Component
 */
const AddTasks = ({
  onAdd = () => {},
  showAddTask = false,
}: {
  onAdd: Function;
  showAddTask: Boolean;
}) => {
  /**
   * State Updates
   *
   * @param {string} text - Text body of reminder
   * @param {string} daytime - Day and Time of reminder
   * @param {boolean} reminder - set reminder on/off
   *
   * @function setTime - update text
   * @function setDayTime - update daytime
   * @function setReminder - update reminder
   *
   * @returns void
   */
  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  const [reminder, setReminder] = useState(false);

  /**
   * OnSubmit Event Function
   * @param e : Event triggered
   *
   * @summary add new task of text,daytime,reminder
   *
   * @returns void
   */
  const onSubmit = (e: any) => {
    // basic event validation
    e.preventDefault();

    // alerts
    if (!text) {
      alert("Please Add Tasks :)");
      return;
    }
    if (!day) {
      alert("Please Add Date and Time :)");
      return;
    }

    // update state
    onAdd({ text, day, reminder });

    // clear states
    setText("");
    setDay("");
    setReminder(false);
  };

  return (
    <form
      className={`absolute ${
        showAddTask ? "flex" : "hidden"
      } flex-col flex-wrap self-end p-5 mb-4 duration-200 transform translate-y-16 border-2 border-gray-500 shadow-2xl w-96 bg-gray-50 rounded-xl add-form`}
      onSubmit={onSubmit}
    >
      <div className="py-4 form-control">
        <label className="text-xl font-semibold pr-28">Task</label>
        <input
          className="px-2 py-1 font-semibold border-2 border-black rounded-md text-md"
          type="text"
          placeholder="Add New Task"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className="py-4 form-control">
        <label className="pr-5 text-xl font-semibold">Day and Time</label>
        <input
          className="px-2 py-1 font-semibold border-2 border-black rounded-md text-md"
          type="text"
          placeholder="Add Day and Time"
          value={day}
          onChange={(e) => setDay(e.target.value)}
        />
      </div>
      <div className="py-3 text-xl font-semibold form-control">
        <label className="pr-3">Set Reminder?</label>
        <input
          type="checkbox"
          checked={reminder}
          value={reminder.toString()}
          onChange={(e) => setReminder(e.currentTarget.checked)}
        />
      </div>

      <input className="py-2 my-4" type="submit" value="Save Task" />
    </form>
  );
};

export default AddTasks;
