import open from "open";
import path from "path";

export default function(task_number) {
  if (task_number == 1) {
    open(path.resolve("learnjs-tasks/fourth/first.html"));
  }
  if (task_number == 2) {
    open(path.resolve("learnjs-tasks/fourth/second.html"));
  }
  if (task_number == 3) {
    open(path.resolve("learnjs-tasks/fourth/third.html"));
  }
};
