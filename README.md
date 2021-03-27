# Basic
### https://www.typescriptlang.org/
### https://github.com/microsoft/TypeScript
```
npm install -g typescript
npm install -g ts-node 
```
- [x] cmd + , ➡️ search "strict null checks" ➡️ true

# Type
#### undefined, null, unknown, any
- 보통 타입으로 사용하지 않는다
- string | undefined, number | null 은 있을 수 있다?
#### void, never
- void는 속한 집단의 약속에 따라 사용(e.g. print(): void)
- never는 error handling의 경우 error message를 서버에 보내고, throw Error('message')를 통해 끝낼 때 사용. 즉, return;까지 도달하지 않을 때 사용
#### object
- primitive를 제외한 모든 type이 object이므로 단순히 { key: value } 를 사용한다고 object type를 사용할 수 없음

### function
#### 문서화 효과를 볼 수 있음

#### optional parameter(TS feature)
- 선택적으로 파라미터를 넘길 수 있음(e.g. ``param?: string == string | undefined``)
- 하지만, ``param: string | undefined``는 위와 다름. 해당 파라미터 인풋을 생략할 수 없음
#### default parameter
#### rest parameter
- ``...args``를 이용해 어떤 수의 parameter도 array로 받을 수 있음
