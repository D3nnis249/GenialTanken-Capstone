import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import SettingsIcon from './icons/navigation/SettingsIcon.jsx';
import GasInfoHead from '../components/GasInfoHead.jsx';

function Header({ gasInfoHead, fuelValue, title }) {
  return (
    <HeaderContainer>
      <FuelFilter gasInfoHead={gasInfoHead} fuelValue={fuelValue} />
      <PageTitle>{title}</PageTitle>
      <TankenTanken href="https://www.tankentanken.de/" target="_blank">
        Unterstüzt von TankenTanken.de
      </TankenTanken>
      <SettingsLink role="list" to="/settings">
        <SettingsIcon />
      </SettingsLink>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.header`
  display: grid;
  grid-template-columns: 0.5fr 1fr 0.5fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  gap: 0px 0px;
  grid-template-areas:
    '. . .'
    'fuelFilter title settingsIcon'
    'tankenTankenTag tankenTankenTag tankenTankenTag'
    'tankenTankenTag tankenTankenTag tankenTankenTag';
  width: 100%;
  height: 6.25rem;
  position: fixed;
  top: 0;
  border-bottom: 1px solid black;
  background-color: #ffffff;
  z-index: 20;
`;

const FuelFilter = styled(GasInfoHead)`
  grid-area: fuelFilter;
`;

const PageTitle = styled.h1`
  grid-area: title;
  text-align: center;
  align-self: center;
`;

const TankenTanken = styled.a`
  grid-area: tankenTankenTag;
  justify-self: center;
  align-self: center;
  font-size: 0.75rem;
  text-decoration: none;
  color: #a3a3a3;
`;

const SettingsLink = styled(NavLink)`
  grid-area: settingsIcon;
  justify-self: center;
  align-self: end;
  text-decoration: none;
  color: #2196f3;
  list-style: none;
  &.active {
    text-decoration: none;
    color: #0367b4;
  }
`;

export default Header;
