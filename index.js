let today,hour, minute, second;
let arr = [];

let b1 = document.getElementById('b1');
let b2 = document.getElementById('b2');
let b3 = document.getElementById('b3');
let b4 = document.getElementById('b4');
let b5 = document.getElementById('b5');
let input = document.getElementById("input");
let count = document.getElementById('count');
let back = document.getElementById('back');


b1.addEventListener('click', ()=>{
    intervall(60*30);
});

b2.addEventListener('click', ()=>{
    intervall(60*20);
});

b3.addEventListener('click', ()=>{
    intervall(60*15);
});

b4.addEventListener('click', ()=>{
    intervall(60*10);
});

b5.addEventListener('click', ()=>{
    intervall(60*60);
});

input.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      let valeur = 60 * input.value;
      intervall(valeur);
    }
  });

  
function addTime(sec){
    let min = parseInt(sec/60);
    let newMinute = minute + min;
    let newHour = hour;
    let newSecond = second + sec%60;
    if(newMinute > 60){
        newHour += parseInt(newMinute / 60);
        (newHour > 23 ? 0 : newHour);
        newMinute = newMinute % 60;
    }
    if(newSecond > 60){
        newSecond = newSecond - 60;
        newMinute++;
    }
    let hh = (newHour < 10 ? '0'+ newHour : newHour);
    let mm = (newMinute < 10 ? '0'+ newMinute : newMinute);
    let ss = (newSecond < 10 ? '0'+ newSecond : newSecond);
    return `${hh}:${mm}:${ss}`;
}
function intervall(down){
    getTime ();
    if(arr.length > 0){
        clearInterval(arr[0]);
        arr = [];
    }
    count.innerHTML = back.innerHTML = input.value = '';
    let time = addTime(parseInt(down))
    arr.push(setInterval(()=>{
        let hh, mm, ss;
        hh = parseInt(down/3600);
        mm = parseInt(down/60);
        mm = (mm >= 60 ? parseInt(mm%60): mm);
        ss = parseInt(down%60); 
        down--;
        if (down < 0) {
            count.innerHTML = back.innerHTML = input.value = '';
            clearInterval(arr[0]);
        } else {
            count.innerHTML = `${(hh < 10 ? '0' + hh : hh)}:${(mm < 10 ? '0' + mm : mm)}:${(ss < 10 ? '0' + ss : ss)}`;
            back.innerHTML = `yegaka ${time}`;
        }
    }, 1000));
    
}
function getTime (){
    today = new Date();
    hour = today.getHours();
    minute = today.getMinutes();
   second = today.getSeconds();
}