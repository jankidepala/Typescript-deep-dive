//callback or HOC - 
//function called inside other function


const a = (val, callback) => {
    var t = "AA"
    callback();
    return `This is ${t} ${callback}`
}

const logstuff = () => {
    setInterval(() => {
        setTimeout(() => {
            console.log("yyyy")
        }, 3000)
    }, 1000)
    return "CALLLL"
}
const post =[{
    "title": 'Post 1'},
    {"title": 'Post 2'}
];

function getPost(){
    setTimeout( () => {
        let output = '';
        post.forEach( e =>{
            console.log(e);
        })
        
    })
}




//var hhh = new hh('JJ');
console.log(hh(list))

//prmose
var pro = new Promise( (resolve, reject) =>{
if(resolve){
    resolce("stuff work")
}
else{
    reject(Error("it broke"))
}
});
pro.then( res => {

}, function(err){

})
