import NextAuth from "next-auth";
import Providers from "next-auth/providers";

const options = {
  providers: [
    Providers.Twitter({
      clientId: process.env.TWITTER_ID,
      clientSecret: process.env.TWITTER_SECRET,
    }),
  ],
  callbacks: {
    async jwt(token, user, account) {
      console.log(token, user, account);
    }
  }
};

export default (req, res) => NextAuth(req, res, options);
