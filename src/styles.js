import styled from 'styled-components'

export const About = styled.div`
min-height: 90vh;
display:flex;
align-items:center;
justify-content:center;
padding:5rem 7rem;
color:white;

`;

export const Description = styled.div`
flex:1;
overflow:hidden;
padding-right:8rem;

h2{
  font-weight:lighter;
}
`;

export const Image = styled.div`
flex:1;
img{
  width:100%;
  height:80vh;
  object-fit:cover;
}
`;

export const Hide =  styled.div`
overflow:hidden;

`;