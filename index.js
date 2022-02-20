"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const name = "Nicolas", age = 24, gender = "male";
// ?를 붙여서 파라미터인 gender가 선택적이라는 것을 의미해줌
const sayHi = (name, age, gender) => {
    console.log(`Hello ${name}, you are ${age}, you are a ${gender}`);
};
sayHi(name, age);
//# sourceMappingURL=index.js.map