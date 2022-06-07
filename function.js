let monto=[];
const nombres=[];
const lista=document.getElementById('lista');
const total=document.getElementById('total');
const inputnombre=document.getElementById('fieldNombre');
const inputmonto=document.getElementById('fieldMonto');
function getmonto(){
    agregaraLista();
    ultimoMostrado();
    mostrarresultado();
}
function agregaraLista(){
    nombres.push(fieldNombre.value);
    monto.push(fieldMonto.value);
    console.log(nombres);
    console.log(monto);
}
function ultimoMostrado(){
    const li=document.createElement('li');
    li.classList.add('list-group-item');
    li.textContent=nombres[nombres.length-1]+': $'+monto[monto.length-1];
    lista.append(li);
    console.log(li);
}
function mostrarresultado(){
    let totala=0;
    for(i=0; i<monto.length; i++){
        totala = parseFloat(monto[i])+totala;
    }
    document.getElementById('total').innerHTML='$' +totala;
    let promedio=totala/monto.length;
    document.getElementById('promedio').innerHTML='$'+promedio.toFixed(2);
}
function refrescar(){
    location.reload();
}