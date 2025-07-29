function convertKmInMl(km) {
  return km * 1000;
}
const km = 5;
// console.log(convertKmInMl(km));

function isFreez(temp) {
  return temp < 0;
}
// console.log(isFreez(0));

function isEqual(a, b, c) {
  return a === b && b === c;
}
// console.log(isEqual(3,2,2));

function getDayNumber(dayNumber) {
  // if (dayNumber === 6 || dayNumber === 7) {
  //   return "weekend";
  // } else {
  //   return "workDay";
  // }
  return dayNumber === 6 || dayNumber === 7 ? "weekend" : "workDay";
}
// console.log(getDayNumber(7));

function getTimeOfDay(hour) {
  if (hour >= 6 && hour < 12) {
    return "morning";
  }
  if (hour >= 12 && hour < 18) {
    return "afternoon";
  }
  if (hour >= 18 && hour < 22) {
    return "evening";
  }
  if ((hour >= 0 && hour < 6) || (hour >= 22 && hour < 24)) {
    return "night";
  }
  return "wrong data";
}
// console.log(getTimeOfDay(2));

function getGradeText(grade) {
  if (grade >= 1 && grade < 4) {
    return "bad";
  }
  if (grade >= 4 && grade < 7) {
    return "normal";
  }
  if (grade >= 7 && grade < 10) {
    return "good";
  }
  if (grade >= 10 && grade <= 12) {
    return "amazing";
  }
  return "wrong number";
}
// console.log(getGradeText(15));

function checkSpeedWiFi(speed, baseSpeed = 30) {
  return speed >= baseSpeed;
}
console.log(checkSpeedWiFi(30, 40));
console.log(checkSpeedWiFi(30));

