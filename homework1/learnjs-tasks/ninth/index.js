import open from "open";
import path from "path";

export default function(task_number) {
  console.log("Working!!!");
  if (task_number == 1) {
    open(path.resolve("learnjs-tasks/ninth/first.html"));
  }
};