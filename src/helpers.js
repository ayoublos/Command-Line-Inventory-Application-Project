const{nanoid}=require(`nanoid`)

function create(purchases,name,price){
const newPurchase={
    id:nanoid(10),
    name:name||`no designation`,
    priceInCents:price||`0`,
    inStock:true,
}
purchases.push(newPurchase)
return purchases
}
function destroy(purchases,id){
    return purchases.filter(purchase=>purchase.id!==id)

}
function show(purchases,id){
    let string=JSON.stringify(purchases.find(purchase=>purchase.id===id))
    return string.slice(1,string.length-1)
}
function index(purchases){
    return purchases.map(purchase=>`id:${purchase.id}$ name:${purchase.name}priceInCents:${purchase.priceInCents} in stock:${purchase.inStock}`).join(`\n`)
}
function update(purchases,id,name,price){
    let index=purchases.findIndex(purchase=>purchase.id===id);
    purchases[index].id=id;
    purchases[index].name=name;
    purchases[index].priceInCents=price
    return purchases
}
function clear(){
    return []
}
function addToCart(purchases,addToCart,id){
    let item=purchases.find(purchase=>purchase.id===id)
    addToCart.push(item)
    return addToCart

}

module.exports={addToCart,clear,create,destroy,show,index,update}