const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
  
    let n = result.input.split(" ");
    let a = 0;
    for(let i = 0; i<n.length; i++){
        a += parseInt(n[i])        
        let sum = a.pop()
        console.log(parseInt(sum));
    }
});
