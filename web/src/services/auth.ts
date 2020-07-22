import api from "./api";

interface Response {
  token: string;
  user: {
    user: string;
  };
}

interface Data {
  user: string;
}

// Auth promise example
export async function signIn(data: Data) {
  let response = {
    token: "",
    user: {
      user: data.user,
    },
  };

  await api
    .post("Auth", data)
    .then((res) => {
      console.log(res);
      response.token = res.data;
    })
    .catch((error) => console.log(error));

  if (response.token !== "") {
    return response;
  }

  return "Ocorreu um erro";
}

// new Promise(resolve => {
//     setTimeout(() => {
//         resolve({
//             token: 'kdasvdhbhubsacax312sda',
//             user: {
//                 name: 'Matheus Pires Santos',
//                 email: 'matheus@email.com',
//                 cargo: 'Administrado'
//             },
//         });
//     }, 2000);
// });
