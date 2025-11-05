import styled from '@emotion/styled';

export const HeaderContainer = styled.header`
  padding: 1rem 4rem;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.img`
  width: auto;

  &:hover {
    cursor: pointer;
  }
`;

export const NavList = styled.ul`
  display: flex;
  gap: 1.5rem;
  list-style: none;
`;

export const NavItem = styled.span<{ isActive: boolean }>`
  text-decoration: none;
  color: #333;
  font-weight: 500;
  font-size: 18px;

  &:hover {
    color: #0C8948;
    cursor: pointer;
  }

  ${({ isActive }) =>
    isActive &&
    `
    color: #0C8948;
  `}
`;

export const LoginButton = styled.button`
  padding: 0.6rem 2rem;
  background-color: #0C8948;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 500;
  font-size: 1rem;

  &:hover {
    background-color: #0a793fff;
  }
`;

export const UserWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const UserName = styled.span`
  span {
    color: #0C8948;
  }
`;

export const UserAvatar = styled.img`
  border-radius: 50%;
  object-fit: cover;
`;