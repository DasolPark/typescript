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

# OOP(Object Oriented Programming)
- 실제 사물(object)을 토대로 프로그래밍하는 기법

## static
- instance(object)가 생성될 때마다 함께 생성되지 않고, class level로 선언되어 단 한 번만 생성된다
- ClassName.staticVariable 로 접근 가능

## public, private, protected
- public은 말 그대로 어디서든 접근 가능
- private은 해당 instance내에서만 접근 가능
- protected는 해당 instance + 해당 class를 상속한 class에서도 접근 가능

## constructor
- parameter에 private 같은 접근지정자를 입력해주면 따로 위에 멤버변수를 선언해주지 않아도 된다(변수 선언과 동시에 저장된다)

## getter & setter
- constructor에서 멤버변수값 저장을 끝낸 후 instance를 통해 멤버변수에 저장하여 값을 변경하면 반영되지 않음(3-OOP/3-3_encapsulation User class 참고)
- 따라서 변경된 값을 미리 세팅하여 가져오고 싶을 경우 getter를 사용할 수 있음
- 멤버변수를 변경하고자 하는데 비즈니스 로직이 필요하다면 setter를 사용할 수 있음

## Abstraction
- interface를 simple하게 만들어서 사용하는 사람이 간편하게 사용할 수 있도록 도와줌
- private을 이용한 정보 은닉을 통해서도 추상화 가능(interface가 없는 언어의 경우), 필요한 함수만 노출
- **interface**는 나랑 의사소통하려면 이런이런 규약이 필요해! (계약서와 같은 존재)
- interface name에 I(prefix)를 붙이거나, class name에 Impl(postfix)을 붙여주기도 한다
- 하지만, interface name과 다르게 class name을 간단한 이름으로 만들어줘도 된다
- 특정 interface만 이용해서 복잡한 class를 간단하게 이용할 수 있도록 만들 수 있다

## Inheritance
- 상속을 통해 기존 class를 재사용할 수 있다
- extends className을 통해 상속하며, super를 통해 부모 class에 접근할 수 있다
- 또한, method overrinding or overloading이 가능하다.

## Polymorphism
- parent class에 따라 다양한 instance를 생성할 수 있음
- 가장 최상위 조상을 type으로 이용하면 이하 모든 class를 담을 수 있음
- e.g. 하나의 interface를 이용해 모두 다른 기능을 가지고 있는 class를 만들 수 있음
- 그리고 이 안에서 공통 기능을 만들어 모든 class에서 사용할 수 있도록 만들 수 있음

## Composition
- 여러가지 class를 상속하고 싶지만, 단 하나의 class만 상속할 수 있다(상속의 단점)
- favor COMPOSITION over inheritance
- 필요한 class들을 만들어서 레고처럼 조립해 사용
- 다른 구성요소와 밀접한 연관을 맺고 있어서 제약사항이 존재함(composition의 단점)
- composition ➡️ interface: coupling ➡️ decoupling
- decoupling을 통해 다형성 class를 만드는 것보다 하나의 class로 여러 재료를 혼합할 수 있는 object를 만들 수 있다

## Abstract
- "abstract" keyword를 class 앞에 붙여 사용(abstract가 적용된 class는 instance를 생성할 수 없다)
- 공통적으로 사용되는 fields or method 모두 구현 가능
- 하지만 매번 달라질 수 있는 method는 "abstract" keyword를 이용해 method 선언만 가능(기능 구현 불가)
- 매번 달라질 수 있는 method지만 필수적으로 들어가야하는 내용을 체크해줄 수 있다
- 매우 수직적으로 깊은 상속보다는 composition을 추천(상황별로 다름)

## OOP Challenge(STACK)
- array 사용 없이 구현할 것
- interface, type alias, class 이용

# Generic
- 사용하는 사람이 타입을 결정할 수 있고(재사용성⬆️), 유연하고, 타입을 보장받을 수 있다

## Generic function
- `function<G>(arg: G): G`

## Generic class
- `class<G, T>, interface<G, T>`
- `class className<T> implements interfaceName<T> {}`

## Generic Constraints
- 어떤 타입이든 받겠다고 제네릭을 사용하면 본래 타입을 잃는 경우가 발생
- 따라서, 해당 타입을 잃지 않도록 정확히 타입을 지정해주는 것이 좋다
- e.g. `function pay<T extends Employee>(employee: T):T {}` Employee interface를 확장한 Type만 가능하다는 뜻
- e.g. `function getValue<T, K extends keyof T>(obj: T, key: K): T[K] {}` 해당 object에 있는 key만 가능하다는 뜻

## Generic Challenge(STACK)

# Level up with API and open source
- 해당 built-in function이 선언된 곳을 찾아가 코멘트로 기능 파악하기(command + click)

## Open Source
- E.g. https://github.com/microsoft/vscode
- 위와 같은 오픈소스 프로젝트를 통해 contribution이 가능

# Exception(error handling)
- Exception(예측 불가) VS Error State(예측 가능 e.g. 404) 구분 필요!

## Try/Catch/Finally
- `try { 에러가 발생할 가능성이 있는 코드만 }`
- `catch { 에러가 발생했을 경우 구체적으로 안내 }`
- `finally { 에러가 나든 안나든 처리해줘야할 코드 작성 }`, try or catch에서 return 되어도 무조건 실행된다

## Elegant error handling
- 에러를 처리하기 위한 구문을 작성할 것이라면, 내가 그 에러를 처리해줄 수 있는 곳에 넣어야한다

## Error State
- exception은 정말 예상치 못한 에러를 처리할 때 사용 권장
- discriminated union type을 이용해 error state를 만들어 예상 가능한 에러를 처리해주는 것이 가장 이상적

# Core of TypeScript(advanced types)
Conditional Types, **Mapped Types**, **utility Types** 강력!

## Type(alias) VS Interface
**기술적(구현 사항) 측면**
- interface는 결합이 가능(따로 따로 써도 하나로 인식) - 해당 기능이 필요한 사람에게 좋다
- interface는 union type을 사용할 수 없다
- type은 computed properties를 사용할 수 있다

**개념적 측면**
- 구현될 규격사항을 나타낼 때는 **interface**
- 데이터가 담겨 있는 타입을 나타낼 때는 **type(alias)**

## Utility Types
- **can transform type**
- 일반적으로 생각할 수 있는 Mapped Type들은 이미 선언되어 있기 때문에 우리는 그저 사용하기만 하면 된다
- `Partial<T>, Required<T>` and so on...
- Readonly, Nullable이 많이 쓰인다
  ### Index Type
  - object의 값을 dot notation이 아닌 ['key']로 불러오는 것과 같은 방법으로 사용
  - E.g. `type Person { name: string; } type Name = Person['name']`을 사용하면 Person의 name과 같은 type을 사용 가능

  ### Mapped Type
  - `for...in`처럼 type을 mapped 시킨다
  - E.g. `type Optional<T> = { [P in keyof T]?: T[P] }`

  ### Conditional Type
  - E.g. `type Check<T> = T extends string ? 'string' : 'number'`

# JavaScript Core for learning TypeScript
JavaScript is proto-based programming language
## What is Prototype?
- a style of OOP
- behavior reuse(inheritance) by reusing existing objects that serve as prototype