import { FaTimes } from "react-icons/fa";

const Task = ({ task, onDelete, onToggle }) => {
  return (
    <div
      style={taskInput}
      className={`task ${task.reminder && "reminder"}`}
      onDoubleClick={() => onToggle(task.id)}
    >
      <h3 className="flex justify-between items-center" style={taskh3}>
        {task.text}{" "}
        <FaTimes
          style={{
            color: "orangered",
            cursor: "pointer",
          }}
          onClick={() => onDelete(task.id)}
        />
      </h3>
      <p style={taskp}>{task.day}</p>
    </div>
  );
};

const taskInput = {
  background: "rgba(255, 255, 255, 0.3)",
  border: "1px solid rgba(0, 0, 0, 0)",
  borderRadius: "3px",
  boxShadow: "rgba(0, 0, 0, 0.1) 0px 3px 3px, rgba(0, 0, 0, 0.1) 0px 3px 3px",
  margin: "10px 0",
  padding: "0.8rem",
  cursor: "pointer",
  transition: "0.2s ease-in-out",
};

const taskh3 = {
  fontSize: "0.9rem",
};

const taskp = {
  fontSize: "0.8rem",
};

export default Task;
