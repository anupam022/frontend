import React, { useState, useEffect } from "react"
import Button from "@mui/material/Button"
import TextField from "@mui/material/TextField"
import Dialog from "@mui/material/Dialog"
import DialogActions from "@mui/material/DialogActions"
import DialogContent from "@mui/material/DialogContent"
import DialogContentText from "@mui/material/DialogContentText"
import DialogTitle from "@mui/material/DialogTitle"
import { styled } from "@mui/system"
// import { useState } from "react"
import axios from "axios"

const InputField = styled(TextField)(() => ({
   backgroundColor: "#fefefe",
   borderRadius: "5px 5px 0 0",
   margin: "10px",
   width: "46%",
   padding: "0",
   height: "fit-content",
   "input": {
      margin: "0.5rem 0 0 0",
   },
   ".MuiInputLabel-root": {
      fontSize: "0.8rem"
   }

}))
const StyledDialog = styled(Dialog)(() => ({
   ".MuiDialog-paper": {
      backgroundColor: "#2c4151"
   }
}))

export default function EditDialog({ open, selectedRow, handleEditClose }) {
   const [invoiceCurrency, setInvoiceCurrency] = useState("");
   const [custPaymentTerms, setCustPaymentTerms] = useState("");

   const getInvoiceCurrency = (event) => {
      setInvoiceCurrency(event.target.value);
   }
   const getCustPaymentTerms = (event) => {
      setCustPaymentTerms(event.target.value);
   }

   const handleEdit = () => {
      console.log("Edit req sent!");
      axios.post("http://localhost:8080/Crud_Web_App/EditDataServlet", {}, {
         params: {
            selectedRow: selectedRow,
            invoiceCurrency: invoiceCurrency,
            custPaymentTerms: custPaymentTerms,
         }
      }).then(response => {
         console.log(response);
      }).catch(e => {
         console.log(e);
      })
      handleEditClose();
   }
   return (
      <div>
         <StyledDialog open={open} onClose={handleEditClose} maxWidth="lg">
            <DialogTitle color="#fefefe">Edit</DialogTitle>
            <DialogContent>
               <div style={{
                  display: "flex",
                  flexWrap: "wrap",
                  width: "fit-content"
               }}>
                  <InputField variant='filled' size="small" onChange={getInvoiceCurrency} label="Invoice Currency" ></InputField>
                  <InputField variant='filled' size="small" onChange={getCustPaymentTerms} label="Customer Payment Terms" ></InputField>
               </div>
            </DialogContent>
            <DialogActions>
               <Button variant="outlined" style={{ width: "49%", border: "1px #fefefe solid", color: "#fefefe" }} onClick={handleEdit} >EDIT</Button>
               <Button variant="outlined" style={{ width: "49%", border: "1px #fefefe solid", color: "#fefefe" }} onClick={handleEditClose} >CANCEL</Button>
            </DialogActions>
         </StyledDialog>
      </div>
   )
}
