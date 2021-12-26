import React from 'react';
import styled from 'styled-components';
import { ContextState } from '../Context/Context';
import CartDetail from '../Components/CartDetail';
import Subtotal from '../Components/Subtotal';

const Cart = () => {
    const { basket } = ContextState();
    return (
        <Container>
            <CartFlex>
                <Prods>
                    <Title>
                        <h2>
                        {basket.length > 0 ? "Shopping Cart" : "Your Shopping Cart is Empty"}
                        </h2>
                    </Title>
                    <Price>
                        {basket.length > 0 ? "Price" : ""}
                    </Price>
                    <Detail>
                        {basket.map(item => (
                            <CartDetail item ={item} key={item.id}/>
                        ))}
                    </Detail>
                </Prods>
                <Sub><Subtotal/></Sub>
            </CartFlex>
        </Container>
    )
}

export default Cart

const Container = styled.div`
    position : relative;
`

const CartFlex = styled.div`
    display: flex;
    /* @media(max-width : 1020px){
        flex-direction: column-reverse;
        margin-left: 0.6rem;
    } */
`
const Title = styled.div`
    padding: 1rem 0.5rem;
    h2{
        font-weight: 500;
    }
`
const Prods = styled.div`
    background-color: white;
    border-radius: 5px;
    flex: 3;
    margin: 2rem 1rem;
    padding: 1rem;
`
const Sub = styled.div`
    width : 18rem;
`

const Detail = styled.div``

const Price = styled.div`
    text-align : right;
    font-size : 0.9rem;
    color : grey;
`