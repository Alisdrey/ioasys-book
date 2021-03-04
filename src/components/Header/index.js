import React from 'react';
import { Header, Logo, Welcome } from './style';
import { getName, logout } from '../../services/auth'
import iconExit from '../../assets/icon/icon-exit.svg';
import logoBlack from '../../assets/img/logo-black.svg';

export default function HeaderComponent() {

    return (
        <>
            <Header>
                <Header.Body>
                    <Logo>
                        <Logo.Image logo={logoBlack} />
                        <Logo.Text>Books</Logo.Text>
                    </Logo>
                    <Welcome>
                        <Welcome.Name>Bem vindo, <label className="font-w-bold">{getName()}</label></Welcome.Name>
                        <Welcome.Icon src={iconExit} onClick={() => logout()} />
                    </Welcome>
                </Header.Body>
            </Header>
        </>
    );
}
