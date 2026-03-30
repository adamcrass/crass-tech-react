import styled from "@emotion/styled"

const StyledFooter = styled.div`
    width: 100%;
    height: 40vh;
    background-color: #858585;
    color: black;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Title = styled.h1`
    font-size: 5vh;
    text-decoration: none;
    margin: 0px;
    margin-bottom: 2vh;
`;

const Text = styled.p`
    font-size: 2.5vh;
    margin: 0px;
`

const TextContainer = styled.div`
    width: 95%;
    height: 90%;
    margin-left: 1vw;
    margin-right: 1vw;
`;

const Footer = () => {
    return(
        <StyledFooter id="footer">
            <TextContainer>
                <Title>Footer</Title>
                <Text>NOT ACTUAL TEXT JUST FOR FILLER</Text>
            </TextContainer>
        </StyledFooter>
    );
};

export default Footer;