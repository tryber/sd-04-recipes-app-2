import styled from 'styled-components';

const Button = styled.button`
  background-color: var(--primary);
  border-radius: 30px;
  border-style: none;
  color: var(--white);
  cursor: pointer;
  font-size: 1.3rem;
  font-weight: 100;
  letter-spacing: 2px;
  padding: 3%;
  text-align: center;
  text-decoration: none;
  transition: opacity 0.3s;
  width: 100%;

  &:hover,
  &:focus {
    opacity: 0.5;
  }
`;

Button.fixed = styled.button`
  position: fixed;
  bottom: 0px;
`;

export default Button;
