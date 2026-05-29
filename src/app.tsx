import TaskCard from "./components/task-card";
import dataTask from "./data";

const App = () => {
  return (
    <>
      <div>Task Management</div>
      {dataTask.map((task) => {
        return <TaskCard key={task.id} task={task} />;
      })}
    </>
  );
};

export default App;
