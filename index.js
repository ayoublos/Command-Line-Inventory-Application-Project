const{readFileFunction,writeFileFunction}=require(`./src/purchaseController`)

const{create}=require(`./src/helpers`)

function run(){
    const purchases=readFileFunction(`data`,`purchases.json`)
    const action=process.argv[2];
    const purchaseName=process.argv[3];
    const priceInCents=process.argv[4]
   let updatedList=[]
   let writeToFile=false;

   switch(action){
    case `create`:
        updatedList=create(purchases,purchaseName,priceInCents)
        break;
    case `update`:
        break;
    case `show`:
        break;
    case `index`:
        break;
    case `destroy`:
        break;
   }
}
run()