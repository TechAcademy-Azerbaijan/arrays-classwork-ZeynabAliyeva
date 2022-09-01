const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
  
    let n = result.input.split(" ");
    for(let i = 0; i<n.length; i++){
         if(parseInt(n[i]) % 2 !== 0){
             console.log(n[i]);
         }
         
    }
});
