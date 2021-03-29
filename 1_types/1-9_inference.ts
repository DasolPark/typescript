{
  /**
   * Type Inference
   */

  let text = 'hello';
  // error
  // text = 1;

  function print(message = 'hello') {
    console.log(message);
  }
  print('hello');
  // error
  // print(1);

  // output must be number(inference)
  function add(x: number, y: number) {
    return x + y;
  }
  // result must be number(inference)
  const result = add(1, 2);
}