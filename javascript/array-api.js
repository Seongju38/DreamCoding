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

  // const result = array.splice(0, 2); // array 자체를 변형
  // console.log(result);
  // console.log(array);

  const result = array.slice(2, 5); // array 에서 원하는 부분만 받아와서 쓰는 경우 사용
  console.log(result);
  console.log(array);
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
  // for (let i = 0; i < students.length; i++) {
  //   if (students[i].score === 90) {
  //     console.log(students[i]);
  //   }
  // }

  // const result = students.find(function(student, index) {
  //   console.log(student, index);
  // });
  const result = students.find((student) => student.score === 90);
  console.log(result);
}

// Q6. make an array of enrolled students
{
  // for (let i = 0; i < students.length; i++) {
  //   if (students[i].enrolled) {
  //     console.log(students[i]);
  //   }
  // }
  // 출력값이 배열로 만들어지지 않음

  const result = students.filter((student) => student.enrolled);
  console.log(result);
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
  // let temp = [];
  // for (let i = 0; i < students.length; i++) {
  //   temp[i] = students[i].score;
  // }
  // console.log(temp);

  const result = students.map((student) => student.score);
  console.log(result);
  // map : 배열 안에 들어있는 각각의 요소들을 원하는 함수로 다른 방식의 데이터를 만들고 싶을 때 유용
}

// Q8. check if there is a student with the score lower than 50
{
  // const result0 = students.includes((student) => student.score < 50);
  // console.log(result0);
  // 결과값 false 나옴
  // includes는 배열에 특정 요소가 포함되어 있는지 여부를 결정하고 적절하게 true 또는 false를 반환하는 것임

  const result = students.some((student) => student.score < 50); // some : 조건 중 하나 만족일 경우
                                                                 // 현 문제에서 더 적합
  console.log(result);

  const result2 = !students.every((student) => student.score >= 50); // every : 모든 조건 만족일 경우
  console.log(result2);
}

// Q9. compute students' average score
{
  // let sum = 0, average = 0;
  // for (let i = 0; i < students.length; i++) {
  //   sum += students[i].score;
  // }
  // average = sum / students.length;
  // console.log(average);

  // const result = students.reduce((prev, curr) => {
  //   console.log('----------');
  //   console.log(prev);
  //   console.log(curr);
  //   return prev + curr.score;
  // }, 0);
  // console.log(result);
  // reduce : 배열에 있는 모든 요소들을 누적할 때 사용
  // reduceRight : 거꾸로된 순서로 누적할 때 사용
  const result = students.reduce((prev, curr) => prev + curr.score, 0);
  console.log(result / students.length);
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
  const result = students
    .map((student) => student.score)
    .filter((score) => score >= 50)
    .join();
  console.log(result);
  // api들끼리 묶어서 사용 가능
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
  const result = students
    .map((student) => student.score)
    .sort() // default : 오름차순
    // .sort((a, b) => a - b) // 오름차순
    // .sort((a, b) => b - a) // 내림차순
    .join();
  console.log(result);
}


// 사용한 array-api
// join()
// split()
// reverse()
// slice()
// find()
// filter()
// map()
// some()
// every()
// reduce()
// sort()
