import '@/styles/globals.css'
import MasterContext from "@/Context/MasterContext";
import React from "react";
import {Toaster} from "react-hot-toast";

export default function App({ Component, pageProps }) {
  return(
      <>
          <Toaster/>
          <MasterContext>
              <Component {...pageProps} />
          </MasterContext>
      </>
  );
}
