const{nanoid}=require(`nanoid`)

function create(purchases,name,price){
const newPurchase={
    id:nanoid(10),
    name:name,
    priceInCents:price,
    inStock:false,
}
purchases.push(newPurchase)
return purchases
}

module.exports={create}