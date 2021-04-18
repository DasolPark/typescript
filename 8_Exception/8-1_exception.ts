{
  // Java: Exception
  // JavaScript: Error
  // const array = new Array(100000000000000000);

  // Error(Exception) Handling: try -> catch -> finally

  function readFile(fileName: string): string {
    if (fileName === 'not exist') {
      throw new Error(`file not exist!`);
    }

    return fileName;
  }

  function closeFile(fileName: string) {
    //
  }

  function run() {
    const fileName = 'not exist';

    try {
      console.log(readFile(fileName));
    } catch (error) {
      console.log(`'${error}' error catched`);
      return;
    } finally {
      closeFile(fileName);
      console.log('finally: file closed!');
    }
  }
  run();
}