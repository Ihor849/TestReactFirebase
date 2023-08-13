import Container from 'components/Container/Container';
import { TitleBox } from 'components/Container/Container.styled';
import AuthNav from 'components/Navigation/AuthNav';
import Navigation from 'components/Navigation/NavigationUser';
import UserMenu from 'components/Navigation/UserMenu';
import SharedLayouts from 'components/SharedLayout/SharedLayout';
import {
  ContainerShared,
  Header,
} from 'components/SharedLayout/SharedLayout.styled';
import HomePage from 'pages/HomePage/HomePage';
import { Suspense } from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';

export const App = () => {
  return (
    <div>
      <ContainerShared>
      <Header>
      {/* <Navigation> */}
        <AuthNav />
        <UserMenu />
      {/* </Navigation> */}
      </Header>
      <TitleBox>ЗАГОЛОВОК</TitleBox>
      
      </ContainerShared>
    </div>
  );
};
