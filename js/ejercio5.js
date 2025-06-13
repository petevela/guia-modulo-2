
function descCoche(coche, precio){  

     let valor = Array;
    
    if(coche == 1){
        modelo = "Ford Fiesta";
        descuento = (precio * 0.05);
    }else if(coche == 2){
        modelo = "Ford Focus";
        descuento = (precio * 0.10);
    }else if(coche == 3){
        modelo = "Ford Escape";
        descuento = (precio * 0.20);
    }else{
        modelo = "Otros";
        descuento = 0;
    }

    valor = [modelo, descuento];

    let miDiv = document.getElementById('descuento');
    miDiv.innerHTML = 'Coche: ' + valor[0] + ', Descuento: ' + valor[1];

}