const cuenta = (i, j, cb) => {
  j === 0 && cb(new Error("no se puede dividir por cero"));
  cb(null, i / j);
};

cuenta(500, 2, (error, result1) => {
  if (error) throw error;
  console.log(result1);
  cuenta(result1, 2, (error, result2) => {
    if (error) throw error;
    console.log(result2);
    cuenta(result2, 3, (error, result3) => {
      if (error) throw error;
      console.log(result3);
      cuenta(result3, 2, (error, result4) => {
        if (error) throw error;
        console.log(result4);
      });
    });
  });
});
