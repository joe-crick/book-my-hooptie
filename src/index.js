import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { I18nextProvider } from "react-i18next";
import i18n from "../i18n/i18next";
import rootStore from "src/stores/store";
import { Provider } from "react-redux";
import App from "./app";
import Header from "components/shared/header/header";
import Footer from "components/shared/footer/footer";
import PageNotFound from "components/shared/error-pages/page-not-found";
import ErrorBoundary from "components/shared/error-boundary/error-boundary";
import countryCode from "./utils/country-code";
import "./site.less";
import styles from "./site.less";

// NOTE: To run bundle analytics: source-map-explorer main.js main.js.map

const Main = () => (
  <BrowserRouter>
    <I18nextProvider i18n={i18n}>
      <Provider store={rootStore}>
        <div>
          <ErrorBoundary>
            <Header />
            <div className={styles.app}>
              <Switch>
                <Route exact path="/" render={() => <Redirect to="/en" />} />
                <Route path={`/:lang(${countryCode})`} component={App} />
                <Route component={PageNotFound} />
              </Switch>
            </div>
            <Footer />
          </ErrorBoundary>
        </div>
      </Provider>
    </I18nextProvider>
  </BrowserRouter>
);

render(<Main />, document.getElementById("app"));
