function countLogiks(){
  let logiks = +document.getElementById('logik').value;
  let minutes = +document.getElementById('minutes').value;
  let resultHeader = document.querySelector('.result')
  let decadeAmount = Math.floor(minutes / 10);
  let stavka = 0;
  if (minutes < 5) {
    resultHeader.innerHTML = ''+logiks;
    return
  }
  if (5<=  minutes && minutes < 10){
    console.log(5<=  minutes < 10);
    stavka = 5;
    console.log(logiks+ logiks*(stavka/100))
    resultHeader.innerHTML = (logiks + logiks * (stavka /100)).toString();
    return
  }
  console.log(decadeAmount)
  if (1==decadeAmount){
    stavka = 7;
  }
  if (2==decadeAmount) {
    stavka = 9;
  }
  if (3 <= decadeAmount < 5){
    stavka = 12;
  }
  if  (5 <= decadeAmount){
    stavka = 15;
  }
  console.log(stavka / 100)
  for (let i = 0; i < decadeAmount; i++) {
    logiks = logiks + logiks * (stavka / 100);
  }
  resultHeader.innerHTML = ''+Math.floor(logiks);
}
