function Add(a,b){
    var sum = a+b;
    return (sum);
}
function Sub(a,b){
    var sum = a-b;
    return (sum);
}
function Div(a,b){
    var sum = a/b;
    sum = sum.toFixed(2)
    return (sum);
}
function Multiply(a,b){
    var sum = a*b;
    return (sum);
}
export default Add;
export {Sub, Div, Multiply};