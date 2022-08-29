const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
  
   let n = result.input.split(" ");
    let max = n[0];
    let min = n[0];
    for(let i = 0; i<n.length; i++){
        if(n[i]>max){
            max=parseInt(n[i]) //4
        }
    }
   let sum = 0;
    for(let i = 0; i<n.length; i++){
      if(n[i]<max && n[i]>min){
          sum=parseInt(n[i])
          
      }
  }
  let cvb = sum+max
    console.log(parseInt(cvb));
});
