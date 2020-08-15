const toCamelCase = (str) => {
    str = str.split('');
    return str.map(function(a, b){
      if(a == '-' || a == '_'){
        a = str[b+1].toUpperCase();
        str.splice(b+1, 1);
      }
      return a;
    }).join('');
  }