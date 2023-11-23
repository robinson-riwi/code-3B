function operaciones(){
    let operacion = document.getElementById('operacion').value;
    let numero1 = document.getElementById('numero1').value;
    let numero2 = document.getElementById('numero2').value;
    if(operacion!=""){
        document.getElementById('operacion').classList.add('is-valid');
        document.getElementById('operacion').classList.remove('is-invalid');
        document.getElementById('respuesta-2').innerText = "Todo esta muy bien por aqui :)"
    }else{
        document.getElementById('operacion').classList.remove('is-valid');
        document.getElementById('operacion').classList.add('is-invalid');
        document.getElementById('respuesta-1').innerText = "Todo mal :)"
    }
}