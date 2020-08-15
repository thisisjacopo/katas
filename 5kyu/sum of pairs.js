const sum_pairs= (integers, sum) => {
    let complements = {};
    for (let i=0; i<integers.length; i++) {
      if (complements[integers[i]]) {
        return [sum - integers[i], integers[i]];      
      } else {
        complements[sum - integers[i]] = true;
      }

    }
}