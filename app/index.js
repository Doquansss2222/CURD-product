const yargs = require('yargs');
const fs = require('fs');
const { read_all_product , create , ReadDelaiTask , update, delete_product , add_product} = require('./model/product')
//node app/index.js create --id="1" --name="quan" --price="500" --amount="4"
yargs.command({
  command: 'create',
  builder: {
    id: {
      type: 'string',
    },
    name: {
      type: 'string',
    },
    price: {
      type: 'number', 
    },
    amount: {
      type: 'number', 
    },
  },
  handler: (args) => {
    const { id, name, price, amount } = args;
    const new_product = create(id , name , price , amount);
    if (new_product) {
      console.log("added product in json :", new_product);
    } else {
      console.log("error");
    }

  },
});
// đọc all   node app/index.js read-all
 yargs.command ({
    command : 'read-all',
    handler: (args) => {
      // gọi hàm
   const product_all = read_all_product();
   if (product_all) {
      console.log("all-pr :", product_all);
   } else {
    console.log("error");
   }
   },
  }
 )

// đọc riêng lẻ
// node app/index.js read --id="1" 
yargs.command({
  command:"read",
  builder : {
    id : {type:"string" ,}
  },
  handler: (args) =>
  { const { id } = args;
    const product = ReadDelaiTask(id);
    if (product) {
      console.log("product :", product);
    } 
    else {
      console.log("Not found");
    }
  },


});
// update node app/index.js update --id="1" --name="quan_ud" --price="3000" --amount="100" --description="hihi"
yargs.command({
  command : "update ",
  builder: {
    id: {
      type: 'string',
    },
    name: {
      type: 'string',
    },
    price: {
      type: 'number', 
    },
    amount: {
      type: 'number', 
    },
    description : {
      type : "string",
    }
  },
  handler : (args) => {
    const { id, name, price, amount,description } = args;
    const new_product = update(id , name , price, amount, description);
    if (new_product) {
      console.log("update :", new_product);
    } else {
      console.log("error");
    }


  }
});
//delete node app/index.js delete --id="1"
yargs.command({
  command:"delete",
  builder : {
    id : {type:"string" ,}
  },
  handler: (args) =>
  { const { id } = args;
    const product = delete_product(id);
    if (product) {
      console.log("delete :", product);
    } 
    else {
      console.log("Not found");
    }
  },
});
// add 50 mount  : node app/index.js add-product --id="1"
 yargs.command (
  {
  command: 'add-product',
  builder: {
    id : {type : "string"}
  },
  handler: (args) => {
      const { id } = args;
      const product = add_product(id);
      if (product) {
        console.log("add amount:", product);
      } else {
        console.log("error");
      }
  }
  }
 )

yargs.parse();
