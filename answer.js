function divide(a, b) {
  return new Promise((resolve, reject) => {
    let c = a / b;
    if (c === Infinity || Number.isNaN(c)) {
      reject("you made an error");
    } else {
      resolve(c);
    }

    //   try {
    //   let c = a / b;
    //   if (c === Infinity || c === NaN) {
    //     throw new Error("message");
    //   } else {
    //     resolve(c);
    //   }
    // } catch (e) {
    //   reject(e);
    // }
  });
}

divide(10, 2)
  .then((result) => {
    console.log(`Division Sucess: ${result}`);
  })
  .catch((error) => {
    console.log(error);
    //console.log(error);
  });
