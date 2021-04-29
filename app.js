var routeResponseMap={
    "/info":"<h1>Info Page</h1>"
}
var http=require('http');
var fs=require('fs');
var moduleN=require('./moduleN');
const getJSONString = obj => {
    return JSON.stringify(obj, null, 2);
   };
function onRequest(request,response){
    if(routeResponseMap[request.url]){
        response.end(routeResponseMap[request.url])
    }
    var body=[];
    request.on('data',(bodyData)=>{
             body.push(bodyData);
    });
    response.writeHead(200,{'content-type':'text/html'})
    fs.readFile('./index.html',null,function(error,data){
        if(error){
            response.writeHead('404');
            response.write('file not found')
        }else{
            response.write(data);
        }
        response.end()
        console.log(`Method: ${getJSONString(request.method)}`);
    });
    
}
http.createServer(onRequest).listen(8080);
