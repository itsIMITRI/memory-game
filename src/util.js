const pairArray = [
  { id: 1, val: "a", show: true, found: false },
  { id: 2, val: "a", show: true, found: false },
  { id: 3, val: "b", show: true, found: false },
  { id: 4, val: "b", show: true, found: false },
  { id: 5, val: "c", show: true, found: false },
  { id: 6, val: "c", show: true, found: false },
  { id: 7, val: "d", show: true, found: false },
  { id: 8, val: "d", show: true, found: false },
  { id: 9, val: "e", show: true, found: false },
  { id: 10, val: "e", show: true, found: false },
  { id: 11, val: "f", show: true, found: false },
  { id: 12, val: "f", show: true, found: false },
]
  .map((value) => ({ value, sort: Math.random() }))
  .sort((a, b) => a.sort - b.sort)
  .map(({ value }) => value);

export { pairArray };
