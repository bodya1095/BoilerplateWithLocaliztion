// Core
import React, { FC } from 'react';

// Components
import { UserMenu } from './UserMenu';

// Images
import logo from '../../../assets/images/logo.png';

// Styles
import { TopbarContainer, Logo } from './styles';
import { LanguageToggler } from '../LanguageToggler/languageToggler';

// Localization
import { FormattedMessage } from 'react-intl';

export const TopBar: FC = () => {
    return (
        <TopbarContainer>
            <Logo src = { logo } />
            <h1>
                <FormattedMessage
                    defaultMessage = 'BoilerPlate'
                    id = 'header.title'
                />
            </h1>
            <div>
                <LanguageToggler/>
                <UserMenu />
            </div>
        </TopbarContainer>
    );
};
