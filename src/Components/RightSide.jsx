import styled from '@emotion/styled'
import Services from './Services';
import About from './About';

const StyledRightSide = styled.div`
    width: 80%;
    margin-left: 20%;
    height: 100%;
    display: flex;
    flex-direction: column;
`;

const RightSide = () => {
    return (
        <StyledRightSide>
            <About />
            <Services />
        </StyledRightSide>
        
    );
};

export default RightSide;