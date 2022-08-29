const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
  
    let n = result.input.split(" ");
    let max = n[0];
    for(let i = 0; i<n.length; i++){
        if(n[i]>max){
            max=parseInt(n[i])
        }
    }
    let sum = 0;
    for(let i = 0; i<n.length; i++){
        if(max !==parseInt(n[i])){
            sum+=parseInt(n[i])
        }
    }
    console.log(sum);
        
});
