import * as React from "react"
import { Box, Grid } from "@mui/material"
import HRCLogo from "./resources/HRC-Logo.svg"
import ABCLogo from "./resources/abc.png"


export default function BasicGrid() {
	return (
		<Box sx={{
			display: "flex",
			justifyContent: "center",
			alignItems: "center",
			height: "20vh",
		}}>
			<Grid container spacing={1} sx={{
				width: "90vw"
			}}>
				<Grid item xs={4}>
					<img src={ABCLogo} alt="" width="200px" />
				</Grid>
				<Grid item xs={4} sx={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
				}}>
					<img src={HRCLogo} alt="" width="150px" />
				</Grid>
				<Grid item xs={4}>

				</Grid>
			</Grid>
		</Box>
	)
}
