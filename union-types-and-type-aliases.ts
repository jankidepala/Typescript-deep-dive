type UnionThingType = string | number | string[] | boolean;

//UnionThingType  ="As";
let retSomething = (s:UnionThingType) => {
    console.log(typeof s)
    if(s instanceof Array){
        let b = ""
        s.forEach((t) => {
            console.log(t)
            b+= `${t}`
            console.log(b)
        })
    }
}

retSomething(["Lion", "Tiger"]);
