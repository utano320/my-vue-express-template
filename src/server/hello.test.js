import hello from "./hello";

test("it says hello", () => {
  expect(hello()).toBe("Hello from babel");
});
