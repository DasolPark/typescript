# Basic
### https://www.typescriptlang.org/
### https://github.com/microsoft/TypeScript
```
npm install -g typescript
npm install -g ts-node 
```
- [x] cmd + , ➡️ search "strict null checks" ➡️ true

# Type

## Basic
#### undefined, null, unknown, any
- 보통 타입으로 사용하지 않는다
- string | undefined, number | null 은 있을 수 있다?
#### void, never
- void는 속한 집단의 약속에 따라 사용(e.g. print(): void)
- never는 error handling의 경우 error message를 서버에 보내고, throw Error('message')를 통해 끝낼 때 사용. 즉, return;까지 도달하지 않을 때 사용
#### object
- primitive를 제외한 모든 type이 object이므로 단순히 { key: value } 를 사용한다고 object type를 사용할 수 없음

## function
#### 문서화 효과를 볼 수 있음

#### optional parameter(TS feature)
- 선택적으로 파라미터를 넘길 수 있음(e.g. ``param?: string == string | undefined``)
- 하지만, ``param: string | undefined``는 위와 다름. 해당 파라미터 인풋을 생략할 수 없음
#### default parameter
#### rest parameter
- ``...args``를 이용해 어떤 수의 parameter도 array로 받을 수 있음

## Array

#### number[] VS Array<number>
- ``function(num: readonly number[])`` 🅾️
- ``function(num: readonly Array<number>)`` ❌

#### Tuple
- 서로 다른 타입의 배열을 선언할 수 있는 방법
- ``interface, type alias or class``로 대체하는 것을 권장
- 위 경우로 대체할 수 없는 경우, 잘 사용한다면 사용 가능

## Alias
- type alias
- **string literal types** (e.g. ``type name = 'name'``)

## Union
- OR(|) 개념, 실무에서 자주 쓰인다
- auto complete 효과 + 여러 type을 조합
- ``if ('response' in state)``처럼 type을 구분할 수도 있지만, 비추천
  ### Discriminated Union
  - type alias에 result와 같은 key를 추가하여 타입을 구분할 수 있도록 만듦
  - e.g. ``type SuccessState = { result: 'success', response: { body: string } }``
  - e.g. ``type FailState = { result: 'fail', reason: string }``
  - ``if (LoginState.result === 'success')``로 type 구분 가능

## Intersection
- And(&)
- 2가지 type을 선언했다면, 2가지 type의 모든 내용을 전달해줘야 한다

## Enum
- not recommended
- 웬만하면 union type으로 대체할 것(아주 특별한 경우에는 사용 가능)
- Enum type으로 선언된 변수에 해당 type이 아닌 **어떤 값을 할당해도 오류가 발생하지 않는다**

## Type Inference
- TypeScript는 당연하다고 생각하는 것에 대한 타입을 추론해준다
- 당연하고 명백한 변수에는 추론을 사용해도 되지만, function에서는 타입을 작성해주는 것이 좋다(문서화 효과)
- 또한, 팀의 코딩 스타일 가이드에 따라 달라질 수 있다

## Type Assertions
- !, 정말 확신할 때 사용할 수 있다. 하지만 추천하지 않는다