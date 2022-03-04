var multiple = (a ) => a*2;

console.log(multiple(3))


var arr = (...n) => {

    for(var i=0;i<n.length;i++){
        console.log(n[i]);
    }
    
};

arr(1,2,3);

