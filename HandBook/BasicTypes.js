// 타입 명시는 이렇게
// Boolean
var myBool = true;
// Number
var myDecimal = 6;
var myHex = 0xf00d;
var myBinary = 10;
var myOctal = 484;
// String
var myString = "Hello World";
// 백틱도 가능해요!
var myTempNumber = 6;
var myTemplateString = "My age is " + myTempNumber;
// Array
var myArray = [1, 2, 3];
var myArrayGeneric = ["1", "2", "3"];
// Tuple 기존 튜플의 레인지를 벗어난다면 타입의 유니온으로 판단됩니다.
var myTuple = ["1", 1];
console.log(myTuple[0].substr(0));
console.log(myTuple[1].valueOf());
// Enum
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var c = Color.Green;
console.log(c);
// Enum 시작 인덱스 조정
var IColor;
(function (IColor) {
    IColor[IColor["Red"] = 1] = "Red";
    IColor[IColor["Green"] = 2] = "Green";
    IColor[IColor["Blue"] = 3] = "Blue";
})(IColor || (IColor = {}));
var Ic = IColor.Green;
console.log(c);
// Any : 타입 체크를 통과 or 예측하기 어려운 경우
var myAnyVar = "anyVar";
myAnyVar = false;
// Void : 함수 리턴값이 없다.
function warnUser() {
    console.log("유저에게 경고");
}
// Never : Unreachable end point
function error(message) {
    throw new Error(message);
}
function fail(message) {
    return error(message);
}
function infiniteLoop() {
    while (true) {
    }
}
// Type Assertions : 나는 이미 프로그램의 결과와 타입을 알고 있습니다.
var strLength = "abcd".length;
console.log(strLength);
