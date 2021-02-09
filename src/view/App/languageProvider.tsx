import React, { useState, FC } from 'react';
import { IntlProvider } from 'react-intl';
import Ukrainian from '../../lang/ua.json';
import English from '../../lang/en.json';

type contextPropsType = {
    locale: string,
    selectLanguage: (event:React.ChangeEvent<{value:string}>) => void,

};

type languageProps = {
    children?: React.ReactNode
}
export const LanguageContext = React.createContext<Partial<contextPropsType>>({});


const localLang = navigator.language;
console.log(localLang);
let language:any = null;
if (localLang === 'ua') { language = Ukrainian; } else {
    language = English;
}


export const LanguageProvider:FC<languageProps> = ({ children }) => {
    const [ locale, setLocale ] = useState(localLang);
    const [ text, setText ] = useState(language);

    const selectLanguage = (event:React.ChangeEvent<{value:string}>) => {
        const newLocale = event.target.value;
        setLocale(newLocale);
        if (newLocale === 'ua') {
            setText(Ukrainian);
        } else {
            setText(English);
        }
    };

    return (
        <LanguageContext.Provider value = {{ locale, selectLanguage }}>
            <IntlProvider
                locale = { locale }
                messages = { text }>
                {children}
            </IntlProvider>
        </LanguageContext.Provider>
    );
};
