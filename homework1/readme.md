## Дедлайн 
1 марта 23:59

## Условия

1. Написать модуль, который будет включать в себя следующие методы.

    1.1. Преобразование строки к нижнему регистру, но первая буква большая. "Abscd"

    1.2. Преобразование строки с целью правильно расстановки пробелов. "Вот пример строки,в которой     используются знаки препинания.После знаков должны стоять пробелы , а перед знаками их быть не должно .    Если есть лишние подряд идущие пробелы, они должны быть устранены." =>
    "Вот пример строки,в которой используются знаки препинания. После знаков должны стоять пробелы, а перед знаками их быть не должно. Если есть лишние подряд идущие пробелы, они должны быть устранены."

    1.3. Посдчитывающие кол-во слов в строке.

    1.4. Подсчитывающий, уникальные слова. "Текст, в котором слово текст несколько раз встречается и слово тоже" - в ответе, что "слово - 2 раза, текст - 2 раза, в - 1 раз, несколько - 1 раз". Самостоятельно придумать наиболее удачную структуру данных для ответа.

2. Написать модуль, который способен выполнять операции с числами любой длины. 4 метода для сложения, умножения, вычитания и деления.

3. Создать класс данных "Товар"
   - С полями
   - Название
   - Цена
   - Количество
   - Описание

Наполнить массив объектами такого класса.

Написать метод, который получает строку вида
"name-contains-fd&price-=2-&quantity->5&description-ends-abc"
"name-starts-fd&quantity=5"

На выходе возвращает массив, только с подходящими объектами
возможны (contains, starts, ends для строковых и <, =, >, <=, >= для числовых)

---

## Уточнение №1

в этой строке примере пропущен знак был
"name-starts-fd&quantity=5"
Должно быть так:
"name-starts-fd&quantity-=5"

---

## Уточнение №2

Уточнения по ДЗ

- "name-contains-fd&price-=2&quantity->5&description-ends-abc" - лишний символ "-" в строке был
- Номера глав можно увидеть по ссылке https://learn.javascript.ru/js "Введение" - первая глава
- Вместо alert можно использовать console.log()