import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          "header": "Adopt a Robot with Robot Lovers!",
          "table": {
            "id": "ID",
            "name": "Name",
            "model": "Model",
            "manufacturer": "Manufacturer"
          },
          "details": {
            "manufacturingYear": "Manufacturing Year",
            "processingCapacity": "Processing Capacity",
            "humor": "Humor"
          },
          "contact": "Contact us: +57 3102105253 - info@robot-lovers.com - @robot-lovers",
          "login": {
            "title": "Login",
            "username": "Username",
            "password": "Password",
            "submit": "Login",
            "cancel": "Cancel",
            "error": "Authentication error. Please check your credentials."
          }
        }
      },
      es: {
        translation: {
          "header": "Adopta un Robot con Robot Lovers!",
          "table": {
            "id": "ID",
            "name": "Nombre",
            "model": "Modelo",
            "manufacturer": "Empresa Fabricante"
          },
          "details": {
            "manufacturingYear": "Año de Fabricación",
            "processingCapacity": "Capacidad de Procesamiento",
            "humor": "Humor"
          },
          "contact": "Contáctanos: +57 3102105253 - info@robot-lovers.com - @robot-lovers",
          "login": {
            "title": "Inicio de sesión",
            "username": "Nombre de usuario",
            "password": "Contraseña",
            "submit": "Ingresar",
            "cancel": "Cancelar",
            "error": "Error de autenticación. Revise sus credenciales."
          }
        }
      }
    },
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;