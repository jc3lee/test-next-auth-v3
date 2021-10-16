import { getSession } from "next-auth/client";
import { getToken } from "next-auth/jwt";

export default async (req, res) => {
  const session = await getSession({ req, });
  console.log("session", session);
  // const token = await getToken({ req })
  // console.log("token", token);
  if (session) {
    res.send({
      content: "Welcome to the secret page",
    });
  } else {
    res.send({
      error: "You need to be signed in.",
    });
  }
};
