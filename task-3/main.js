const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
  
    let n = result.input.split(" ")
    let arr = []
    for(let i=0; i<n.length; i++){
        let element = parseInt(n[i])
        if(element>0){
            arr.push(element+2)
        }else if(element<0){
            arr.push(element)
        }
    }
    console.log(arr.join(" "));
});