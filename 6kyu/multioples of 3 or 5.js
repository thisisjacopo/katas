function solution(number){
    let num = 0;
    for (i=0; i<number; i++){
    if ((i % 3 === 0) || (i % 5 === 0) || ( i % 3 === 0 && i % 5 === 0)){
    num = num + i;
    }
   }
   return num
  }