const{nanoid}=require(`nanoid`)

function create(purchases,name,price){
    let array=[true,false]
    let randomIndex=Math.floor(Math.random()*2)
    console.log(randomIndex)
    
const newPurchase={

    id:nanoid(10),
    name:name||`no designation`,
    priceInCents:price||`0`,
    inStock:true,
    madeInStates:array[randomIndex]
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
    // let purchaseId=id||purchases[index].id
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
function made(purchases){
    return purchases.filter(el=>el.madeInStates)

}
function expensive(purchases){
    return purchases.filter(el=>+el.priceInCents>100)

}

module.exports={addToCart,clear,create,destroy,show,index,update,made,expensive}