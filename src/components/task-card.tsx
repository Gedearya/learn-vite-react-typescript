import type { Task } from "../types";

function TaskCard({ task }: { task: Task }) {
  return (
    <>
      <div>{task.id}</div>
      <div>{task.title}</div>
      <div>{task.description}</div>
      <div>{task.isComplete}</div>
    </>
  );
}

export default TaskCard;
