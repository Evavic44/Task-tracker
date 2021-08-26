import { useState } from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';

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

  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks} />
    </div>
  );
};

export default App;
