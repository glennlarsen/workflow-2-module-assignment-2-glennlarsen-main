import { returnPerson } from "./returnPerson.js";

//Question 3

test("returnPerson function return a name and age object", () => {
    expect(returnPerson("Glenn", 31)).toStrictEqual({name: "Glenn" , age: 31})
});