import React from "react";
import { translate } from "react-i18next";

export const PageNotFound = ({ t: translate }) => <h1>{translate("pageNotFound.message")}</h1>;

export default translate()(PageNotFound);
