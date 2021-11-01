// 주어진 숫자까지의 모든 숫자 더하기

// 반복문 사용하기
const sumTo_01 = (number) => {
  let sum = 0;
  for (let i = number; i > 0; i--) {
    sum += i;
  }
  return sum;
}
console.log('sumTo_01 ===> ', sumTo_01(3));

// 재귀 사용하기
const sumTo_02 = (number) => {
  if (number === 0) {
    return number
  } else {
    return number + sumTo_02(number - 1);
  }
}
console.log('sumTo_02 ===> ', sumTo_02(5));

// 등차수열 공식 사용하기
// 등차수열 : 같은 수만큼 일정하게 더해지는 수열
// 등비수열 : 같은 수만큼 일정하게 곱해지는 수열
const sumTo_03 = (number) => {
  return number * (number + 1) / 2
}
console.log('sumTo_03 ===> ', sumTo_03(5))
