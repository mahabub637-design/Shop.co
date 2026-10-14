// import { createAuthClient } from "better-auth/react";

// export const authClient = createAuthClient({
//   /** The base URL of the server (optional if you're using the same domain) */
//   baseURL: "http://localhost:3000",
// });

// export const { useSession, signIn, signOut } = authClient;

import { createAuthClient } from "better-auth/react"; // 👈 Ensure "/react" is at the end

export const authClient = createAuthClient({
    baseURL: process.env.NEXT_PUBLIC_APP_URL // or your base URL configuration
});

// 👈 You MUST explicitly export the hook so your components can import it
export const { useSession } = authClient; 
