import styled from "styled-components"
export const Button=styled.button`

    background: white;
    ;
    color:#6666ff;
    font-weight:bold;
    align-items: center;
    font-size:15px;
    border:1px solid;
   

&:hover{
    background:#6666ff;
	color: white;
    font-weight:bold;
    width:150px;
    border:0px;
   
   
}`
export const Card=styled.div`
width: 18rem;
height:10000px;
@media (min-width: 768px) {
    /* Adjust styles for medium-sized screens and larger */
   
      display: flex;
    
  
    img {
      max-width: 200px; /* Adjust the max-width for larger screens */
    }
  
    
      flex: 1;
      padding: 15px;
    
`