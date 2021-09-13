import { useState } from "react";

const AddTask = ({ onAdd }) => {
  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  const [reminder, setReminder] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();

    if (!text) {
      alert("Please add a task");
      return;
    }

    onAdd({ text, day, reminder });

    setText("");
    setDay("");
    setReminder(false);
  };

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label className="text-sm block mb-1 font-medium" htmlFor="task">
          Task
        </label>
        <input
          style={inputStyle}
          className="w-full mb-4 p-4 text-sm focus:outline-none focus:ring-1 focus:ring-white"
          type="text"
          placeholder="Add Task"
          id="task"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>

      <div className="form-control">
        <label className="text-sm block mb-1 font-medium" htmlFor="date">
          Day & Time
        </label>
        <input
          style={inputStyle}
          className="w-full mb-2 p-4 text-sm focus:outline-none focus:ring-1 focus:ring-white"
          type="text"
          placeholder="Add Day & Time"
          id="date"
          value={day}
          onChange={(e) => setDay(e.target.value)}
        />
      </div>

      <div className="form-control form-control-check flex items-center justify-center py-3">
        <label className="text-sm block font-medium" htmlFor="reminder">
          Set Reminder:
        </label>
        <input
          className="ml-3"
          type="checkbox"
          checked={reminder}
          id="reminder"
          value={reminder}
          onChange={(e) => setReminder(e.currentTarget.checked)}
        />
      </div>

      <input
        style={buttonPrimary}
        type="submit"
        value="Save Task"
        className="btn btn-block cursor-pointer py-3 w-full"
      />
    </form>
  );
};

const buttonPrimary = {
  background: "orangered",
  border: "none",
};

const inputStyle = {
  transition: "0.1s ease",
  background: "rgba(255, 255, 255, 0.3)",
};

export default AddTask;
