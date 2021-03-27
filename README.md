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