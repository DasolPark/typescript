{
  /** ✨
   * Union Types: OR
   */
  type Direction = 'left' | 'right' | 'up' | 'down';
  function move(direction: Direction) {
    console.log(direction);
  }
  move('down'); // auto complete

  type TileSize = 8 | 16 | 32;
  const tile: TileSize = 16;

  // function: login -> success, fail
  type SuccessState = {
    response: {
      body: string;
    };
  };

  type FailState = {
    reason: string;
  };

  type LoginState = SuccessState | FailState;

  function logIn(): LoginState {
    return {
      response: {
        body: 'logged in!',
      },
    };
  };

  // Quiz🙋🏻
  // printLoginState(state)
  // success -> 🎉 body
  // fail -> 😭 reason
  function printLoginStateWithKey(state: LoginState): void {
    // but not recommended
    if ('response' in state) {
      console.log(`🎉 ${state.response.body}`);
    } else {
      console.log(`😭 ${state.reason}`);
    }
  }

  printLoginStateWithKey(logIn());
}