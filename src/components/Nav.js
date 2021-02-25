import React from 'react'
import styled from 'styled-components'

const Nav = () => {
    return (
        <StyledNav>
            <h1><a id="logo" href="#">Photobox</a></h1>
            <ul>
                <li><a href="#">1. About Us</a></li>
                <li><a href="#">2. Our Work</a></li>
                <li><a href="#">3. Contact Us</a></li>
            </ul>

        </StyledNav>
    )
}

const StyledNav = styled.nav`
min-height: 10vh;
display:flex;
margin:auto;
justify-content:space-between;
align-items:center;
padding:1rem 7rem;
background:#282828;
a{
    color:white;
    text-decoration:none;
}
ul{
    display:flex;
    list-style:none;
}

#logo{
    font-size:2rem;
    font-family:'Lobster', cursive;
    font-weight:lighter
}

li{
    padding-left:8rem;
    position:relative;
}

`

export default Nav
