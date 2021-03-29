{
  /**
   * Type Assertions 💩
   */

  // when we work with JS
  function jsStrFunc(): any {
    // return 'hello';
    return 1;
  }
  const result = jsStrFunc();
  console.log((result as string).length); // type cast
  console.log((<string>result).length);

  const wrong: any = 5;
  console.log((wrong as Array<number>).push(1)); // 😱 app dies

  function findNumbers(): number[] | undefined {
    return undefined;
  }
  const numbers = findNumbers(); // findNumbers()!;
  numbers!.push(2); // 😱 oppsite of optional parameter

  const button = document.querySelector('class')!;
  // if (button) {
  //   button.nodeValue;
  // }
}