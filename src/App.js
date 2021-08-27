import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Install VScode",
      day: "Aug 26th at 6:00pm",
      reminder: true,
    },
    {
      id: 2,
      text: "Purchase JavaScript course",
      day: "Sep 10th at 12:00pm",
      reminder: true,
    },
    {
      id: 3,
      text: "Start #100 days of code",
      day: "Aug 26th at 6:00pm",
      reminder: false,
    },
  ]);

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  return (
    <div className="container">
      <Header />
      <AddTask />
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "Add a new task"
      )}
    </div>
  );
};

export default App;
