function isLeapyear(year){
    return (year %4 === 0 && year%100!==0) ||(year%400===0);
}
 const LeapYear =isLeapyear(2000);
 console.log(LeapYear);