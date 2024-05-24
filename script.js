function hideScrollbar() {
    document.body.style.overflow = 'hidden';
  }
  
  window.onload = hideScrollbar; 
    
    
    
    let hourhand = document.getElementById("hour");
    let minhand = document.getElementById("min");
    let sechand = document.getElementById("sec");

function logdate(){
    let date = new Date();
    // console.log(date);
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();
    // console.log(hh,mm,ss)
    let hrotate = 30*hh + mm/2;
    let mrotate = 6*mm;
    let srotate = 6*ss;
    console.log(hrotate,mrotate,srotate);

    hourhand.style.transform = `rotate(${hrotate}deg)`;
    minhand.style.transform = `rotate(${mrotate}deg)`;
    sechand.style.transform = `rotate(${srotate}deg)`;
}

setInterval(logdate, 1000);