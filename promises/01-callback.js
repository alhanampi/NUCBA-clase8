const nucba = (cb) => {
  const nuc = "nucba"
  cb(nuc)
}

nucba(hola => console.log(hola))