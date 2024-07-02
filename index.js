/*
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


const getPromise = () => {
  return new Promise((resolve, reject) => {
    console.log("i am a promise");
    resolve("successfully ....");
    // reject("API doesn't found ....");
  });
};

let promise = getPromise();
promise.then((res) => {
  console.log("promise fulfilled", res);
});

promise.catch((err) => {
  console.log("rejected", err);
});

*/

function asyncfunction_localserver1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("API Data 1");
      resolve("API Data 1 access granted completely and show you the data");
    }, 3000);
  });
}
function asyncfunction_localserver2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("API Data 2");
      resolve("API Data 2 access granted completely and show you the data");
    }, 6000);
  });
}

console.log("fetching Provided Data ....");
asyncfunction_localserver1().then((res) => {
  console.log("fetching user Data ....");
  asyncfunction_localserver2().then((res) => {
    console.log(res);
  });
});
