import open from "open";
import path from "path";

export default function(task_number) {
  if (task_number == 1) {
    open(path.resolve("learnjs-tasks/sixth/first.html"));
  }
  if (task_number == 2) {
    console.log("Нет задач");
  }
  if (task_number == 3) {
    open(path.resolve("learnjs-tasks/sixth/third.html"));
  }
  if (task_number == 4) {
    console.log("Нет задач");
  }
  if (task_number == 5) {
    console.log("Нет задач");
  }
  if (task_number == 6) {
    open(path.resolve("learnjs-tasks/sixth/sixth.html"));
  }
  if (task_number == 7) {
    console.log("Нет задач");  }
  if (task_number == 8) {
    open(path.resolve("learnjs-tasks/sixth/eigth.html"));
  }
  if (task_number == 9) {
    open(path.resolve("learnjs-tasks/sixth/ninth.html"));
  }
  if (task_number == 10) {
    open(path.resolve("learnjs-tasks/sixth/tenth.html"));
  }
  if (task_number == 11) {
    console.log("Нет задач");
  }
};
