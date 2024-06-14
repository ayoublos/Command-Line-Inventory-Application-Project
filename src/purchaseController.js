const {writeFileSync,readFileSync}=require(`node:fs`)

function writeFileFunction(location,file,data){
    data=JSON.stringify(data);
    return writeFileSync(`${location}/${file}`,data,{encoding:`utf-8`})

}
function readFileFunction(location,file){
    const purchases=readFileSync(`${location}/${file}`,`utf-8`);
    return purchases?JSON.parse(purchases):[]
}

module.exports={writeFileFunction,readFileFunction}