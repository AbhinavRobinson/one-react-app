const AddTasks = () => {
  return (
    <form className="absolute flex flex-col flex-wrap self-end p-5 mb-4 duration-200 transform translate-y-16 border-2 border-gray-500 shadow-2xl w-96 bg-gray-50 rounded-xl add-form">
      <div className="py-4 form-control">
        <label className="text-xl font-semibold pr-28">Task</label>
        <input
          className="px-2 py-1 font-semibold border-2 border-black rounded-md text-md"
          type="text"
          placeholder="Add New Task"
        />
      </div>
      <div className="py-4 form-control">
        <label className="pr-5 text-xl font-semibold">Day and Time</label>
        <input
          className="px-2 py-1 font-semibold border-2 border-black rounded-md text-md"
          type="text"
          placeholder="Add Day and Time"
        />
      </div>
      <div className="py-3 text-xl font-semibold form-control">
        <label className="pr-3">Set Reminder?</label>
        <input type="checkbox" />
      </div>

      <input className="py-2 my-4" type="submit" value="Save Task" />
    </form>
  );
};

export default AddTasks;
