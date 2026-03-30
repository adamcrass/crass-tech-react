import styled from "@emotion/styled"

const StyledServices = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #439560e9;
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
`

const Services = () => {
    return(
        <StyledServices id="services">
            <TextContainer>
            <Title>Services</Title>

            <Text>This is the section about the services we provide.</Text> </TextContainer>
        </StyledServices>

    );
};
export default Services;