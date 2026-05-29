import type { Task } from "../types";
import TaskCard from "./task-card";

function TaskList({ tasks }: { tasks: Task[] }) {
  return (
    <div className="task-list">
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
}

export default TaskList;
