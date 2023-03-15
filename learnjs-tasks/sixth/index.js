import open from "open";
import path from "path";

export default function(task_number) {
  if (task_number == 1) {
    open(path.resolve("learnjs-tasks/sixth/first.html"));
  }
  if (task_number == 2) {
    open(path.resolve("learnjs-tasks/sixth/second.html"));
  }
  if (task_number == 3) {
    open(path.resolve("learnjs-tasks/sixth/third.html"));
  }
  if (task_number == 4) {
    open(path.resolve("learnjs-tasks/sixth/fourth.html"));
  }
  if (task_number == 5) {
    open(path.resolve("learnjs-tasks/sixth/fifth.html"));
  }
};
