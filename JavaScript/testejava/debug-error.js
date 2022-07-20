function validaArray(arr, num) {
   try {
    if(!arr && !num) 
        throw new ReferenceError("Envie os parametros");

    if(typeof arr !== 'object') 
        throw new TypeError("Arraye precisa ser do tipo object");

    if(typeof num !== 'number') 
        throw new TypeError("Arraye precisa ser do tipo number");

    if(arr.length !== num) 
        throw new RangeError("Tamanho é invalido");

    return arr;
   } catch (e) {
    if(e instanceof ReferenceError) {
        console.log("Este erro é um ReferenceError!");
        console.log(e.message);
    } else if (e instanceof TypeError) {
    console.log("Este erro é um TypeError!");
    console.log(e.message);
    } else if (e instanceof RangeError) {
    console.log("Este erro é um RangeError!");
    console.log(e.message);
    } else {
    console.log(`Tipo de erro não esperado:` + e );
            }
   }   
}

console.log(validaArray([],'5'));