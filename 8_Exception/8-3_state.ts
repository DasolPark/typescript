{
  type NetworkErrorState = {
    result: 'fail'; // discriminated union
    reason: 'offline' | 'down' | 'timeout';
  }

  type SuccessState = {
    result: 'success';
  }

  type ResultState = SuccessState | NetworkErrorState;

  class NetworkClient {
    tryConnect(): ResultState {
      return {
        result: 'fail',
        reason: 'offline',
      }
    }
  }

  class UserService {
    constructor(private client: NetworkClient) { }

    login(): ResultState {
      return this.client.tryConnect();
    }
  }

  class App {
    constructor(private userService: UserService) { }
    run() {
      const loginResult = this.userService.login();

      if (loginResult.result === 'fail') {
        console.log(`login failed, the reason is ${loginResult.reason}`);
      } else {
        console.log('login success!');
      }
    };
  }

  const client = new NetworkClient();
  const service = new UserService(client);
  const app = new App(service);
  app.run();
}