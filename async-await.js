function getApiData() {
  let userInfo = {
    userId: 12,
    name: "test",
    address: "XYZ",
  };
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(userInfo);
    }, 2000);
  });
  //   setTimeout(() => {
  //     return userInfo;
  //   }, 2000);
}

async function homePage() {
  let apiRecord = await getApiData();
  console.log(apiRecord);
  console.log("home page");
}

homePage();
