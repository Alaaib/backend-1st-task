const fs =require("fs")
const customersData= require("./customersData")
const yargs=require("yargs")
//add
yargs.command({
    command:"add",
    describe:"this command is to add customer data",
    builder:{
        id:{
            describe:"this command is to view id",
            demandOption:true,
            type: "string"
        },
        firstName:{
            describe:"this command is to view first name",
            demandOption:true,
            type: "string"
        },
        lastName:{
            describe:"this command is to view last name",
            demandOption:true,
            type: "string"
        },
        age:{
            describe:"this command is to view age",
            demandOption:false,
            type: "string"
        },
        city:{
            describe:"this command is to view city",
            demandOption:false,
            type: "string"
        }
    },
    handler:(x)=>{
        customersData.addCustomer(x.id,x.firstName,x.lastName,x.age,x.city)
    }
})
//delete
yargs.command({
    command:"delete",
    describe:"this is to delete an item",
    handler:(x)=>{
        customersData.deleteData(x.id)
    }
})
//read
yargs.command({
    command:"read",
    describe:"this is to view an item",
    handler:(x)=>{
        customersData.readData(x.id)
    }
})
//list
yargs.command({
    command:"list",
    describe:"this is to  list customers",
    handler:(x)=>{
        customersData.listData(x)
    }
})


yargs.parse()
