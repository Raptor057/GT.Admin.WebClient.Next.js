export default function Page() {
  const { t } = useTranslation('common'); // 'common' es tu archivo JSON en locales
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-3xl font-bold text-gray-800">
          Login.
        </h1>
        <h1>{t('welcome')}</h1>  {/* Muestra el texto traducido */}
      </div>
    );
  }