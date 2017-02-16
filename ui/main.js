//counter code
var button=document.getElementById('counter');
button.onclick=function()
{
    var request=new XMLHttpRequest();
    
    //create a request object
    request.onreadystatechange=function()
    {
    if(request.readystate==XMLHttpRequest.DONE)
    {
    //take some action
    if(request.status==200)
    {
        var counter=request.responseTest;
    var span=document.getElementById('count');
    span.innerHTML=counter.toString();
    }
    }
    //not done yet
};request.open('GET','http://shivani21goyal.imad.hasura-app.io/counter',true);
request.send(null);
};

