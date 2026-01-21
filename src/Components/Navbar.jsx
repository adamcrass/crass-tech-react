import styled from "@emotion/styled";

const StyledNavbar = styled.nav`
  width: 100%;
  height: 60px; /* taller so text fits */
  background-color: #25806f;
  display: flex;       
  align-items: center;
  justify-content: right;
  gap: 15px;
  position: sticky;
  top: 0;
`;

const StyledLink = styled.a`
    text-decoration: none;
    color: black;
  padding-right: 15px;
`;

const Navbar = () => {
    return (
        <StyledNavbar>
            <StyledLink href="/">Home</StyledLink>
            <StyledLink href="#about">About</StyledLink>
            <StyledLink href="/">Services</StyledLink>

        </StyledNavbar>
    );
};

export default Navbar;