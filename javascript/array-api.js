// Q1. make a string out of an array
{
  const fruits = ['apple', 'banana', 'orange'];

  // for (let i = 0; i < fruits.length; i++) {
  //   console.log(fruits[i]);
  // }
  // 원소 하나하나만 출력됨

  const result = fruits.join('|');
  console.log(result);
}

// Q2. make an array out of a string
{
  const fruits = '🍎, 🥝, 🍌, 🍒';

  // for (let i = 0; i < fruits.length; i++) {
  //   console.log('[' + fruits[i] + ']');
  // }
  // 출력값 완전 이상하게 나옴

  const result = fruits.split(',', 2); // split에 구분자는 꼭 있어야 함
                                       //   없으면 한 인덱스 안에 모든 게 다 들어가 있게 됨
  console.log(result);
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
  const array = [1, 2, 3, 4, 5];

  // let temp = [];
  // for (let i = 0; i < array.length; i++) {
  //   temp[array.length - 1 - i] = array[i];
  // }
  // console.log(temp);

  const result = array.reverse(); // array 배열 자체를 변화 시킴 : 얕은 복사
  console.log(result);
  console.log(array);
}

// Q4. make new array without the first two elements
{
  const array = [1, 2, 3, 4, 5];

  let temp = [];
  for (let i )
}

class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}
const students = [
  new Student('A', 29, true, 45),
  new Student('B', 28, false, 80),
  new Student('C', 30, true, 90),
  new Student('D', 40, false, 66),
  new Student('E', 18, true, 88),
];

// Q5. find a student with the score 90
{
}

// Q6. make an array of enrolled students
{
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
}

// Q8. check if there is a student with the score lower than 50
{
}

// Q9. compute students' average score
{
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
}