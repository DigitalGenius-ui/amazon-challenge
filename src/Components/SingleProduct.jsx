import React, { useState } from 'react';
import styled from 'styled-components';
import { ContextState } from '../Context/Context';

const SingleProduct = (props) => {
    const { id, title, price, rating, url, author, category, inStock } = props.item;
    const [more] = useState(false);
    const {basket, dispatch, setAlert} = ContextState(); 
    
    const addHandler = () => {
        setAlert({
            open : true,
            message : `${title} Added Successfully `,
            type : "success"
        })
        dispatch({
            type : "ADD_TO_CART",
            payload : {
                id,
                title,
                price,
                rating,
                url,
                author, 
                category,
                inStock,
            }
        })
    }
    return (
        <SingleItem>
            <Content>
                <Image src={url}/>
                <p style={{fontSize: "0.9rem", padding : "0.3rem 0 "}} >{more ? title : `${title.substring(0, 23)}...`}</p>
                <div className="star-map">
                    {Array(rating).fill().map((_, i) => (
                        <p key={i} className="star">⭐</p>
                    ))}
                </div>
                <p style={{paddingTop : "0.5rem", fontSize: "0.9rem", fontWeight : "500"}}>${price}</p>
                {
                    basket.some(p => p.id === id)? (<button className='btn' disabled>Item Added</button>): 
                    (<button onClick={addHandler} className='btn'>Add To Cart</button> )
                }
            </Content>
        </SingleItem>
    )
}

export default SingleProduct

const SingleItem = styled.div``
const Content = styled.div`
    border: 1px solid #00000063;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    .btn{
        margin-top: 0.8rem;
        padding: 0.3rem 1rem;
        background-color: #e7a52b;
        cursor: pointer;
        border : 1px solid #00000090;
    }
    .star{
        font-size: 0.7rem;
    }
    .star-map{
        display: flex;
    }
`

const Image = styled.img`
    width: 8rem;

`
