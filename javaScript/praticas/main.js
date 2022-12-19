/* function impares(num){
    let result =[];
    for(i = 0 ; i <= num.length;i++){
        if(num[i] %2 === 0)
        result.push(num[i])
    }
    return console.log(result)
}
impares([1,2,3,4,5,6,7,8,9,10]); */

/* SAQUE NUMEROS IMPARES DEL ARRAY */

function impares (arry){
    let result = 0;
    for(i = 0 ; i < arry.length; i++){
        if(arry[i] %2 !== 0){
            result = arry[i];
            console.log(result);
        }
    }

}
arry = [1,2,3,4,5,6,7,8,9,10];
impares(arry);
