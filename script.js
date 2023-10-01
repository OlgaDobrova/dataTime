"use strict";
//Это Урок №9 усложненное задание

const currentDateFormat = setInterval(function () {
  const dayWeek = [
    "Воскресенье",
    "Понедельник",
    "Вторник",
    "Среда",
    "Четверг",
    "Пятница",
    "Суббота",
  ];
  const monthTitle = [
    "января",
    "февраля",
    "марта",
    "апреля",
    "мая",
    "июня",
    "июля",
    "августа",
    "сентября",
    "октября",
    "ноября",
    "декабря",
  ];

  let toDay = new Date();
  let fullCurrentDate = document.querySelector(".full-current-date");
  let shortCurrentDate = document.querySelector(".short-current-date");

  const hourWord = function (value, words) {
    value = Math.abs(value) % 100;
    let hour = value % 10;
    if (value > 10 && value < 20) return words[2];
    if (hour > 1 && hour < 5) return words[1];
    if (hour == 1) return words[0];
    return words[2];
  };

  fullCurrentDate.innerHTML =
    "Сегодня " +
    dayWeek[toDay.getDay()] +
    ", " +
    toDay.getDate() +
    " " +
    monthTitle[toDay.getMonth()] +
    " " +
    toDay.getFullYear() +
    ", " +
    toDay.getHours() +
    " " +
    hourWord(toDay.getHours(), ["час", "часа", "часов"]) +
    " " +
    toDay.getMinutes() +
    " " +
    hourWord(toDay.getMinutes(), ["минута", "минут", "минут"]) +
    " " +
    toDay.getSeconds() +
    " " +
    hourWord(toDay.getSeconds(), ["секунда", "секунды", "секунд"]);

  shortCurrentDate.innerHTML =
    toDay.getDate().toString().padStart(2, "0") +
    "." +
    toDay.getMonth().toString().padStart(2, "0") +
    "." +
    toDay.getFullYear() +
    " - " +
    toDay.getHours().toString().padStart(2, "0") +
    ":" +
    toDay.getMinutes().toString().padStart(2, "0") +
    ":" +
    toDay.getSeconds().toString().padStart(2, "0");
}, 1000);

currentDateFormat();
