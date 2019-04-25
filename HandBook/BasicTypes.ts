// 타입 명시는 이렇게

// Boolean
let myBool: boolean = true;

// Number
let myDecimal: number = 6;
let myHex: number = 0xf00d;
let myBinary: number = 0b1010;
let myOctal: number = 0o744;

// String
let myString: string = "Hello World";

// 백틱도 가능해요!
let myTempNumber: number = 6
let myTemplateString: string = `My age is ${myTempNumber}`

// Array
let myArray: number[] = [1,2,3]
let myArrayGeneric: Array<string> = ["1","2","3"]

// Tuple 기존 튜플의 레인지를 벗어난다면 타입의 유니온으로 판단됩니다.
let myTuple: [string,number] = ["1",1]
console.log(myTuple[0].substr(0))
console.log(myTuple[1].valueOf())

// Enum
enum Color {Red , Green , Blue}
let c: Color = Color.Green

console.log(c)

// Enum 시작 인덱스 조정
enum IColor {Red = 1 , Green , Blue}
let Ic: IColor = IColor.Green

console.log(c)

// Any : 타입 체크를 통과 or 예측하기 어려운 경우
let myAnyVar: any = "anyVar"
myAnyVar = false

// Void : 함수 리턴값이 없다.
function warnUser(): void {
    console.log("유저에게 경고")
}

// Never : Unreachable end point
function error(message: string): never {
    throw new Error(message);
}

function fail(message: string): never{
    return error(message)
}

function infiniteLoop(): never{
    while(true){

    }
}

// Type Assertions : 나는 이미 프로그램의 결과와 타입을 알고 있습니다.
let strLength: number = (<string>"abcd").length
console.log(strLength)



