import styled from '@emotion/styled'
import Services from './Services';
import About from './About';
import Hero from './Hero';
import Footer from './Footer';
import Contact from './Contact';

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
            <Hero />
            <About />
            <Services />
            <Contact />
            <Footer />
        </StyledRightSide>
        
    );
};

export default RightSide;