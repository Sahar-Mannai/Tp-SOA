const grpc= require('grpc');
const protoLoader= require('@grpc/proto-loader');
const packageDef= protoLoader.loadSync("calculatrice.proto",{});
const grpcObject= grpc.loadPackageDefinition(packageDef);
const todoPackage =grpcObject.todoPackage;

const server = new grpc.Server();
server.bind('localhost:9000',grpc.ServerCredentials.createInsecure());
server.addService(todoPackage.calculatrice.service,{
    'addition' : addition,
    'division'  : division,
    'multiplication':multiplication,
    'soustraction':soustraction
});

server.start();


function addition(call, callback)
{
    const ResItem={
        'res' : call.request.a + call.request.b,
        'msg' : 'succés'
    }

    callback(null,ResItem);
}


function soustraction(call, callback)
{
    const ResItem={
        'res' : call.request.a - call.request.b,
        'msg' : 'succés'
    }

    callback(null,ResItem);
}


function multiplication(call, callback)
{
    const ResItem={
        'res' : call.request.a * call.request.b,
        'msg' : 'succés'
    }

    callback(null,ResItem);
}


function division(call, callback)
{
    
    if(call.request.b==0)
    {
        const ResItem={
            'msg' : 'division impossible'
        }
        callback(null,ResItem);

    }
    else{
        const ResItem={
            'res' : call.request.a / call.request.b,
            'msg' : 'succés'
        }
        callback(null,ResItem);

    }
    
}