import styled from 'styled-components';
import background from '../../Images/imgJpeg/zvezdnoe-nebo.jpg'

export const ContainerBox = styled.div`
  /* min-height: calc(40vh - 50px); */
  display: flex;
  align-items: center;
  justify-content: center;
  &:before {
    content: '';
    background-image: url(${background});
    /* background-size: cover; */
    background-position: center;
    background-repeat: no-repeat;
    position: fixed;
    /* top: 15%; */
    left: 0%;
    width: 100%;
    height: 100%;
    z-index: -5;
    opacity: 0.4;
  }
`;
export const TitleBox = styled.h2`
  width: 30%;
  font-size: ${props => props.theme.fontSize(11)};
  text-align: center;
  color: ${props => props.theme.colors.red};
  border-radius: ${props => props.theme.spacing(5)};
  padding: 8px 150px;
  margin-top: 8%;
  border: 4px solid ${props => props.theme.colors.red};
  box-shadow: 10px 22px 24px -6px rgba(224, 216, 216, 0.29);
`;

