



document.getElementById("myInput").addEventListener("keydown", myFunction
);

document.getElementById("myInput").addEventListener("keyup", close
);


function myFunction(e){

    if(e.keyCode == '13'){

      var newv = document.getElementById("myInput").value;
      fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${newv}&appid=354538397448949ec40c126c21fade22`)
      .then( res => res.json())
      .then( (data) => {
        console.log(data);
        var celcius = data.list[0].main.temp - 273.15;
        var dv = new Date();
        var weekdays = new Array(7);
        weekdays[0] = "Sunday";
        weekdays[1] = "Monday";
        weekdays[2] = "Tuesday";
        weekdays[3] = "Wednesday";
        weekdays[4] = "Thursday";
        weekdays[5] = "Friday";
        weekdays[6] = "Saturday";
        var monthname =  ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        var day = weekdays[dv.getDay()];
        var date = dv.getDate();
        var year = dv.getFullYear();
        var month = monthname[dv.getMonth() + 1];
        var hour = dv.getHours();
        if (hour>18 || hour<7 ){
          document.getElementById("body").classList.add("mystyle");
        }
        


        console.log(dv.getMonth());
       
         document.getElementById("population").innerHTML = `<span>Garbage: </span> ${data.city.population} <span> </span>  `; 
         document.getElementById("temp").innerHTML = `${Math.round(celcius)} &#8451;`; 
         document.getElementById("day").innerHTML = day; 
        document.getElementById("date").innerHTML = date + "&nbsp;" + month + "&nbsp;" + year; 
        document.getElementById("cityname").innerHTML = data.city.name; 
      })
      .catch(err => console.log(err))

    }
  
   
  }


  function close(e){
    if(e.keyCode == '8'){
  
    document.getElementById("cityname").innerHTML = `<div> </div>`; 
    document.getElementById("population").innerHTML = `<div> </div>`; 
    document.getElementById("day").innerHTML = `<div> </div>`; 
    document.getElementById("date").innerHTML = `<div> </div>`; 
    document.getElementById("status").innerHTML = `<div> </div>`; 
    document.getElementById("temp").innerHTML = `<div> </div>`; 
  

    }
  
  }

 





