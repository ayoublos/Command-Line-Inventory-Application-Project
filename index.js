const{readFileFunction,writeFileFunction}=require(`./src/purchaseController`)

const{clear,create,destroy,show,index, update}=require(`./src/helpers`)

function run(){
    const purchases=readFileFunction(`data`,`purchases.json`)
    const action=process.argv[2];
    const purchaseName=process.argv[3];
    const purchaseId=process.argv[3];
    const name=process.argv[4];
    const price=process.argv[5]
    const priceInCents=process.argv[4]

    let updatedList=[]
    let writeToFile=false;
    switch(action){
        case `create`: 
            updatedList=create(purchases,purchaseName,priceInCents)
            writeToFile=true;
            break;
            case `update`:
                updatedList=update(purchases,purchaseId,name,price)
                writeToFile=true;
            break;
            case `show`:
            console.log(show(purchases,purchaseId))
            writeToFile=false;
            break;
    case `index`:
        console.log(index(purchases))
        writeToFile=false;
        break;
    case `destroy`:
        updatedList=destroy(purchases,purchaseId)
        writeToFile=true
        break;
    case `clear`:
        updatedList=clear()
        writeToFile=true
        break;
   }
   if(writeToFile){
    writeFileFunction(`data`,`purchases.json`,updatedList)
   }
}
run()