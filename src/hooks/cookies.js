import Cookies from 'js-cookie';

export const safeJSONparse = (input) => {
  try {
    return JSON.parse(input);
  } catch (e) {
    return null;
  }
};
export const setLanguage = (language) => Cookies.set('language', JSON.stringify(language));

export const getLanguage = () => safeJSONparse(Cookies.get('language'));
export const removeLanguage = () => Cookies.remove('language');
