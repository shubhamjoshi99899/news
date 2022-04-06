let obj1={
    fname:"Shubham",
    lname:"Joshi",
    favLang:"react"


}


let obj2={
    obj2.fname=obj1.fname,
    obj2.lname=obj1.lname,
    obj2.favLang={...obj1.favLang="javascript"}
}
console.log(obj2);