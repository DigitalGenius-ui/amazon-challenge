import { Facebook, Instagram, LinkedIn } from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';
import { ContextState } from '../Context/Context';

const Footer = () => {
    const { goUp } = ContextState();
    return (
        <Foot>
            <Button onClick={goUp}>Back to top</Button>
            <FootContent>
                <Image src="https://www.nicepng.com/png/full/16-167642_amazon-logo-amazon-logo-white-text.png"/>
                <div className="footer">
                    <h4>This website is made by Milad Amiri 2021.</h4>
                    <p>If you have any Project dont hesitate and contact via below paths.</p>
                    <div className="icons">
                        <a href="https://www.facebook.com/profile.php?id=100009019544917"><Facebook/></a>
                        <a href="https://www.instagram.com/milad_amiri01/"><Instagram/></a>
                        <a href="https://www.linkedin.com/in/milad-amiri-215894207/"><LinkedIn/></a>
                    </div>
                </div>
            </FootContent>
        </Foot>
    )
}

export default Footer

const Foot = styled.div``
const Button = styled.button`
    width: 100%;
    padding: 1rem ;
    background-color: #253058;
    border: none;
    color: white;
    cursor: pointer;
    &:hover{
        background-color: #2c3966;
    }

`

const FootContent = styled.div`
    height: 15rem;
    background-color: #172141;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    .footer{
        text-align: center;
        color: white;
        h4{
            padding: 0.5rem 0;
        }
        .icons{
            padding: 0.5rem;
            a{
                color: white;
                padding: 0 0.3rem;
                &:hover{
                    color: #ffffff97;
                }
            }
        }
    }
`

const Image = styled.img`
    width: 8rem;

`