function ageUsuario(age){
    const limite = 18;
    let msj = "";
    if(age>=limite){
        msj = "Si";  
    }else{
        msj = "No";
    }
    return msj;
}

console.log('La persona es mayor de edad: ' + ageUsuario(15));