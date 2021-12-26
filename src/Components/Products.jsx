import React from 'react';
import styled from 'styled-components';
import Banner from './Banner';
import SingleProduct from './SingleProduct';
import { ContextState } from '../Context/Context';

const Products = () => {
    const { searchHandler } = ContextState();
    return (
        <Container>
            <Header><h1>Books At Amazon</h1></Header>
            <Banner/>
            <Seller>
                <h1>Best Sellers</h1>
            </Seller>
            <Grid>
                {searchHandler.map((item) => (
                    <SingleProduct key={item.id} item={item}/>
                ))}
            </Grid>

        </Container>
    )
}

export default Products

const Container = styled.div``

const Header = styled.div`
    h1{
        color: #000000c0;
        font-weight: 400;
        margin-left: 30%;
    }
`

const Seller = styled.div`
    margin-top: 2rem;
    padding-bottom: 1rem;
    h1{
        font-size: 1.5rem;
        font-weight: 500;
    }

`

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
`