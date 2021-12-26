import React from 'react';
import styled from 'styled-components';
import Products from '../Components/Products';
import SideBar from '../Components/SideBar';
import Footer from '../Components/Footer';

const HomePage = () => {
    return (
        <Container>
        <Flex>
            <SideBarPart>
                <SideBar/>
            </SideBarPart>
            <ProductPart>
                <Products/>
            </ProductPart>
        </Flex>
            <Footer/>
        </Container>
    )
}

export default HomePage

const Container = styled.div`
`

const Flex = styled.div`
    display: flex;
    background-color : white;
    gap: 13px;
    padding: 1rem;
    padding-top: 2rem;
    @media(max-width : 1000px){
        flex-direction: column;
    }
`
const ProductPart = styled.div`
    flex: 4;
`
const SideBarPart = styled.div`
    flex: 1;
    height: 150px;
    border-right: 2px solid #00000049;
`