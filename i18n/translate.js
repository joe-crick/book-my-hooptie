import React from "react";
import { I18n } from "react-i18next";

// unused
import i18n from "./i18next";

export default ({ keyName }) => <I18n>{t => <React.Fragment>{t(keyName)}</React.Fragment>}</I18n>;
