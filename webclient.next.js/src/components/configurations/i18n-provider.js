"use client";

import { appWithTranslation } from 'next-i18next';

function I18nProvider({ children }) {
  return <>{children}</>;
}

export default appWithTranslation(I18nProvider);
