import React,  { useContext }  from 'react';
import { LanguageContext } from '../../App/languageProvider';

export const LanguageToggler = () => {
    const context = useContext(LanguageContext);

    return (
        <select
            value = { context.locale }
            onChange = { context.selectLanguage }>
            <option value = 'en'>English</option>
            <option value = 'ua'>Ukrainian</option>


        </select>
    );
};
