import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import firebase from "firebase";
import "./i18n";

const SuspenseFallback = () => (
  <div></div>
)

var firebaseConfig = {
  apiKey: "AIzaSyBdEYzrWJuwcD9muyqe_jA_hzkSmnG4y-s",
  authDomain: "wemuda-website.firebaseapp.com",
  projectId: "wemuda-website",
  storageBucket: "wemuda-website.appspot.com",
  messagingSenderId: "664301339227",
  appId: "1:664301339227:web:381a1e9860abf4d1e6f57e",
  measurementId: "G-5DP1XMVMBC"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={SuspenseFallback}>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </Suspense>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
