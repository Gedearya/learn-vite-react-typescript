import type { Task } from "../types";

function TaskCard({ task }: { task: Task }) {
  return (
    <>
      <h2>{task.title}</h2>
      <div>{task.description}</div>
      <div>{task.isComplete ? "✅ Done" : "❌ Not done"}</div>
    </>
  );
}

export default TaskCard;
