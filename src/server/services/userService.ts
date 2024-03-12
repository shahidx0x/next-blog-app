export const userService = {
  authenticate,
  createUser,
};

function authenticate(email: string, password: string) {
  let response;
  try {
    response = fetch(`/api/login-user`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((res) => res.json())
      .catch((error) => console.log(error));
  } catch (error) {
    console.log(error);
  }

  return response;
}

function createUser(email: string, password: string) {
  let response;
  try {
    response = fetch(`/api/create-user`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((res) => res.json())
      .catch((error) => console.log(error));
  } catch (error) {
    console.log(error);
  }

  return response;
}