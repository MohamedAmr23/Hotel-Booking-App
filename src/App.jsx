import React from "react";
import Routes from "./Router/Routes";
import { ClerkProvider } from "@clerk/clerk-react";

// Import your Publishable Key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}
const App = () => {
  return (
    <>
      <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
        <Routes />
      </ClerkProvider>
    </>
  );
};

export default App;
