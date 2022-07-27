
let firstDate = new Date("10/20/2021"),
    secondDate = new Date("07/27/2022"),

    
    //calculating time differnce between dates
    timeDifference = Math.abs(secondDate.getTime() - firstDate.getTime());
    console.log(timeDifference);
    
    //alert("The Time Difference is "+timeDifference);

    //gives day difference
    var diffDays = parseInt((secondDate - firstDate) / (1000 * 60 * 60 * 24));  
    console.log(diffDays)
    let alert = require('alert');
    alert("Number of days are "+diffDays)

    