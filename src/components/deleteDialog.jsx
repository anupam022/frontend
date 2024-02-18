import * as React from "react"
import Button from "@mui/material/Button"
import TextField from "@mui/material/TextField"
import Dialog from "@mui/material/Dialog"
import DialogActions from "@mui/material/DialogActions"
import DialogContent from "@mui/material/DialogContent"
import DialogContentText from "@mui/material/DialogContentText"
import DialogTitle from "@mui/material/DialogTitle"
import { styled } from "@mui/system"
import { useEffect } from "react/cjs/react.production.min"

const InputField = styled(TextField)(()=>({
   backgroundColor: "#fefefe",
   borderRadius: "5px 5px 0 0",
   margin:"10px",
   width:"46%",
   padding:"0",
   height:"fit-content",
   "input": {
      margin:"0.5rem 0 0 0",
   },
   ".MuiInputLabel-root":{
      fontSize:"0.8rem"
   }
   
}))
const StyledDialog=styled(Dialog)(()=>({
   ".MuiDialog-paper":{
      backgroundColor:"#2c4151"  
   }
}))

export default function DeleteDialog({open,handleCancel, handleDelete}) {

	return (
		<div>
			<StyledDialog open={open} onClose={handleCancel} maxWidth="lg">
				<DialogTitle color="#fefefe">Delete Records?</DialogTitle>
				<DialogContent>
               <DialogContentText  color="#fefefe">Are you sure you want to delete these record[s]?</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Button variant="outlined" style={{width:"49%", border:"1px #fefefe solid", color: "#fefefe"}} onClick={handleCancel} >CANCEL</Button>
               <Button variant="outlined" style={{width:"49%", border:"1px #fefefe solid", color: "#fefefe"}} onClick={handleDelete} >DELETE</Button>
				</DialogActions>
			</StyledDialog>
		</div>
	)
}
