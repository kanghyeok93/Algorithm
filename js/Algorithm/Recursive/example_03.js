// 피보나치 수 계산하기 (Fn = Fn-1 + Fn-2)

// 반복문 사용하기
const fib_02 = (number) => {
  let a = 1;
  let b = 1;

  for (let i = 3; i <= number; i++) {
    let c = a + b;
    a = b;
    b = c;
  }
  return b;
}
console.log('fib_02 ===> ', fib_02(7));

// 재귀 사용하기
const fib_01 = (number) => {
  return (number > 2) ? fib_01(number - 1) + fib_01(number - 2) : 1
}
console.log('fib_01 ===> ', fib_01(3));



