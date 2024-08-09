import connectMongoDB from "@/lib/mongodb";
import User from "@/models/user";
import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import { signIn } from "next-auth/react";

const authOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
    ],
    callbacks: {
        async signIn({user, account}) {
            console.log("user: ", user);
            console.log("account: ", account);
            // check that it is a google provider
            if (account.provider === 'google') {
                const {name, email} = user;
                try {
                    // make sure user does not already exist in DB
                    await connectMongoDB();

                    const userExists = await User.findOne({ email })

                    // if user does not exist, get details and post to DB
                    if (!userExists) {
                        const res = await fetch('http://localhost:3000/api/user', {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                            },
                            body: JSON.stringify({
                                name,
                                email,
                            }),
                        });
                        if (res.ok) {
                            return user;
                        }
                    }
                } catch (error) {
                    console.log("error: ", error);
                }
            }
            return user;
        }
    }
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST};