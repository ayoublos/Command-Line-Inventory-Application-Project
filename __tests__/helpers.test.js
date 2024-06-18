const{addToCart,clear,create,destroy,show,index, update,made,expensive}=require(`../src/helpers`)
test(`testing the create command`,()=>{
    let newObj=create([],`boots`,`10000`)[0]
    delete newObj[`id`]
    delete newObj[`madeInStates`]
    
    expect(newObj).toEqual({name:`boots`,priceInCents:`10000`,inStock:true})
})
test(`testing the clear command`,()=>{
   
    
    expect(clear()).toEqual([])
})
test(`testing the index command`,()=>{
   
    
    expect(index([{"id":"BUoh9lmkqo","name":"no designation","priceInCents":"0","inStock":true,"madeInStates":false}])).toEqual("id:BUoh9lmkqo$ name:no designationpriceInCents:0 in stock:true")
})
test(`testing the destroy command`,()=>{
   
    
    expect(destroy([{"id":"BUoh9lmkqo","name":"no designation","priceInCents":"0","inStock":true,"madeInStates":false}],`BUoh9lmkqo`)).toEqual([])
})
test(`testing the update command`,()=>{
   
    
    expect(update([{"id":"BUoh9lmkqo","name":"no designation","priceInCents":"0","inStock":true,"madeInStates":false}],`BUoh9lmkqo`,`hat`,`9000`)).toEqual([{"id":"BUoh9lmkqo","name":"hat","priceInCents":"9000","inStock":true,"madeInStates":false}])
})