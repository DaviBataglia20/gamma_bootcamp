const citizen1 = {
    name : "davi",
    lastName : "bataglia" ,
    age : 20,
    city : "rio de janeiro",
    checkCitizenship (){ 
        if(citizen1.age > 18){
           return citizen1.canVote = "true";
        }else{
            return citizen1.canVote = "false";
        }
    }
}
citizen1.age = 21 ;
citizen1.checkCitizenship();
console.log(citizen1);


const citizen2 = {
    result (){
        return console.log(citizen1.checkCitizenship());
    }
}
citizen2.result();

const createCitizen = (nombre,apellido,age) =>{
    const ciudadano = {
    nombre :"davi",
    apellido :"bataglia",
    age :20,
    }
}
console.log(createCitizen(nombre,apellido,age));
