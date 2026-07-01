import { betterAuth } from "better-auth";
import { prisma } from "./prisma";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { twoFactor } from "better-auth/plugins";
import { Resend } from "resend";
import { admin } from "better-auth/plugins";
import { adminRole, userRole } from "./permissions";

const resend = new Resend("re_eWCkxn5h_LmbinjiEBWM57AKs4ouViKuq");

export const auth = betterAuth({
  appName: "Lab Log",
  baseUrl: process.env.BETTER_AUTH_URL as string,
  basePath: "/api/v1/auth",

  database: prismaAdapter(prisma, {
    provider: "postgresql", // or "mysql", "postgresql", ...etc
  }),

  trustedOrigins: [process.env.FRONTEND_URL!],

  // rateLimit: {
  //   enabled: true,
  //   window: 60,
  //   max: 100,
  // },

  advanced:{
    cookiePrefix:"LobLog"
  },

  emailAndPassword: {
    enabled: true,
  },
  //github login
  socialProviders: {
    github: {
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
      redirectURI: `${process.env.FRONTEND_URL}/api/auth/callback/github`,
    },
  },
  plugins: [
    admin({
      adminRoles: ["admin", "user"],
      defaultRole: "user",
      roles: {
        admin: adminRole,
        user: userRole,
      },
    }),

    twoFactor({
      otpOptions: {
        period: 3,
        async sendOTP({ user, otp }, ctx) {
          console.log({ user, otp });

          await resend.emails.send({
            from: "LabLog <onboarding@resend.dev>",
            to: user.email,
            subject: "Two factor authentication",
            html: `<p>Your otp is ${otp}</p>`,
          });
        },
      },
    }),
  ],
});
