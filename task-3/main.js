const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
  
    let n = result.input.split(" ")
    let sum = 0;
    for(let i = 0; i<n.length; i++){
         sum= parseInt(n[i]) 
         if(sum>0){
             sum+=2
         }
         console.log(parseInt(sum));
    }
});