function tugas13(){
  var buah = ['Pisang','Jeruk'];
  console.log(buah);
  buah.unshift('Apel','Mangga');
  //Jika menggunakan splice
  // buah.splice(0,0,'Apel','Durian');
  return buah;
}

console.log(tugas13());
