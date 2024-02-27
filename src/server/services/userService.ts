export const userService = {
  authenticate,
};

function authenticate(email: string, password: string) {
  let response;
  try {
    response = fetch("http://localhost:3000/api/login-user", {
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
