import open from "open";
import path from "path";

export default function(task_number) {
  if (task_number == 1) {
    console.log("Нет задач");
  }
  if (task_number == 2) {
    open(path.resolve("learnjs-tasks/eleventh/second.html"));
  }
  if (task_number == 3) {
    open(path.resolve("learnjs-tasks/eleventh/third.html"));
  }
  if (task_number == 4) {
    open(path.resolve("learnjs-tasks/eleventh/fourth.html"));
  }
  if (task_number == 5) {
    console.log("Нет задач");
  }
  if (task_number == 6) {
    console.log("Нет задач");
  }
  if (task_number == 7) {
    console.log("Нет задач");
  }
  if (task_number == 8) {
    open(path.resolve("learnjs-tasks/eleventh/eigth.html"));
  }
};
