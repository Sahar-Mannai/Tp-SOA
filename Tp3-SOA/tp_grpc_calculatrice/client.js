const grpc= require('grpc');
const protoLoader= require('@grpc/proto-loader');
const packageDef= protoLoader.loadSync("calculatrice.proto",{});
const grpcObject= grpc.loadPackageDefinition(packageDef);
const todoPackage =grpcObject.todoPackage;

const client = new todoPackage.calculatrice('localhost:9000',grpc.credentials.createInsecure());

client.addition({
     'a' :3,
     'b' : 2
    },(err, response) =>{
    console.log('Resultat addition' +JSON.stringify(response));
})


client.multiplication({
    'a' :4,
    'b' : 2
   },(err, response) =>{
   console.log('Resultat multiplication ' +JSON.stringify(response));
})

client.division({
    'a' :6,
    'b' : 4
   },(err, response) =>{
   console.log('Resultat  division' +JSON.stringify(response));
})

client.soustraction({
    'a' :1,
    'b' : 2
   },(err, response) =>{
   console.log('Resultat soustraction ' +JSON.stringify(response));
})