// Преобразование строки к нижнему регистру, но первая буква большая. "Abscd"

/**
 * Just capitlize input string
 * @param {string} s - input string
 */
export function capitalize(s) {
  const firstSymbol = s.charAt(0);
  const restString = s.slice(1);

  return firstSymbol.toUpperCase() + restString.toLowerCase();
}

// Преобразование строки с целью правильно расстановки пробелов.
// "Вот пример строки,в которой используются знаки препинания.
// После знаков должны стоять пробелы , а перед знаками их быть не должно .
// Если есть лишние подряд идущие пробелы, они должны быть устранены."
//  => "Вот пример строки,в которой используются знаки препинания.
// После знаков должны стоять пробелы, а перед знаками их быть не должно.
// Если есть лишние подряд идущие пробелы, они должны быть устранены."

/**
 *                                      // TODO: add funcion description
 * @param {string} text - input string
 */
export function second(text) {
  let tokens = text.split(' ');
  tokens = tokens.filter(token => token.length > 0);

  // TODO: дописать
}

// Посдчитывающие кол-во слов в строке.

/**
 * Just count words amount in the input string
 * @param {string} s - input string
 */
export function words_count(s) {
  const word_pattern = /\w+/i; // word regexp
  const words = s.matchAll(word_pattern);
  console.log(words);

  return words.length;
}

// Подсчитывающий, уникальные слова.
// "Текст, в котором слово текст несколько раз встречается и слово тоже" - в ответе,
// что "слово - 2 раза, текст - 2 раза, в - 1 раз, несколько - 1 раз".
// Самостоятельно придумать наиболее удачную структуру данных для ответа.

/**
 * Just count words amount in the input string
 * @param {string} text - input string
 * @returns {object}
 */
export function get_unique_words(text, ignoreCase=True) {
  const word_pattern = /\w+/i; // word regexp
  const words = text.matchAll(word_pattern);
  const answer = {};
  // const internal_struct = {};
  for (let index = 0; index < words.length; index += 1) {
    const word = words[index];
    const internal_form = word.toUpperCase();
    if (answer[internal_form] != undefined) {
      answer[internal_form] = 1;
    } else {
      answer[internal_form] += 1;
    }
  }
  console.log(answer);
  return answer;
}
