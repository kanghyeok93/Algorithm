// 단일 연결 리스트 역순 출력하기
let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
}

// 반복문 사용하기
const reversePrintList_01 = (list) => {
  let tmp = list;
  let arr = [];

  while(tmp){
    arr.push(tmp.value)
    tmp = tmp.next
  }

  for (let i = arr.length; i > 0; i--){
    console.log('reversePrintList_01 ===> ', arr[i - 1]);
  }
}
reversePrintList_01(list);

// 재귀 사용하기
// 방법 1
const reversePrintList_02 = (list) => {
  let tmp = list;
  let arr = [];

  arr.push(tmp.value);
  tmp = tmp.next;

  tmp ? reversePrintList_02(tmp) : 0

  console.log('reversePrintList_02 ===> ', arr[0]);
}
reversePrintList_02(list);

// 방법 2
const reversePrintList_03 = (list) => {
  if (list.next) {
    reversePrintList_03(list.next);
  }

  console.log('reversePrintList_03 ===> ', list.value);
}
reversePrintList_03(list);
