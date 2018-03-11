function forLoop(array) {
  for(i = 0; i < 25; i++) {
    if (i === 1) {
      array.push("i am 1 strange loop.")
    } else {
      array.push(`I am ${i} strange loops.`)
    }
  }  
    return array;
}


