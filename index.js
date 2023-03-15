import first from "./learnjs-tasks/first/index.js";
import fourth from "./learnjs-tasks/fourth/index.js";
import fifth from "./learnjs-tasks/fifth/index.js";
import sixth from "./learnjs-tasks/sixth/index.js";
import ninth from "./learnjs-tasks/ninth/index.js";
import thirteenth from "./learnjs-tasks/thirteenth/index.js";

const args = [];
process.argv.forEach(function (val) {
  args.push(val);
});

if (args[2] == 1) {
  first(args[3]);
}
if (args[2] == 2) {
  console.log("Нет задач");
  console.log("Ссылка на урок: https://learn.javascript.ru/structure");
}
if (args[2] == 3) {
  console.log("Нет задач");
  console.log("Ссылка на урок: https://learn.javascript.ru/strict-mode");
}
if (args[2] == 4) {
  fourth(args[3]);
}
if (args[2] == 5) {
  fifth(args[3]);
}
if (args[2] == 6) {
  sixth(args[3]);
}
if (args[2] == 7) {
  console.log("Не задано!!!");
}
if (args[2] == 8) {
  console.log("Не задано!!!");
}
if (args[2] == 9) {
  ninth(args[3]);
}
if (args[2] == 10) {
  console.log("Не задано!!!");
}
if (args[2] == 11) {
  console.log("Не задано!!!");
}
if (args[2] == 12) {
  console.log("Не задано!!!");
}
if (args[2] == 13) {
  thirteenth(args[3]);
}
