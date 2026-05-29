import TaskCard from "./components/task-card";

const App = () => {
  return (
    <>
      <div>Task Management</div>
      <TaskCard
        task={{
          id: 1,
          title: "Play Soccer",
          description: "Stadion Gelora Bung Karno",
          isComplete: false,
        }}
      />
    </>
  );
};

export default App;
