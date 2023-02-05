(function (){
    function A(Firstname:string,...Lastname:string[]) {
        if (Lastname.length)
            console.log(Firstname+Lastname[0])
        else
            console.log(Firstname)
    }
    A("Nick");
    A("Nick","Wiber");
})()
