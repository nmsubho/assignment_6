import AppProvider from "@/config/app.context";
import "@/styles/globals.css";
import { Toaster } from "react-hot-toast";

// export default function App({ Component, pageProps }) {
//   // Use the layout defined at the page level, if available
//   const getLayout = Component.getLayout || ((page) => page);

//   return getLayout(
//     <AppProvider>
//       <Component {...pageProps} />
//       <Toaster position="top-center" />
//     </AppProvider>
//   );
// }


import { SessionProvider } from "next-auth/react"

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  const getLayout = Component.getLayout || ((page) => page);
  return (
    <SessionProvider session={session}>
      {getLayout(
        <AppProvider>
          <Component {...pageProps} />
          <Toaster position="top-center" />
        </AppProvider>
      )}
    </SessionProvider>
  );
}