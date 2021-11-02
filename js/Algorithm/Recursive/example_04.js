// 단일 연결 리스트 출력하기
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
const printList_01 = (list) => {
  let tmp = list;
  while (tmp){
    console.log('printList_01 ===> ', tmp.value);
    tmp = tmp.next
  }
}
printList_01(list);

// 재귀 사용하기
const printList_02 = (list) => {
  let tmp = list;
  console.log('printList_02 ===> ', tmp.value);
  tmp = tmp.next;
  tmp ? printList_02(tmp) : 0;
}
printList_02(list);
