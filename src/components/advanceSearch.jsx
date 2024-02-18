import React, { useEffect, useState } from "react"
import Button from "@mui/material/Button"
import TextField from "@mui/material/TextField"
import Dialog from "@mui/material/Dialog"
import DialogActions from "@mui/material/DialogActions"
import DialogContent from "@mui/material/DialogContent"
// import DialogContentText from "@mui/material/DialogContentText"
import DialogTitle from "@mui/material/DialogTitle"
import { styled } from "@mui/system"

const InputField = styled(TextField)(() => ({
   backgroundColor: "#fefefe",
   borderRadius: "5px 5px 0 0",
   margin: "10px",
   width: "48%",
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

export default function AdvanceSearch({ open, handleClose, handleAdvSearch }) {
   const [documentID, setDocumentID] = useState("");
   const [invoiceID, setInvoiceID] = useState("");
   const [customerNumber, setCustomerNumber] = useState("");
   const [businessYear, setBusinessYear] = useState("");

   const getDocID = (event) => {
      setDocumentID(event.target.value);
   }
   const getInvoiceID = (event) => {
      setInvoiceID(event.target.value);
   }
   const getCustNum = (event) => {
      setCustomerNumber(event.target.value);
   }
   const getBusiYear = (event) => {
      setBusinessYear(event.target.value);
   }

   const handleSubmit = (event) => {
      handleAdvSearch({
         documentID: documentID,
         invoiceID: invoiceID,
         customerNumber: customerNumber,
         businessYear: businessYear
      })
   }
   return (
      <div>
         <StyledDialog open={open} onClose={handleClose} maxWidth="lg">
            <DialogTitle color="#fefefe">Advance Search</DialogTitle>
            <DialogContent>
               <InputField
                  onChange={getDocID}
                  variant="filled"
                  size="small"
                  label="Document ID"
               ></InputField>
               <InputField
                  onChange={getInvoiceID}
                  variant="filled"
                  size="small"
                  label="Invoice ID"
               ></InputField>
               <InputField
                  onChange={getCustNum}
                  variant="filled"
                  size="small"
                  label="Customer Number"
               ></InputField>
               <InputField
                  onChange={getBusiYear}
                  variant="filled"
                  size="small"
                  label="Business Year"
               ></InputField>
            </DialogContent>
            <DialogActions>
               <Button variant="outlined" style={{ width: "49%", border: "1px #fefefe solid", color: "#fefefe" }} onClick={handleClose} >CANCEL</Button>
               <Button variant="outlined" style={{ width: "49%", border: "1px #fefefe solid", color: "#fefefe" }} onClick={handleSubmit} >SEARCH</Button>
            </DialogActions>
         </StyledDialog>
      </div>
   )
}
