// 팩토리얼 계산하기

// 방법 1
const factorial_01 = (number) => {
  if (number === 1) {
    return number;
  } else {
    return number * factorial_01(number - 1)
  }
}
console.log('factorial_01 ===> ', factorial_01(3));

// 방법 2
const factorial_02 = (number) => {
  return (number !== 1) ? number * factorial_02(number - 1) : 1
}
console.log('factorial_02 ===> ', factorial_02(5));
