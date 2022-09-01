const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
  
    let n = result.input.split(" ");
    let max = parseInt(n[0])
    let min = parseInt(n[0])

    if(n.length<=2){
        console.log("Ooops!")
    }else{
        for(let i=0; i<n.length; i++){

            if(n[i]>max){
                max=parseInt(n[i])
            }
            if(n[i]<=min){
                min=parseInt(n[i])
             }     
    }
    console.log(`${max}\n${min}`);
    }
    
       
});
   
   


