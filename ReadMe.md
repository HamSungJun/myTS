# myTS

- 프로그래밍 언어론 수업 들으면서 정적 타입의 장점을 많이 느끼게 되었음 (From [ocaml]([http://ocaml.org/]))

- 기존 JavaScript가 RunTime 기반이지만 한번 해보기로 ... MS가 밀어준다잖아 ...

## How to Install

```
    npm install -g typescript
```

## How to Complie

```
    tsc *.ts
```

<hr>

## TS in 5 Minutes

**소스 작성**

```typescript

    //greeter.js

    function greeter(person) {
        return "Hello, " + person;
    }

    let user = "Sung Jun";

    document.body.innerHTML = greeter(user);

```

**소스 컴파일**

```
    tsc greeter.ts => 같은 경로상에 트랜스파일링 되어 greeter.js로 생성됨.
```

**타입 명시**

```typescript

    function greeter(person) {
        return "Hello, " + person;
    }
    
    function greeter(person: string) {
        return "Hello, " + person;
    }

```

**타입 오류**

```typescript

    function greeter(person) {
        return "Hello, " + person;
    }

    let user = [1,2,3]

    document.body.innerHTML = greeter(user);

    => error TS2345: Argument of type 'number[]' is not assignable to parameter of type 'string'.

```

**인터페이스**

```typescript

    interface Person{
        firstName : string;
        lastName : string;
    }

    function greeter(person: Person){
        return "Hello " + person.firstName + " " + person.lastName;
    }

    let user = {
        firstName : "Ham",
        lastName : "Sung Jun"
    }

    document.body.innerHTML = greeter(user);

```

**클래스**

```typescript

        class Student {
        fullName: string;
        constructor(public firstName: string, public middleInitial: string, public lastName: string) {
            this.fullName = firstName + " " + middleInitial + " " + lastName;
        }
    }

    interface Person {
        firstName: string;
        lastName: string;
    }

    function greeter(person: Person) {
        return "Hello, " + person.firstName + " " + person.lastName;
    }

    let user = new Student("Jane", "M.", "User");

    document.body.innerHTML = greeter(user);

```


