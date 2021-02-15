import { useState } from "react";

const AddTasks = () => {
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
  const [daytime, setDayTime] = useState("");
  const [reminder, setReminder] = useState("");

  return (
    <form className="absolute flex flex-col flex-wrap self-end p-5 mb-4 duration-200 transform translate-y-16 border-2 border-gray-500 shadow-2xl w-96 bg-gray-50 rounded-xl add-form">
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
          value={daytime}
          onChange={(e) => setDayTime(e.target.value)}
        />
      </div>
      <div className="py-3 text-xl font-semibold form-control">
        <label className="pr-3">Set Reminder?</label>
        <input
          type="checkbox"
          value={reminder}
          onChange={(e) => setReminder(e.currentTarget.checked.toString())}
        />
      </div>

      <input className="py-2 my-4" type="submit" value="Save Task" />
    </form>
  );
};

export default AddTasks;
