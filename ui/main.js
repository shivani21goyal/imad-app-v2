//counter code
var button=document.getElementById('counter');
button.onclick=function()
{
    var request=new XMLHttpRequest();
    //create a request object
    request.onreadystatechange=function()
        {
             if(request.readyState==XMLHttpRequest.DONE)
             {
                 //take some action
                 if(request.status==200)
                 {
                          var counter=request.responseText;
                          var span=document.getElementById('count');
                          span.innerHTML=counter.toString();
                 }
             }
                            //not done yet
    };
         request.open('GET','http://shivani21goyal.imad.hasura-app.io/counter',true);
         request.send(null);
};
var nameInput=document.getElementById('name');
var name=nameInput.value;
var submit=document.getElementById('submit_btn'); 
submit.onclick=function()
{
    //make a request to the server and send the name
    
    //capture the list of names and render it as a list
    var names=['name1','name2','name3','name4'];
    var list='';
    for(var i=0;i<names.length;i++)
    {
        list+='<li>' +names[i]+'<li>';
    }
        var ul=document.getElementById('namelist');
        ul.innerHTML=list;
    };