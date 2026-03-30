import styled from "@emotion/styled";

const StyledAbout = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #79c779;
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


const About = () => {
    return(
        <StyledAbout id="about">
            <TextContainer>
                <Title>About</Title>
                <Text>Balsheuhdejihjwn hcj hbchenfdcf fhb edc jfne nf cn jn ednfd fjnde dfnvjfdn fnjfne cn jfne njnfe nvjnf nvj fvn jfnv</Text>
            </TextContainer>
        </StyledAbout>

    );
};

export default About;