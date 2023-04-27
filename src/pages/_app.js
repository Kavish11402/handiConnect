import '@/styles/globals.css'
import MasterContext from "@/Context/MasterContext";
import NextNProgress from "nextjs-progressbar";
import React from "react";
import {Toaster} from "react-hot-toast";

export default function App({ Component, pageProps }) {
  return(
      <>
          <Toaster/>
          <MasterContext>
              <NextNProgress color={"#F59E0B"} options={{ showSpinner: false, easing: "ease" }} />
              <Component {...pageProps} />
          </MasterContext>
      </>
  );
}
