// let url = "https://jsonplaceholder.typicode.com/users";
// //fetch
// fetch(url)
//   .then((data) => data.json())
//   .then((json) => console.log(json))
//   .catch((err) => {
//     console.log(err);
//   });

async function getUserList() {
  console.log("user list");
  let url = "https://jsonplaceholder.typicode.com/users";
  let response = await fetch(url);
  console.log(response);
  response = response.json();
  console.log(response);
  return response;
}

async function postUserList() {
  console.log("user list");
  let url = "https://jsonplaceholder.typicode.com/users";
  let options = {
    method: "POST",
    headers: {},
    body: JSON.stringify({
      id: 11,
      name: "test",
      username: "test",
      email: "test@gmail.com",
    }),
  };
  let response = await fetch(url, options);
  console.log(response);
  response = response.json();
  console.log(response);
  return response;
}

async function getHome() {
  console.log("get Home");

  let postapiData = await postUserList();
  console.log(postapiData);
  let apiData = await getUserList();
  console.log(apiData);
}
getHome();
