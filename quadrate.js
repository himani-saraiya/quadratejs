var n=require("readline-sync")
var a=n.questionInt("**********")
var b=n.questionInt("**********")
var c=n.questionInt("**********")
let dic=b**b-4*a*c
if(dic>0){
    var root1=(-b+Math.sqrt(dic))/2*a
    var root2=(-b-Math.sqrt(dic))/2*a
    console.log(`sqrt condition ${root1} and ${root2}`)
}
else if(dic==0){
    root1=root2=-b/(2*a)
    console.log(`sqrt equation ${root1} and ${root2}`)
}else{
    var realpart=(-b/(2*a)).toFixed(2)
    var imagepart=Math.sqrt(-dic/(2*a)).toFixed(2)
    console.log(`sqrt equation ${realpart}+${imagepart}i and ${realpart}-${imagepart}i`) 
}                            