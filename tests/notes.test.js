const add = (a, b) => a + b;

test("adds two numbers", () => {
  const res = add(1, 2);

  expect(res).toBe(3);
});
