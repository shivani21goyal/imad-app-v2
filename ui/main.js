//counter code
var button=document.getElementById('counter');
var counter=0;
button.onclick=function()
{
    //make a request to counter endpoint
    //capture the response and store it in variable
    //render the variable in thr correct span
    counter =conter+1;
    var span=document.getElementById('count');
    span.ineerHTML=counter.toString();
}
