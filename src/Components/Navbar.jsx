import styled from "@emotion/styled";

const StyledNavbar = styled.nav`
  width: 100%;
  height: 60px; /* taller so text fits */
  background-color: #25806f;
  display: flex;       
  align-items: center;  
`;

const StyledLink = styled.a`
text-decoration: none;
color: #000;
`;

const Navbar = () => {
    return (
        <StyledNavbar>
            <StyledLink href="/">Home</StyledLink>

        </StyledNavbar>
    );
};

export default Navbar;