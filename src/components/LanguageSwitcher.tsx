import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'bn' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <Button 
      variant="outline" 
      onClick={toggleLanguage}
      className="font-medium"
    >
      {i18n.language === 'en' ? 'বাংলা' : 'English'}
    </Button>
  );
};
