const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
  
    let n = result.input.split(" ");
    let max = n[0];
    let count = 0;
    for(let i = 0; i<n.length; i++){
        if(n[i]>max){
            max=parseInt(n[i])
        }
    }
    for(let i = 0; i<n.length; i++){
        if(max==parseInt(n[i])){
            count++
        }
    }
        console.log(count);
});
