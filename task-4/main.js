const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
  
    let n = result.input.split(" ");
    let max = 0;
    let min = parseInt(n[0]);
    
    for(let i = 0; i < n.length; i++){
       if(parseInt(n[i])>max){
           max=parseInt(n[i])
           
       }
    }
    for(let i = 0; i < n.length; i++){
        if(parseInt(n[i])<min){
            min=parseInt(n[i])
            
        }
    }
    let sum = max-min;
    console.log(sum);
    
});
