import { capitalize as first, second, words_count as third, unique_word_count as fourth } from "./first.js";


const cli_args = process.argv;

switch (cli_args[2]) {
  case 1:
    {
      run_first();
      break;
    }
  default:
  {
    run_first();
    break;
  }
}


function run_first() {
  switch(cli_args[3]) {
    case 1:
      {
        first();
        break;
      }
    case 2:
      {
        second();
        break;
      }
    case 3:
      {
        third();
        break;
      }
    case 4:
      {
        fourth();
        break;
      }
    default:
      {
        first();
        second();
        third();
        fourth();
        break;
      }
  }
}
