// 로또의 최고 순위와 최저 순위
// 출처  https://programmers.co.kr/learn/courses/30/lessons/77484

function ranking(number){
  switch(number){
    case 6:
      return 1;
    case 5:
      return 2;
    case 4:
      return 3;
    case 3:
      return 4;
    case 2:
      return 5;
    default:
      return 6;
  }
}

function solution(lottos, win_nums) {
  let highestRankingNumber = 0;
  let lowestRankingNumber = 0;

  for (let i = 0; i < 6; i++){
    if (lottos[i] === 0){
      highestRankingNumber++
    }

    for (let j = 0; j < 6; j++){
      if (lottos[i] === win_nums[j]){
        highestRankingNumber++
        lowestRankingNumber++
      }
    }
  }

  let answer = [];
  answer.push(ranking(highestRankingNumber),ranking(lowestRankingNumber))
  return answer;
}
