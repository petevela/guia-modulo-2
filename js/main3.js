function reverseString(string){
    let reverse_string = [];

    for(let i = string.length-1; i >= 0; i--){
        reverse_string.push(string)

    }



    return reverse_string.join('');

}

console.log(reverseString("hhelo world"));