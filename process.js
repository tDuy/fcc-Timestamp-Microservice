module.exports = (input) => {
  if(!/\D/g.test(input)){
    var num = Number(input);
    // unix timestamp in seconds, Date arg in Milliseconds
    var d = new Date(num * 1000);
  } else {
    var d = new Date(input);  
    var num = d.getTime() / 1000;
  }
  // d is invalid date or not a date (undefined)
  if (isNaN(d.getTime()))
    return {unix: null, natural: null};
  
  var months = ['January', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  var date = d.getDate(),
      month = months[d.getMonth()],
      year = d.getFullYear();
    
  return {unix: num, natural: `${month} ${date}, ${year}`};
};
