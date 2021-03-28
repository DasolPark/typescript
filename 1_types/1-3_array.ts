{
  // Array
  const fruits: string[] = ['🍎', '🍌'];
  const scores: Array<number> = [1, 2, 3, 4, 5];
  function printArray(fruits: readonly string[]) {
    // fruits.push('a');
  }

  // Tuple -> interface, type alias, class
  let student: [string, number];
  student = ['name', 123];
  student[0] // name
  student[1] // 123
  const [name, age] = student;
}