// Rewrite the following normal functions into callback functions.

function add(x, y, callback) {
  setTimeout(function(){
      var result = x + y;
      callback(result);
}, 1000);
}

add(3,5,function(result){
    console.log(result);
});

function subtract(x, y, callback) {
    setTimeout(function(){
    var result = x - y;
    callback(result);    
    }, 1000);
}

subtract(14,2,function(result){
    console.log(15-result);
});

function greeting(person, callback) {
    setTimeout(function(){
    callback(person);    
    }, 1000);
}

greeting('Shibei', function(person) {
    console.log('Hola, ' + person + '!');
});

function product(numbers, callback) {
    setTimeout(()=>{
    console.log(numbers.reduce(callback, 1));    
    }, 1000);
}

product([4,2,3], function (a, b)  {
    return a * b;
});
