"use client"; // Si usas Next.js 13+ con el app router

import { useRouter } from 'next/navigation'; // En app router
import { useTranslation } from 'next-i18next';

export default function LanguageSwitcher() {
  const router = useRouter();
  const { i18n } = useTranslation();

  const changeLanguage = (lang) => {
    router.push(`/${lang}`); // Cambia la URL al idioma seleccionado
    i18n.changeLanguage(lang); // Cambia el idioma en i18n
  };

  return (
    <div className="flex space-x-2">
      <button onClick={() => changeLanguage('es')} className="p-2 bg-blue-500 text-white rounded">Español</button>
      <button onClick={() => changeLanguage('en')} className="p-2 bg-blue-500 text-white rounded">English</button>
      <button onClick={() => changeLanguage('fr')} className="p-2 bg-blue-500 text-white rounded">Français</button>
    </div>
  );
}
