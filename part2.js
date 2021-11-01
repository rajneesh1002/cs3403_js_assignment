var x = 10;
console.log("In global: x=" + x + " (Because we are printing a global variable.)");
function a() {
    var x = 20;
    console.log("a: x= " + x + "  (Because inside function a() we have set another value for variable x. )"); 
    b(); 
} 

function b() {
    console.log("b: x= " + x + "  (Because function b() is defined outside of function a(). )");
} 

function c() {
    console.log("c: x= " + x + "  (Because function b() is defined as well as called globally. )");
} 
a(); 

c();