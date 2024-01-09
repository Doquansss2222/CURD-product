const yargs = require('yargs');
const fs = require('fs');
const read_all_product = () => {
    const product = fs.readFileSync("product.json");
   const product_String = product.toString();
   const product_all = JSON.parse(product_String);
   return product_all;
};
const create = (id , name, price , amount) => {
       const productList = read_all_product();
       const new_product = {
            id : Math.random().toString(),
            name,
            price,
            amount
       }
       // thêm vào
       productList.push(new_product);
       // lưu lại vào json
       fs.writeFileSync("product.json", JSON.stringify(productList) );
       return new_product;
};
const ReadDelaiTask = (id) => {
    const productList  = read_all_product();
    const product = productList.find((task) => id === task.id );
    return product;
 };
 const update = (id, name, price, amount, description) => {
    const productList = read_all_product();
    const index = productList.findIndex((product) => id === product.id);
    console.log(index);
      let new_product = {
         name ,
         price ,
         amount ,
         description,
      }
      productList[index] = new_product;
      fs.writeFileSync("product.json", JSON.stringify(productList));
      return new_product;
 };
 const delete_product = (id) => {
    const productList = read_all_product();
    const index = productList.findIndex((product) => id === product.id);
    console.log(index);
        productList.splice(index , 1);
        fs.writeFileSync("product.json", JSON.stringify(productList));
        return productList[index];
 }
 const add_product = (id) => {
   const productList = read_all_product();
   const productadd = productList.find((product)=> id === product.id);
   
  productadd.amount = 50;
   fs.writeFileSync("product.json",JSON.stringify(productList) );
   return productadd;
 }
module.exports = {
    read_all_product , create , ReadDelaiTask,update,delete_product , add_product
}
