// import { Select } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';
import { ContextState } from '../Context/Context';

const CartDetail = (props) => {
    const { id, title, price, rating, url, author, category, qty, inStock } = props.item;

    const { dispatch, setAlert } = ContextState();

    const closeHandler = () => {
        dispatch({
            type : "REMOVE_FROM_CART",
            payload : id
        });
        setAlert({
            open : true,
            message : `${title} Removed Successfully`,
            type : "error"
        })
    }

    return (
        <Container>
            <Image src={url} alt={title}/>
            <Text>
                <h1>{title}</h1>
                <p>{author}</p>
                <p style={{paddingTop : "0.3rem"}}>{category}</p>
                <div>
                    {Array(rating).fill().map((_, i) =>(
                        <span key={i} className="star">⭐</span>
                    ))}
                </div>
                    <div className="last">
                        <select value={qty}
                        style={{marginTop : "0.6rem", width : "5rem", height : "1.8rem", cursor : "pointer"}}
                        onChange={(e) => 
                            dispatch({
                            type : 'CHANGE_QTY',
                            payload :{
                                id,
                                qty : e.target.value
                            }
                        })}
                        >
                            {[...Array(inStock).keys()].map((item) => (
                                <option key={item + 1}>{item + 1}</option>
                            ))}
                        </select>
                        <button
                        onClick={closeHandler}
                        className="delete">delete</button>
                    </div>
            </Text>
            <Price>
                <p style={{fontWeight: "500"}}>${price}</p>
            </Price>
        </Container>
    )
}

export default CartDetail


const Container = styled.div`
    padding: 0.5rem 0;
    border-top: 1px solid gray;
    display: flex;
    gap: 0.8rem;
    h1{
        font-size: 1.1rem;
        font-weight: 500;
        padding-bottom: 0.3rem;
    }
`
const Image = styled.img`
    width: 9rem;

`
const Text = styled.div`
    flex: 1;
    padding: 0.5rem;
    p{
        font-size: 0.8rem;
    }
    span{
        font-size: 0.7rem;
    }
    div{
        margin-left: -0.2rem;
    }
    .delete{
        margin-left: 15px;
        background-color: transparent;
        border: none;
        border-right: 1px solid #00000040;
        border-left: 1px solid #00000040;
        cursor: pointer;
        padding:0 0.5rem;
        text-transform: capitalize;
        color: #0026ffc3;
    }
`
const Price = styled.div``