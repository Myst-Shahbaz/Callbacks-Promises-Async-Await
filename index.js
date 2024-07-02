
function sum(a, b) {
  console.log(a + b);
}
function calculator(a, b, sumcallback) {
  sumcallback(a, b);
}
calculator(1, 2, sum);

const hello = () => {
  console.log("hello");
};

setTimeout(hello, 3000);

function getdata(fetchdata, getnextdata) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`the fetch data is ${fetchdata}`);
      resolve(`Data transfer completed....`);
      if (getnextdata) {
        getnextdata();
      }
    }, 5000);
  });
}

getdata(1, () => {
  getdata(2, ()=>{
    getdata(3, ()=>{
        getdata(4)
    })
  });
});

// to solve callbacks we use promises

let promise = new Promise((resolve, reject) => {
  reject("due to high occurance");
  console.log("i am a promise");
});

