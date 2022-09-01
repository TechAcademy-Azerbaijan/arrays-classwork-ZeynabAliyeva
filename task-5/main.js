const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
  
    let n = result.input.split(" ");
    let lastnumber = n.pop()
    n.unshift(lastnumber)
    console.log(n.join(" "))
    });
