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
    flex-direction: column;
    align-items: center;
`;

const StyledLink = styled.a`
    font-size: 1.5vw;
    color: #98FF98;
    text-decoration: none;
`;

const TopPart = styled.div`
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
`;

const BottomPart = styled.div`
    width: 90%;
    height: 50%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: flex-end;
`;

const Email = styled.p`
    color: black;
`

const Navbar = () => {
    return (
        <StyledNavbar>
            <TopPart>
                <StyledLink href="#hero">
                    <StyledLogo src={Logo} />
                </StyledLink>
                <StyledLink href="#about">About</StyledLink>
                <StyledLink href="#services">Services</StyledLink>
                <StyledLink href="#contact">Contact</StyledLink>
            </TopPart>
            <BottomPart>
                <Email>crasstech@gmail.com</Email>
            </BottomPart>
        </StyledNavbar>
    )

}

export default Navbar;