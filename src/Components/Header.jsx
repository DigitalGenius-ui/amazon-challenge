import { Badge, Toolbar } from '@material-ui/core';
import { Search } from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { ContextState } from '../Context/Context';
import { Link } from 'react-router-dom';

const Header = () => {
    const { setSearch, searchBtn, basket } = ContextState();

    return (
        <Head>
            <Toolbar className="tool">
                <Link to="/" >
                    <Image src="https://www.nicepng.com/png/full/16-167642_amazon-logo-amazon-logo-white-text.png"/>
                </Link>
                <Form>
                    <input type="text" onChange={(e) => setSearch(e.target.value)} placeholder= "search..."/>
                    <button onClick={searchBtn}><Search style={{fontSize :"1.8rem"}}/></button>
                </Form>
                <Nav>
                    <div className="nav">
                        <Link to="/login">
                            <span style={{fontSize: "0.8rem"}}>Hello, User</span>
                        </Link>
                        <span><strong>Account & Lists</strong></span>
                    </div>
                    <div className="nav">
                        <span style={{fontSize: "0.8rem"}}>Returns</span>
                        <span><strong>& Orders</strong></span>
                    </div>
                    <Link to="/cart">
                        <Badge badgeContent={basket?.length} color="error">
                            <AddShoppingCartIcon className="basket"/>
                        </Badge>
                    </Link>
                </Nav>
            </Toolbar>
        </Head>
    )
}

export default Header;

const Head = styled.div`
    background-color: black;
    padding : 0.4rem 0;
    .tool{
        display: flex;
        align-items : center;
    }
`

const Image = styled.img`
    width : 6rem;
    margin-top: 0.5rem;
`

const Form = styled.div`
    flex : 1;
    display: flex;
    align-items : center;
    border : none;
    height: 40px;
    background-color: white;
    margin-left: 1rem;
    border-radius : 5px;
    input{
        width : 100%;
        outline : none;
        border: none;
        padding : 0.5rem;
    }
    button{
        height: 100%;
        padding: 10px;
        display: flex;
        align-items : center;
        justify-content: center;
        cursor: pointer;
        border : none;
        background-color: #e7a52b;
        border-radius: 0 5px 5px 0;
    }
`
const Nav = styled.div`
    display : flex;
    align-items: center;
    color : white;
    .nav{
        display: flex;
        flex-direction : column;
        margin-left: 1.3rem;
    }
    .basket{
        margin-left: 1.5rem;
        font-size: 2rem;
    }
`
