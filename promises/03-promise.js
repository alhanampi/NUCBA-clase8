const cuenta = (i, j) => {
  return new Promise((resolve, reject) =>  {  
    j === 0 && reject(new Error("no se puede dividir por cero"));
    resolve(i / j);}
  )}

const promise = cuenta(500,2)

promise
  .then((result1) => {
    console.log(result1)
    return cuenta(result1, 2)
  })
  .then((result2) => {
    console.log(result2)
    return cuenta(result2, 2)
  })
  .then((result3) => {
    console.log(result3)
    return cuenta(result3, 2)
  })
  .catch((err) => console.log(err))