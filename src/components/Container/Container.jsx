import { TitleBox } from 'pages/HomePage/HomePage.styled';
import { ContainerBox } from './Container.styled';

export const Container = ({ children }) => {
  return <ContainerBox>{children}</ContainerBox>;
};
export default Container;
