{
  function checkNotNullBad(arg: number | null): number {
    if (arg === null) {
      throw new Error('not valid number!');
    }
    return arg;
  }
  const firstResult = checkNotNullBad(123);
  console.log(firstResult);
  // checkNotNullBad(null);

  function checkNotNullAnyBad(arg: any | null): any {
    if (arg === null) {
      throw new Error('not valid number!');
    }
    return arg;
  }
  const secondResult = checkNotNullAnyBad(123); // not secure
  console.log(secondResult);

  function checkNotNull<T>(arg: T | null): T {
    if (arg === null) {
      throw new Error('not valid number!');
    }
    return arg;
  }
  const thirdResult = checkNotNull(123);
  console.log(thirdResult);
  const fourthResult = checkNotNull('hi');
  console.log(fourthResult);
  const fifthResult: boolean = checkNotNull(true);
  console.log(fifthResult);
}