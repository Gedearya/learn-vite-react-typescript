import Header from "./components/header";
import TaskList from "./components/task-list";
import dataTask from "./data";

const App = () => {
  return (
    <>
      <Header title="Task Management" />
      <TaskList tasks={dataTask} />
    </>
  );
};

export default App;
