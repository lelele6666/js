const ONE_SECOND = 1e3;
const ONE_MINUTE = 6e4;
const ONE_HOUR = 3600000;
const ONE_DAY = 86400000;

/**
 * 时间格式化
 * 1. 如果是当前输出：hh:mm
 * 2. 如果是昨天输出：昨天 hh:mm
 * 3. 其它输出：yyyy-MM-dd
 * @param {string|number} stamp
 * @returns {string}
 */
export function timeFormatter(stamp) {
  let millis = window.parseInt(stamp);
  millis = (millis > 1e10 ? millis : millis * ONE_SECOND);

  const EMPTY_SPACE = ' ';
  const d = new Date(millis);
  const year = d.getFullYear();
  const hours = d.getHours();
  const minutes = d.getMinutes();
  const seconds = d.getSeconds();
  const day = d.getDay();
  const week = [
    '星期日',
    '星期一',
    '星期二',
    '星期三',
    '星期四',
    '星期五',
    '星期六'
  ][day] + EMPTY_SPACE;

  let date = d.getDate();
  let month = d.getMonth() + 1;
  month = (month > 9 ? '' : '0') + month;
  date = (date > 9 ? '' : '0') + date;

  const now = new Date();
  now.setHours(0);
  now.setMinutes(0);
  now.setSeconds(0);

  const todayMillis = now.getTime();
  const todayWeek = now.getDay();
  const yesterdayMillis = todayMillis - ONE_DAY;
  const yearMillis = (new Date(`${now.getFullYear().toString()}/01/01 00:00:00`)).getTime();
  const hourMinutes = [
    (hours < 10 ? '0' : '') + hours,
    (minutes < 10 ? '0' : '') + minutes,
    (seconds < 10 ? '0' : '') + seconds,
  ].join(':');
  let weekMillis;
  let formatStr = '';

  if (todayWeek !== 0) {
    weekMillis = todayMillis - ((todayWeek - 1) * ONE_DAY);
  } else {
    weekMillis = todayMillis - (6 * ONE_DAY);
  }

  if (millis >= todayMillis) {
    formatStr = hourMinutes;
  } else if (millis >= yesterdayMillis) {
    formatStr = `昨天 ${hourMinutes}`;
  } else if (millis >= weekMillis) {
    formatStr = week + hourMinutes;
  } else if (millis >= yearMillis) {
    formatStr = `${month}-${date}${EMPTY_SPACE}${hourMinutes}`;
  } else {
    formatStr = [year, month, date].join('-');
  }

  return formatStr;
}

export function timeConsume(stamp, now = Date.now()) {
  stamp = stamp > 1e10 ? stamp : (stamp * 1e3);

  let diff = now - stamp;
  let result = [];

  diff = diff >= 0 ? diff : 0;
  if (diff < ONE_MINUTE) {
    result = [Math.floor(diff / ONE_SECOND), '秒'];
  } else if (diff < ONE_HOUR) {
    result = [
      Math.floor(diff / ONE_MINUTE), '分',
      Math.floor((diff % ONE_MINUTE) / ONE_SECOND), '秒'
    ];
  } else if (diff < ONE_DAY) {
    result = [
      Math.floor(diff / ONE_HOUR), '时',
      Math.floor((diff % ONE_HOUR) / ONE_MINUTE), '分'
    ];
  } else {
    result = [
      Math.floor(diff / ONE_DAY), '天',
      Math.floor((diff % ONE_DAY) / ONE_HOUR), '时'
    ];
  }

  return result.join('');
}

export function timeExpired(stamp, diff, now = Date.now()) {
  stamp = stamp > 1e10 ? stamp : (stamp * 1e3);
  return now - stamp > diff;
}

// 时间毫秒数转换为12:09:09
export function getDuration(my_time) {  
  var days    = my_time / 1000 / 60 / 60 / 24;
  var daysRound = Math.floor(days);
  var hours = my_time / 1000 / 60 / 60 - (24 * daysRound);
  var hoursRound = Math.floor(hours);
  var minutes = my_time / 1000 / 60 - (24 * 60 * daysRound) - (60 * hoursRound);
  var minutesRound = Math.floor(minutes);
  var seconds = my_time / 1000 - (24 * 60 * 60 * daysRound) - (60 * 60 * hoursRound) - (60 * minutesRound);
  console.log('转换时间:', daysRound + '天', hoursRound + '时', minutesRound + '分', seconds + '秒');
  var time = hoursRound + ':' + minutesRound + ':' + seconds
  return time;
}

