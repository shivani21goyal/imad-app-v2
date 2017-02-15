console.log('Loaded!');
var element=document.getElementById("main-text");
element.innerHTML="new value";
//move image
var img=document.getElementById('madi');
var marginLeft=0;
function moveRight()
{
    marginLeft=marginLft+10;
    img.style.marginLeft=marginLeft+'px';
}
img.onclick=function()
{
  img.style.marginLeft='100px';  
};