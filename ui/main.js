console.log('Loaded!');
var element=document.getElementById("main-text");
element.innerHTML="new value";
//move image
var img=document.getElementById('madi');
var marginLeft=0;
function moveRight()
{
    marginLeft=marginLeft+1;
    img.style.marginLeft=marginLeft+'px';
}
img.onclick=function()
{
  var interval=setinterval(moveRight,50);  
};