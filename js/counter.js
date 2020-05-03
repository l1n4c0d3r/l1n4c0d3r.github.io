var finalDestination = new Date('2032-03-30:00:00:00');
var today = Date.now();
var sum = 78400;

function secondsUntilDate() {
  var millFinalDest = Math.round(finalDestination.getTime() / 1000);
  var millToday = Math.round(today / 1000);

  var sec = millFinalDest - millToday;

  return sec;
}

function moneyPerSecond() {
  console.log(sum / secondsUntilDate());
}

function moneyPerMinute() {
  console.log(sum / (secondsUntilDate() / 60));
}

function moneyPerDay() {
  console.log(sum / (secondsUntilDate() / 60 / 60 / 24));
}

