import React from 'react';
import { StyledLink } from 'components/SharedLayout/SharedLayout.styled';
import { wait } from '@testing-library/user-event/dist/utils';

export default function AuthNav() {
  return (
    <div class="user" style={{display: "inline-block"}}>
      {/* <StyledLink 
      to="/register" 
      exact="true"
      >
        Register
      </StyledLink>
      <StyledLink to="/login" 
      exact="true"
      >
        Login
      </StyledLink> */}
      <button class="btn" style={{position: "relative", background: "bleck", color: "white", cursor: "pointer"}}>Регистрация</button>
      <button class="btn" style={{position: "relative", marginLeft: "20px", background: "bleck", color: "white", width: "50px", cursor: "pointer"}}>Вход</button>
    </div>
  );
}