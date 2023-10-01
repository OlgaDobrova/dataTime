"use strict";
//Это Урок №19 обязательное задание

const welcome = document.querySelector(".welcome");
const dayWeek = document.querySelector(".current-day-week");
const time = document.querySelector(".current-time");
const residue = document.querySelector(".number-days-until-new-year");

//вычисление времени до дедлайна
const getTimeRemaining = (deadline) => {
  const dayWeek = [
    "Воскресенье",
    "Понедельник",
    "Вторник",
    "Среда",
    "Четверг",
    "Пятница",
    "Суббота",
  ];

  const hourWord = function (value, words) {
    value = Math.abs(value) % 100;
    let hour = value % 10;
    if (value > 10 && value < 20) return words[2];
    if (hour > 1 && hour < 5) return words[1];
    if (hour == 1) return words[0];
    return words[2];
  };

  let toDay = new Date(); //текущая дата

  let currentDayWeek = dayWeek[toDay.getDay()];
  let currentHours = toDay.getHours();
  let currentMinutes = toDay.getMinutes();
  let currentSeconds = toDay.getSeconds();

  let timesOfDay = ""; //время суток

  let dateStop = new Date(deadline).getTime(); //дата дедлайна в миллисекундах
  let dateNow = new Date().getTime(); //текущая дата  в миллисекундах
  //разница - кол-во миллисекунд до дедлайна
  //1сек = 1000 миллисекунд
  let timeRemaining = (dateStop - dateNow) / 1000; //кол-во секунд
  let days = Math.floor(timeRemaining / 60 / 60 / 24);
  let daysWord = hourWord(Math.floor(timeRemaining / 60 / 60 / 24), [
    "день",
    "дня",
    "дней",
  ]);

  switch (true) {
    case currentHours <= 5 || currentHours >= 23: {
      timesOfDay = "Доброй ночи";
      break;
    }
    case currentHours >= 6 && currentHours <= 10: {
      timesOfDay = "Доброе утро";
      break;
    }
    case currentHours >= 11 && currentHours <= 15: {
      timesOfDay = "Добрый день";
      break;
    }
    default: {
      timesOfDay = "Добрый вечер";
      break;
    }
  }

  return {
    timeRemaining,
    days,
    daysWord,
    timesOfDay,
    currentDayWeek,
    currentHours,
    currentMinutes,
    currentSeconds,
  };
};

const updateClock = (deadline) => {
  let getTime = getTimeRemaining(deadline);

  if (getTime.timeRemaining > 0) {
    welcome.textContent = getTime.timesOfDay;
    dayWeek.textContent = `Сегодня: ${getTime.currentDayWeek}`;
    time.textContent = `Текущее время: ${getTime.currentHours
      .toString()
      .padStart(2, "0")}:${getTime.currentMinutes
      .toString()
      .padStart(2, "0")}:${getTime.currentSeconds
      .toString()
      .padStart(2, "0")} PM`;
    residue.textContent = `До нового года осталось: ${getTime.days} ${getTime.daysWord}`;
  }
};

setInterval(updateClock, 1000, "01 january 2024");
