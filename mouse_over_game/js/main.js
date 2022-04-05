document.getElementById('player').addEventListener("mouseover",sumarPuntos);

var puntos=0;
var tiempo=21;
var puntosObjetivo=10;

function sumarPuntos(){
 puntos++;
 document.getElementById("score").innerHTML= "PUNTOS: <b>"+puntos+ "/"+puntosObjetivo+"</b>";
 let ranNum= Math.round(Math.random()*500);
 let ranNum2= Math.round(Math.random()*500);
 document.getElementById("player").style.marginTop=ranNum+"px";
 document.getElementById("player").style.marginLeft=ranNum+"px";
 if(puntos==10){
     alert("ganaste");
 }
}

function restarTiempo(){
    tiempo--;
    document.getElementById("time").innerHTML=" Tiempo: "+tiempo+ " ";
    if(tiempo==0){
        alert("Perdiste!");
        tiempo=21;
        puntos=0;
    }
}

setTimeout(restarTiempo,500);