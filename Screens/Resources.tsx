import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';


const resources = {
    en: {
      translation: {
        createAccount: 'Create an account',
        fullName: 'Full Name',
        email: 'Email',
        mobile: 'Mobile',
        password: 'Password',
        nationalId: 'National ID',
        age: 'Age',
        signUp: 'SIGN UP',
        enterFullName: 'Enter your full name',
        enterEmail: 'Enter your email',
        enterMobile: 'Enter your mobile number',
        enterPassword: 'Enter your password',
        enterNationalId: 'Enter your National ID',
        enterAge: 'Enter your age',
        changeToFrench: 'Changer en français',
        changeToEnglish: 'Change to English',
      },
    },
    fr: {
      translation: {
        createAccount: 'Créer un compte',
        fullName: 'Nom complet',
        email: 'E-mail',
        mobile: 'Mobile',
        password: 'Mot de passe',
        nationalId: 'Numéro national d\'identité',
        age: 'Âge',
        signUp: 'S\'INSCRIRE',
        enterFullName: 'Entrez votre nom complet',
        enterEmail: 'Entrez votre e-mail',
        enterMobile: 'Entrez votre numéro de mobile',
        enterPassword: 'Entrez votre mot de passe',
        enterNationalId: 'Entrez votre numéro national d\'identité',
        enterAge: 'Entrez votre âge',
        changeToFrench: 'Changer en français',
        changeToEnglish: 'Change to English',
      },
    },
  };

  i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    interpolation: {
      escapeValue: false,
    },
    compatibilityJSON: 'v3',
    pluralSeparator: '_',
    simplifyPluralSuffix: true
  });

// Define a simple pluralization function
i18n.services.pluralResolver.addRule('en', {
  numbers: [1, 2],
  plurals: function(n:number) {
    return Number(n != 1);
  }
});

i18n.services.pluralResolver.addRule('fr', {
  numbers: [1, 2],
  plurals: function(n:number) {
    return Number(n > 1);
  }
});

export default i18n;