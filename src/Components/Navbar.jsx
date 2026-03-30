import styled from "@emotion/styled";
import Logo from "../assets/CrassTechLogo.png";

const StyledNavbar = styled.div`
    background-color: #5d5d5d;
    width: 20%;
    height: 100vh;
    float: left;
    position: fixed;
    font-size: 100%;
    display: flex;
    justify-content: center;
`; 

const StyledLink = styled.a`
    font-size: 1.5vw;
    color: #98FF98;
    text-decoration: none;
`;

const StyledLinkContainer = styled.div`
    width: 90%;
    height: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    justify-content: space-around;
`;

const StyledLogo = styled.img`
    width: 300px;
    height: auto;
`

const Navbar = () => {
    return (
        <StyledNavbar>

            <StyledLinkContainer>
                <StyledLink href="#hero">
                    <StyledLogo src={Logo} />
                </StyledLink>
                <StyledLink href="#about">About</StyledLink>
                <StyledLink href="#services">Services</StyledLink>
                <StyledLink href="#contact">Contact</StyledLink>
            </StyledLinkContainer>
        </StyledNavbar>
    )

}

export default Navbar;