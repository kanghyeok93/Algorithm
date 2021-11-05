// 크레인 인형뽑기 게임
// 출처 https://programmers.co.kr/learn/courses/30/lessons/64061

function solution(board, moves) {
  let answer = 0;
  let basket = [];
  let tmpBoard = board;

  for (let i = 0; i < moves.length; i++){
    for (let j = 0; j < tmpBoard.length; j ++){
      if (tmpBoard[j][moves[i] - 1] !== 0){
        if (basket[0] === tmpBoard[j][moves[i] - 1]){
          basket.shift();
          answer += 2;
        } else {
          basket.unshift(tmpBoard[j][moves[i] - 1])
        }
        tmpBoard[j].splice(moves[i] - 1, 1, 0)
        break;
      }
    }
  }

  return answer;
}
