// JSON
// JavaScript Object Notation

// 1. Object to JSON
// stringify(obj)
let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(['apple', 'banana']);
console.log(json);


const rabbit = {
  name: 'tori',
  color: 'white',
  size: null,
  birthDate: new Date(),

  // symbol: Symbol("id"), // javascript에만 있는 특별한 데이터도 json에 포함되지 않음
  jump: () => {
    console.log(`${name} can jump!`);
  }, // 함수는 데이터가 아니기 때문에 json에 포함되지 않음
};

json = JSON.stringify(rabbit);
console.log(json);

json = JSON.stringify(rabbit, ['name', 'color', 'size']); // 원하는 property만 골라서 json으로 변환 가능
console.log(json);

json = JSON.stringify(rabbit, (key, value) => {
  console.log(`key: ${key}, value: ${value}`);
  return value;
});

json = JSON.stringify(rabbit, (key, value) => {
  console.log(`key: ${key}, value: ${value}`);
  return key === 'name' ? 'ellie' : value;
});


console.clear();

// 2. JSON to Object
// parse(json)
json = JSON.stringify(rabbit);
console.log(json);
// const obj = JSON.parse(json); // 1.
const obj = JSON.parse(json, (key, value) => {
  console.log(`key: ${key}, value: ${value}`);
  return key === 'birthDate' ? new Date(value) : value;
}) // 2.
console.log(obj);
rabbit.jump();
// obj.jump(); // error : object를 json으로 변환할 때 함수는 변환되지 않으므로
               //         변환된 json을 object로 변환한다고 하더라고 함수는 존재하지 않음
console.log(rabbit.birthDate.getDate()); // 25
console.log(obj.birthDate.getDate()); // 1. error : birthData는 스트링임 2. 위와 똑같은 값 출력
console.log(obj.birthDate);

// 유용한 사이트
// JSON Diff
// JSON Beautifier
// JSON Parser
// JSON Validator