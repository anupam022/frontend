import { styled } from '@mui/material'
import React from 'react'

const FlexContainer=styled('div')(()=>({
   width: "90vw",
	height: "10vh",
	display: "flex",
	flexDirection: "row",
	justifyContent: "center",
	alignItems: "center",
   color: "#fefefe",
   fontSize: "0.7rem"
}))
export default function Footer(){
   
   return(
      <FlexContainer>
         <p><a href="#">Privacy Policy</a><span style={{padding: "0 2rem"}}>|</span>© 2022 HighRadius Corporation. All rights reserved.</p>
      </FlexContainer>
   )
}