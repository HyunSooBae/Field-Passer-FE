const date = new Date();

const timeNow = () => {
  let hours: string = ('0' + date.getHours()).slice(-2);
  let minutes: string = ('0' + date.getMinutes()).slice(-2);
  return `${hours}:${minutes}`;
};

const dateNow = () => {
  var year = date.getFullYear();
  var month = ('0' + (date.getMonth() + 1)).slice(-2);
  var day = ('0' + date.getDate()).slice(-2);
  return { year, month, day };
};

const endDate = () => {
  const year = date.getFullYear();
  let month: string | number = date.getMonth() + 1;
  let day: string | number = date.getDate();
  if (month < 10) {
    month = `0${month}`;
  }
  if (day < 10) {
    day = `0${day}`;
  }
  return `${year}-${month}-${day}`;
};

const startDate = () => {
  const checkEndDate = endDate().split('-');
  let year = Number(checkEndDate[0]);
  let month: string | number = Number(checkEndDate[1]);
  let day: string | number = Number(checkEndDate[2]) - 2;

  // day
  if (1 < day && day < 10) {
    day = `0${day}`;
  } else if (day < 1) {
    month -= 1;
    if (month === 4 || month === 6 || month === 9 || month === 11) {
      day = 30 + day;
    } else if (month === 2) {
      day = 28 + day;
    } else {
      day = 31 + day;
    }
  }

  // month
  if (1 < month && month < 10) {
    month = `0${month}`;
  } else if (month < 1) {
    month = 12;
    year -= 1;
  }
  return `${year}-${month}-${day}`;
};

export { endDate, startDate, timeNow, dateNow };
