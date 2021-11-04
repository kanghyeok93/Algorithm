// 신규 아이디 추천
// 출처 https://programmers.co.kr/learn/courses/30/lessons/72410

function solution(new_id) {
  let answer = '';
  let tmp = [];
  answer = new_id.toLowerCase().replace(/[^a-z0-9-_.]/g,'');

  for (let i = 0; i < answer.length; i++){
    if (i > 0 && answer[i] === '.'){
      if(answer[i - 1] !== answer[i]){
        tmp.push(answer[i])
      }
    } else {
      tmp.push(answer[i])
    }
  }

  if(tmp[0] === '.'){
    tmp.shift();
  }

  if(tmp[tmp.length - 1] === '.'){
    tmp.pop();
  }

  if(tmp.length === 0){
    tmp = 'a'
  }

  if(tmp.length >= 16){
    tmp.splice(15, tmp.length);

    if(tmp[tmp.length - 1] === '.'){
      tmp.pop();
    }
  }

  answer = '';

  for (let i = 0; i < tmp.length; i++){
    answer += tmp[i]
  }

  if (answer.length <= 2){
    while (answer.length < 3 ){
      answer += answer[answer.length - 1]
    }
  }

  return answer;
}
