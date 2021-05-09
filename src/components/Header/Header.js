import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Liked } from '../../svg/heart.svg';
import { ReactComponent as Send } from '../../svg/send.svg';
import { ReactComponent as Compass } from '../../svg/compass.svg'; 

const Nav = styled.div`
background-color: #fff;
border-bottom: 1px solid rgba(0, 0, 0, 0.0975);
`;

const NavHeader = styled.div`
    max-width: 1010px;
    padding: 26px 20px;
    width: 100%;
    display: flex;
    align-items: center;
    margin: 0 auto;
`;

const NavLeft = styled.div`
    width: 33.33%;
    text-align: left;
`;

const NavCenter = styled.div`
    width: 33.33%;
    text-align: center;
`;

const Input = styled.div`
    font-size: 16px;
    border: solid 1px #dbdbdb;
    border-radius: 3px;
    color: #999;
    cursor: text;
    font-size: 14px;
    font-weight: 300;
    text-align: center;
    background: #fafafa;

    &:active,
    &:focus {
        text-align: left;
    }
`;

const NavRight = styled.div`
    width: 33.33%
    text-align: right;

    svg {
        margin-right: 20px;
    }
`;

const MenuLink = styled.a``;

function Header () {
    return (
        <Nav>
            <NavHeader>
                <NavLeft>
                    Stylagram
                </NavLeft>
                <NavCenter>
                    <input type="text" placeholder="Search" />
                </NavCenter>
                <NavRight>
                    <MenuLink href="#">
                        <Send />
                    </MenuLink>
                    <MenuLink href="#">
                       <Compass />
                    </MenuLink>
                    <MenuLink href="#">
                        <Liked />
                    </MenuLink>
                </NavRight>
            </NavHeader>
        </Nav>
    );
}

export default Header;