const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
  
   let n = result.input.split(" ");
   let max = n[0];
   let min = n[0];

   if(i>3){
    for(let i = 0; i<n.length; i++){
        if(n[i]>max && i>1){
            max=n[i]
        }
    }
    for(let i = 0; i<n.length; i++){
     if(n[i]<=min && i>1){
         min=n[i]
     }
 }
   }
   
console.log(min);
console.log(max);
});
