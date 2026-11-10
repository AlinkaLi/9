let N=11;
let name="Комягіна Аліна Сергіївна";
window.onload=function(){
alert (N + " " + name);};
function areaCylinder(){
 let N = parseFloat(document.forma1.t0.value);
   let r=3*N-5;
   document.forma1.t1.value=r; 
   let h= N-2;
   document.forma1.t2.value=h;
   let s=2*Math.PI*r*(r + h); 
   document.forma1.res.value=s; 
   document.forma1.res.value = s.toFixed(2);
}
