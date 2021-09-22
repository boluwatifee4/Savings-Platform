function mu() {
    let student = ["bolu", "samson", "emmanuel", "mercy"]
// let numbers = [2,5,7,8,3]
//  for(let i=0; i<numbers.length; i++){
//      console.log(numbers[i]*5)
//  }
// numbers.map(i=>console.log(i*10))
// numbers.filter(i=>(i*(3))%2 != 0?console.log((i*(3/2))): "")

let namE = document.getElementById("val").value;
let text;
student.filter(i => namE == i ? text = namE : "")
document.getElementById("la").innerHTML = text

}