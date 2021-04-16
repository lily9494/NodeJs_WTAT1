var http=require('http');
var fs=require('fs');
var moduleN=require('./moduleN');
function onRequest(request,response){
    response.writeHead(200,{'content-type':'text/html'})
    fs.readFile('./index.html',null,function(error,data){
        if(error){
            response.writeHead('404');
            response.write('file not found')
        }else{
            response.write(data);
        }
        response.end()
    });
    
}
http.createServer(onRequest).listen(8080);
