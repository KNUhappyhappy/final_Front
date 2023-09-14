import React from "react";
import ReactDOM from "react-dom/client";
import "./css/common.css";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { GoogleOAuthProvider } from "@react-oauth/google";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GoogleOAuthProvider
      clientId="405167826298-s3a0rdn0e407de1upa54vvrhrshaiu18.apps.googleusercontent.com"
      onScriptLoadError={() => console.log("실패")}
      onScriptLoadSuccess={() => console.log("성공")}
    >
      <App />
    </GoogleOAuthProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
