const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
  
    let n = result.input.split(" ");
    let sum = 0;
    for(let i = 0; i<n.length; i++){
         if(n[i] % 2 !== 0){
             console.log(n[i]);
         }
    }
});
