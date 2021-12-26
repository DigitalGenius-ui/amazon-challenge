import React, { createContext, useContext, useEffect, useReducer, useState } from 'react';
import reducer, { initialState } from './reducer';
import { Data } from '../Data/Data';

export const Product = createContext();

const filter = ['All', ...new Set(Data.map((item) => item.category))];

const Context = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const [product, setProduct] = useState(Data);
    const [search, setSearch] = useState('');
    const [categories] = useState(filter);
    const [alert, setAlert] = useState({
        open : false,
        message : "",
        type : "success"
    })

    // go up handler 
    const goUp = () => {
        window.scroll(0, 0);
    }

    // search handler 
    const searchHandler = product.filter((item) => {
        return item.category.toLocaleLowerCase().includes(search.toLocaleLowerCase())
        || item.title.toLocaleLowerCase().includes(search.toLocaleLowerCase());
    });

    // filter handler 
    const filterItems = (category) => {
        const newFilter = Data.filter((item) => {
            return item.category === category
        });
        if(category === 'All'){
            setProduct(Data);
            return;
        }
        setProduct(newFilter);
    }

    useEffect(() => {
        localStorage.setItem("product", JSON.stringify(state.Amazon));
    }, [state.Amazon])

    return (
        <Product.Provider value={{
            goUp,
            product, setProduct,
            searchHandler,
            setSearch,
            filter,
            filterItems,
            categories,
            basket : state.Amazon,
            dispatch,
            alert, 
            setAlert,
        }}>
            {props.children}
        </Product.Provider>
    )
}

export default Context

export const ContextState = () => useContext(Product);