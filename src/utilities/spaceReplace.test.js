import { spaceReplace } from "./spaceReplace.js";

//Question 2
test("that space is replaced with -", () => {
    expect(spaceReplace("Glenn Larsen")).toBe("Glenn-Larsen")
});