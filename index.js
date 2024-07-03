
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
    }, 3000);
  });
}

getdata(1).then((res) => {
  return getdata(2)
}).then((res) => {
    return getdata(3)
  }).then((res)=>{
    console.log(res)
  });
getdata(1, () => {
  getdata(2, ()=>{
    getdata(3, ()=>{
        getdata(4)
    })
  });
});

//  to solve callbacks we use promises

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


function API() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("weather data");
      resolve(200);
    }, 2000);
  });
}

async function getweatherdata() {
  await API();
  await API();
}



function getdata(fetchdata) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("the fetch data is", fetchdata);
      resolve(`Data transfer completed....`);
    }, 3000);
  });
}

// this function needs to be called for execution

async function getalldata() {
  console.log("fetching 1st data ....");
  await getdata(1);
  console.log("fetching 2nd data ....");
  await getdata(2);
  console.log("fetching 3rd data ....");
  await getdata(3);
  console.log("fetching 4th data ....");
  await getdata(4);
  console.log("fetching 5th data ....");
  await getdata(5);
}

// Thanks to IIFE (Immediate invoke function expression)

(async function () {
  console.log("fetching 1st data ....");
  await getdata(1);
  console.log("fetching 2nd data ....");
  await getdata(2);
  console.log("fetching 3rd data ....");
  await getdata(3);
  console.log("fetching 4th data ....");
  await getdata(4);
  console.log("fetching 5th data ....");
  await getdata(5);
})();

