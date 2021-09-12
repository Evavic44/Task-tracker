import { useState} from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

const App = () => {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([
   {
      "id": 1,
      "text": "Doctors Appointment",
      "day": "Feb 5th at 2:30pm",
      "reminder": true
    },
    {
      "id": 2,
      "text": "Meeting at School",
      "day": "Feb 6th at 1:30pm",
      "reminder": true
    }
  ]);

  //   Fetch Task
  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`);
   //  const data = await res.json();
    const data = res.json();

    return data;
  };

  // Add Task
  const addTask = async (task) => {
   const id = Math.floor(Math.random() * 10000) + 1
   const newTask = { id, ...task }
   setTasks([...tasks, newTask])
  }

  // Delete Task
  const deleteTask = (id) => {
   setTasks(tasks.filter((task) => task.id !== id))
  };

  // Toggle Reminder
  const toggleReminder = async (id) => {
    const taskToToggle = await fetchTask(id);
    const updTask = { ...taskToToggle, reminder: !taskToToggle.reminder };

    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(updTask),
    });

    const data = await res.json();

    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: data.reminder } : task
      )
    );
  };

  return (
    <body style={backgroundAnimate} className="p-3 h-full">
      <div className="container m-auto my-8 max-w-md bg-white p-8 text-white rounded bg-opacity-30">
        <Header
          onAdd={() => setShowAddTask(!showAddTask)}
          showAdd={showAddTask}
        />
        {showAddTask && <AddTask onAdd={addTask} />}
        {tasks.length > 0 ? (
          <Tasks
            tasks={tasks}
            onDelete={deleteTask}
            onToggle={toggleReminder}
          />
        ) : (
          "No Tasks to show"
        )}

        <Footer />
      </div>
    </body>
  );
};

const backgroundAnimate = {
  fontFamily: "'Quicksand', sansSerif",
  boxSizing: "border-box",
};

export default App;
