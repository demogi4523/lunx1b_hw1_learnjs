import open from "open";
import path from "path";

export default function(task_number) {
  console.log("Working!!!");
  if (task_number == 1) {
    open(path.resolve("learnjs-tasks/ninth/first.html"));
  }
  if (task_number == 2) {
    open(path.resolve("learnjs-tasks/thirteenth/second.html"));
  }
  if (task_number == 3) {
    open(path.resolve("learnjs-tasks/thirteenth/third.html"));
  }
  if (task_number == 4) {
    open(path.resolve("learnjs-tasks/thirteenth/fourth.html"));
  }
  if (task_number == 5) {
    open(path.resolve("learnjs-tasks/thirteenth/fifth.html"));
  }
  if (task_number == 6) {
    open(path.resolve("learnjs-tasks/thirteenth/sixth.html"));
  }
  if (task_number == 7) {
    open(path.resolve("learnjs-tasks/thirteenth/seventh.html"));
  }
};
