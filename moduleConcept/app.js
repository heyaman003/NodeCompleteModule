import {helper} from './helper.js'
helper();


const test=async()=>{
  const res=await fetch('https://dummyjson.com/products');
  const data=await(res.json())
  console.log(JSON.stringify(data))
  //console.log(data);
}
test()