import styled from 'styled-components';
import { ContextState } from '../Context/Context';

const Subtotal = () => {
    const { basket } = ContextState();
    const money = basket.filter((item) => item.price);
    const total = money.reduce((acc, cur) => acc + Number(cur.price)* cur.qty,0).toFixed(2);
    return (
        <>
        {basket.length > 0 ? (<Total>
            <h1>Subtotal({basket.length} Items): <strong>${total}</strong></h1>
            <div>
                <input type="checkbox" /><span style={{marginLeft : "0.5rem", fontSize : "0.9rem"}}>This order contains a gift</span>
                <button className='btn'>Proceed to checkout</button>
            </div>
        </Total>):
        null
        }
        </>

    )
}

export default Subtotal

const Total = styled.div`
    background-color: white;
    margin: 0.6rem 0.6rem 0 0 ;
    padding: 0.8rem;
    h1{
        font-size: 1.2rem;
        font-weight: 400;
    }
    div{
        padding: 0.5rem 0;
        .btn{
            width: 100%;
            padding: 0.5rem ;
            margin: 1rem 0;
            border-radius: 10px;
            border: none;
            background-color: #ffc918;
            cursor: pointer;
        }
    }
`