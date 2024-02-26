
const fs= require("fs")
//add
const addCustomer=(id,firstName,lastName,age,city)=>{
    const allData=loadData()
    const duplicatedData= allData.filter((obj)=>{
        return obj.id===id
    })
    if (duplicatedData.length==0){
        allData.push({
        id:id,
        firstName:firstName,
        lastName:lastName,
        age:age,
        city:city
    })
    saveAllData(allData)
}
else{
    console.log("ERROR DUPICATED id")
}
}


const loadData=()=>{
    try{
    const dataJson= fs.readFileSync("Data10.json").toString()
    return JSON.parse(dataJson)
}
catch{
    return[]
}
}

const saveAllData=(allData)=>{
    const AllDataJson=JSON.stringify(allData)
    fs.writeFileSync("data10.json", AllDataJson)
}
//list
const listData=()=>{
    const allData=loadData()
    allData.forEach(obj => {
        console.log (obj.firstName, obj.age, obj.city)
    }
    )
}
//delete
const deleteData=(id)=>{
    const allData=loadData()
    const dataToKeep=allData.filter((obj)=>{
        return obj.id!==id;
    })
    saveAllData(dataToKeep)
        console.log("deleted")
}
//read
const readData=(id)=>{
    const allData=loadData()
    const neededItem= allData.find((obj)=>{
        return obj.id==id
    }
    )
    if(neededItem){
        console.log(neededItem)
    }
    else{
        console.log("id needed is not found")
    }
}
module.exports={
    addCustomer,
    deleteData,
    readData,
    listData
}