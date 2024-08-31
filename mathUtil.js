 const PI = 3.141529;
 function getArea(r){
    return r * r * PI;
}

 function getFullRadius(r){
    return 2 * r;
}

export {PI,getArea,getFullRadius};
//console.log("after exporting....")