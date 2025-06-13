const descuentoTuristico = (origen, destino) => { 
    let descuento = 0;
    if(origen === 1){//ciudad panama
        if(destino === 1){ //costa del sol
            descuento = 0.05;  
        }else if(destino === 2){//panchimalco
            descuento = 0.10;
        }else if(destino === 3){//puerto el triunfo
            descuento = 0.15; 
        }else{
            descuento = 0;
        }
    }
    return 'Descuento aplicar es: ' + (descuento*100) + '%';
}


let origen = 1; //panama
let destino = 3; //1=costa del sol, 2=panchimalco y 3 puerto el triunfo

console.log(descuentoTuristico(origen,destino));


