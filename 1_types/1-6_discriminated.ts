{
  // function: login -> success, fail
  type SuccessState = {
    result: 'success';
    response: {
      body: string;
    };
  };

  type FailState = {
    result: 'fail';
    reason: string;
  };

  type LoginState = SuccessState | FailState;

  function login(): LoginState {
    return {
      result: 'success',
      response: {
        body: 'logged in!',
      },
    };
  };

  // Quizðð»
  // printLoginState(state)
  // success -> ð body
  // fail -> ð­ reason
  function printLoginState(state: LoginState): void {
    if (state.result === 'success') {
      console.log(`ð ${state.response.body}`);
    } else {
      console.log(`ð­ ${state.reason}`);
    }
  }

  printLoginState(login());
}