import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  
    let who = ['El perro', 'Mi abuela', 'El ladron', 'Mi pajaro'];
    let action = ['se comio', 'tiro', 'robo', 'perdio'];
    let what = ['los deberes', 'mi cartera', 'el coche','el ordenador'];
    let when = ['antes de clase', 'mientras dormia', 'cuando hacia ejercicio', 'cuando estaba comiendo,', 'durante mi rezo' ];
    
    
      function generatorExcuses () {
        let randomwho= who[Math.floor(Math.random()*who.length)]
        let randomaction= action[Math.floor(Math.random()*action.length)]
        let randomwhat= what[Math.floor(Math.random()*what.length)]
        let randomwhen= when[Math.floor(Math.random()*when.length)]
    
        return `${randomwho} ${randomaction} ${randomwhat} ${randomwhen}`;
      }
    
    
    
    document.getElementById('excuse').innerHTML = generatorExcuses() }
;
