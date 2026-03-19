import styled from "@emotion/styled"

const StyledServices = styled.div`
    width: 100%;
    height: 75vh;
    color: Black;
    background-color: grey;
    color: black;
`;

const Services = () => {
    return(
        <StyledServices id="services">

            <h1>Services</h1>

            <p>This is the section about the services we provide.</p>
        </StyledServices>

    );
};
export default Services;