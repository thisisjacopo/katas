const DNAStrand = (string) => {
    let str = '';
  for (let i = 0; i < string.length; i++){
     if(string[i] === 'A'){
        str = str.slice(0,i) +'T' + string.slice(i + 1,string.length);
     } else if(string[i] ==='T'){
        str = str.slice(0,i) +'A' + string.slice(i + 1,string.length);
     } else if(string[i] ==='C'){
        str = str.slice(0,i) +'G' + string.slice(i + 1,string.length);
     } else if(string[i] ==='G'){
        str = str.slice(0,i) +'C' + string.slice(i + 1,string.length);
     }
  }
  return str;
}