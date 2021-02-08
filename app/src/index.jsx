import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import i18n from "I18n/i18n.config";
import { I18nextProvider } from "react-i18next";
import Root from "Core/root";
import store, { history } from "Redux/store/store";
import App from '../src/components/App';
import './css/index.css'


ReactDOM.render(
  <div>
  <I18nextProvider i18n={i18n}>
    <Suspense fallback="loading">     
       <App />
    </Suspense>
  </I18nextProvider>
  </div>,
  document.getElementById("target")
);
