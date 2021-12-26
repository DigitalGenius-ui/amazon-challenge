import React from 'react';
import styled from 'styled-components';
import { ContextState } from '../Context//Context';

const SideBar = () => {
    const { categories, filterItems } = ContextState();
    return (
        <>
            <Title>
                <h4>Popular in Books</h4>
            </Title>
            <Btn>
                {categories.map((item, i) => {
                    return <div key={i} onClick={() => filterItems(item)}>{item}</div>
                })}
            </Btn>
        </>
    )
}

export default SideBar

const Btn = styled.div`
margin-top: 0.5rem;
    div{
        margin: 0.2rem 1rem;
        font-size: 0.8rem;
        cursor: pointer;
        &:hover{
            color: #db3908;
        }
    }
`
const Title = styled.div`
    h3{
        font-size: 1rem;
    }
`
