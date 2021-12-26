import React from 'react';
import styled from 'styled-components';;

const Banner = () => {
    return (
        <div>
            <Image src="https://images-na.ssl-images-amazon.com/images/G/01/kindle/Events/2021/MaB/TYP_KBHP_BHP_Desktop.jpg"/>
        </div>
    )
}

export default Banner

const Image = styled.img`
    width: 100%;
`