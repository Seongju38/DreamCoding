// 1. Use strict
// added in ES5
// use this for Valina Javascript
'use strict';

/******************************************************************************************************************************/

// 2. Variable -> rw(read/write)
// let (added in ES6)
// var (don't ever use this!) : 값을 선언하기도 전에 사용할 수 있음 - var hoisting (move declaration from bottom to top)
//                              블록 안에서 선언해도 어디에서나 아무데서나 볼 수 있음 - has no block scope

// cf) 호이스팅 : 어디에 선언했는지에 상관없이 항상 제일 위로 선언을 끌어올려주는 것

let globalName = 'global name'; // 전역 번수 : 어디서나 사용하고 볼 수 있음 
                                // 최소한으로 사용하는 것이 좋음
{
let name = 'ellie';
console.log(name);
name = 'hello';
console.log(name);
console.log('블록 안 >>> ' + globalName);
} // 블록 안에 있는 것은 밖에서는 안 보임

console.log('블록 밖 >>> ' + name);
console.log('블록 밖 >>> ' + globalName);

/******************************************************************************************************************************/

// 3. Constant -> r(read only)
// favor immutable data type always for a few reasons : security / thread safety / reduce human mistakes
// 웬만해서는 const로 작성하는 것이 바람직함

const daysInWeek = 7;
const maxNumber = 5;

// 자바스크립트에서 변수를 선언할 때 mutable type의 let / Immutable type의 const 사용

// data type
// Immutable data types : 데이터 값 자체를 변경할 수 없음 - premitive types, frozen objects
// Mutable data types : 변경이 가능함 - all objects by default are mutable in JS

/******************************************************************************************************************************/

// 4. Variable types

// 메모리의 값이 저장되는 방법
// 1) primitive type : 값 자체가 메모리에 저장됨 
// single item (더이상 작은 단위로 나눌 수 없는 한 가지 아이템) : number, string, boolean, null, undefined, symbol
// 2) object type : 너무 커서 메모리에 한 번에 저장 될 수 없음 / 레퍼런스를 통해서 값을 가르키게 됨 -> 오브젝트가 가르키는 레퍼런스가 저장됨
// box container (single item들을 여러 개 묶어서 한 단위, 한 박스로 관리할 수 있도록 하는 것)
// function : first-class function (function도 다른 데이터 타입처럼 변수에 할당이 가능 -> 함수의 파라미터 인자로도 전달 가능 / 다른 function에서 다른 function을 리턴할 수 있음)

const count = 17; // integer
const size = 17.1; // decimal number
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

// number - special numeric values : infinity, -infinity, NaN
const infinity = 1/0;
console.log(infinity); // 양의 수를 0으로 나누면 무한대로 수렴
const negativeInfinity = -1/0;
console.log(negativeInfinity); // 음의 수를 0으로 나누면 마이너스 무한대로 수렴 
const nAn = 'not a number' / 2;
console.log(nAn); // 숫자가 아닌 경우

// bigInt (fairly new, don't use it yet)
const bigInt = 1234567890123456789012345678901234567890n; // over (-2**53) ~ (2**53)
console.log(`value: ${bigInt}, type: ${typeof bigInt}`);


// string
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello ' + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}!`; // template literals(string)
console.log(`value: ${helloBob}, type: ${typeof helloBob}`); // ` `를 사용하면 + 기호를 사용할 필요없이 적힌 그대로 바로 출력됨
console.log('value: ' + helloBob + ', type: ' + typeof helloBob);


// boolean
// false : 0, null, undefinde, NaN, ''
// true : any other value
const canRead = true;
const test = 3 < 1; // false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);


// null
let nothing = null; // empty 값을 지정
console.log(`value: ${nothing}, type: ${typeof nothing}`);


// undefined
let x; // 선언은 되었지만 값이 지정되어 있지 않음 : 빈 값인지, 값이 들어가 있는지 정해져 있는 않음
console.log(`value: ${x}, type: ${typeof x}`);


// symbol : create unique identifiers for objects (Map 등과 같은 다른 자료구조에서 고유한 식별자가 필요하거나 동시에 다발적으로 일어나는 코드에서 우선순위를 주고 싶을 때)
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2); // 동일한 string을 작성하였어도 다른 symbol로 만들어짐 : 고유한 식별자로 사용 가능

const gsymbol1 = Symbol.for('id');
const gsymbol2 = Symbol.for('id');
console.log(gsymbol1 === gsymbol2); // true

// console.log(`value: ${symbol1}, type: ${typeof symbol1}`); // error
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`); // symbol은 description으로 string으로 변환 후 출력해야함

/******************************************************************************************************************************/

// 5. Dynamic typing : dynamically typed language (변수를 선언할 때 어떤 타입인지 선언하지 않고 런타임할 때 할당된 값에 따라서 타입이 변경될 수 있음)
// 빠르게 프로토타입을 하고 싶을 때는 정말 유용하게 사용할 수 있지만, 다수의 프로젝트를 할 때는 이것이 단점이 될 수 있음
let text = 'hello';
console.log(text.charAt(0)); // h
console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
text = '7' + 5;
console.log(`value: ${text}, type: ${typeof text}`);
text = '8' / '2';
console.log(`value: ${text}, type: ${typeof text}`);
//console.log(text.charAt(0)); // error : text의 type이 원래는 string 이였지만, 중간에 number로 바꼈기에 생기는 오류

// 이러한 특성으로 뒷통수를 너무 많이 맞아서 나온 언어가 바로 TS(TypeScript) : JS 위에 올려진 언어이기 때문에 JS를 먼저 배우고 TS 배워도 됨
//                                      JS는 브라우저가 이해할 수 있는 언어로 실시간 확인이 가능하지만,
//                                      TS는 브라우저가 이해할 수 있는 JS로 트랜스컴파일을 해야하기 떄문에 실시간으로 보는 것이 어려움
