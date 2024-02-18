import React, { useState, useEffect } from "react"
import Button from "@mui/material/Button"
import TextField from "@mui/material/TextField"
import Dialog from "@mui/material/Dialog"
import DialogActions from "@mui/material/DialogActions"
import DialogContent from "@mui/material/DialogContent"
import DialogContentText from "@mui/material/DialogContentText"
import DialogTitle from "@mui/material/DialogTitle"
import { styled } from "@mui/system"
import axios from "axios"
const InputField = styled(TextField)(() => ({
   backgroundColor: "#fefefe",
   borderRadius: "5px 5px 0 0",
   margin: "10px",
   width: "23%",
   padding: "0",
   height: "fit-content",
   input: {
      margin: "0.5rem 0 0 0",
   },
   ".MuiInputLabel-root": {
      fontSize: "0.8rem",
   },
}))
const StyledDialog = styled(Dialog)(() => ({
   ".MuiDialog-paper": {
      backgroundColor: "#2c4151",
   },
}))

export default function AddDialog({ open, handleClickOpen, handleClose }) {
   let [businessCode, getbusinessCode] = useState("")
   let [customerNumber, getcustomerNumber] = useState("")
   let [clearDate, getclearDate] = useState("")
   let [businessYear, getbusinessYear] = useState("")
   let [documentID, getdocumentID] = useState("")
   let [postingDate, getpostingDate] = useState("")
   let [documentCreateDate, getdocumentCreateDate] = useState("")
   let [dueDate, getdueDate] = useState("")
   let [invoiceCurrency, getinvoiceCurrency] = useState("")
   let [documentType, getdocumentType] = useState("")
   let [postingID, getpostingID] = useState("")
   let [totalOpenAmount, gettotalOpenAmount] = useState("")
   let [baselineCreateDate, getbaselineCreateDate] = useState("")
   let [customerPaymentTerms, getcustomerPaymentTerms] = useState("")
   let [invoiceID, getinvoiceID] = useState("")

   const getbusinessCodeHandler = (event) => {
      businessCode = event.target.value
   }
   const getcustomerNumberHandler = (event) => {
      customerNumber = event.target.value
   }
   const getclearDateHandler = (event) => {
      clearDate = event.target.value
   }
   const getbusinessYearHandler = (event) => {
      businessYear = event.target.value
   }
   const getdocumentIDHandler = (event) => {
      documentID = event.target.value
   }
   const getpostingDateHandler = (event) => {
      postingDate = event.target.value
   }
   const getdocumentCreateDateHandler = (event) => {
      documentCreateDate = event.target.value
   }
   const getdueDateHandler = (event) => {
      dueDate = event.target.value
   }
   const getinvoiceCurrencyHandler = (event) => {
      invoiceCurrency = event.target.value
   }
   const getdocumentTypeHandler = (event) => {
      documentType = event.target.value
   }
   const getpostingIDHandler = (event) => {
      postingID = event.target.value
   }
   const gettotalOpenAmountHandler = (event) => {
      totalOpenAmount = event.target.value
   }
   const getbaselineCreateDateHandler = (event) => {
      baselineCreateDate = event.target.value
   }
   const getcustomerPaymentTermsHandler = (event) => {
      customerPaymentTerms = event.target.value
   }
   const getinvoiceIDHandler = (event) => {
      invoiceID = event.target.value
   }

   const submitHandler = (event) => {
      // console.log({
      // 	businessCode: businessCode,
      // 	customerNumber: customerNumber,
      // 	clearDate: clearDate,
      // 	businessYear: businessYear,
      // 	documentID: documentID,
      // 	postingDate: postingDate,
      // 	documentCreateDate: documentCreateDate,
      // 	dueDate: dueDate,
      // 	invoiceCurrency: invoiceCurrency,
      // 	documentType: documentType,
      // 	postingID: postingID,
      // 	totalOpenAmount: totalOpenAmount,
      // 	baselineCreateDate: baselineCreateDate,
      // 	customerPaymentTerms: customerPaymentTerms,
      // 	invoiceID: invoiceID,
      // })
      axios.post("http://localhost:8080/Crud_Web_App/AddData", {}, {
         params: {
            business_Code: businessCode,
            customer_Number: customerNumber,
            clear_Date: clearDate,
            business_Year: businessYear,
            document_ID: documentID,
            posting_Date: postingDate,
            document_Create_Date: documentCreateDate,
            due_Date: dueDate,
            invoice_Currency: invoiceCurrency,
            document_Type: documentType,
            posting_ID: postingID,
            total_Open_Amount: totalOpenAmount,
            baseline_Create_Date: baselineCreateDate,
            customer_Payment_Terms: customerPaymentTerms,
            invoice_ID: invoiceID,
         },
      }
      )
         .then((response) => {
            console.log(response)
         })
         .catch((e) => {
            console.log(e)
         })
      event.preventDefault()
      handleClose()
   }
   return (
      <div>
         <StyledDialog open={open} onClose={handleClose} maxWidth="lg">
            <DialogTitle color="#fefefe">Add</DialogTitle>
            <DialogContent>
               <div
                  style={{
                     display: "flex",
                     flexWrap: "wrap",
                     width: "fit-content",
                  }}
               >
                  <InputField
                     onChange={getbusinessCodeHandler}
                     variant="filled"
                     size="small"
                     label="Business Code"
                  ></InputField>
                  <InputField
                     onChange={getcustomerNumberHandler}
                     variant="filled"
                     size="small"
                     label="Customer Number"
                  ></InputField>
                  <InputField
                     onChange={getclearDateHandler}
                     variant="filled"
                     size="small"
                     type="date"
                     label="Clear Date"
                  ></InputField>
                  <InputField
                     onChange={getbusinessYearHandler}
                     variant="filled"
                     size="small"
                     label="Business Year"
                  ></InputField>
                  <InputField
                     onChange={getdocumentIDHandler}
                     variant="filled"
                     size="small"
                     label="Document ID"
                  ></InputField>
                  <InputField
                     onChange={getpostingDateHandler}
                     variant="filled"
                     size="small"
                     type="date"
                     label="Posting Date"
                  ></InputField>
                  <InputField
                     onChange={getdocumentCreateDateHandler}
                     variant="filled"
                     size="small"
                     type="date"
                     label="Document Create Date"
                  ></InputField>
                  <InputField
                     onChange={getdueDateHandler}
                     variant="filled"
                     size="small"
                     type="date"
                     label="Due Date"
                  ></InputField>
                  <InputField
                     onChange={getinvoiceCurrencyHandler}
                     variant="filled"
                     size="small"
                     label="Invoice Currency"
                  ></InputField>
                  <InputField
                     onChange={getdocumentTypeHandler}
                     variant="filled"
                     size="small"
                     label="Document Type"
                  ></InputField>
                  <InputField
                     onChange={getpostingIDHandler}
                     variant="filled"
                     size="small"
                     label="Posting ID"
                  ></InputField>
                  <InputField
                     onChange={gettotalOpenAmountHandler}
                     variant="filled"
                     size="small"
                     label="Total open amount"
                  ></InputField>
                  <InputField
                     onChange={getbaselineCreateDateHandler}
                     variant="filled"
                     size="small"
                     type="date"
                     label="Baseline Create Date"
                  ></InputField>
                  <InputField
                     onChange={getcustomerPaymentTermsHandler}
                     variant="filled"
                     size="small"
                     label="Customer Payemnt Terms"
                  ></InputField>
                  <InputField
                     onChange={getinvoiceIDHandler}
                     variant="filled"
                     size="small"
                     label="Invoice ID"
                  ></InputField>
               </div>
            </DialogContent>
            <DialogActions>
               <Button
                  variant="outlined"
                  style={{
                     width: "49%",
                     border: "1px #fefefe solid",
                     color: "#fefefe",
                  }}
                  onClick={submitHandler}
               >
                  ADD
               </Button>
               <Button
                  variant="outlined"
                  style={{
                     width: "49%",
                     border: "1px #fefefe solid",
                     color: "#fefefe",
                  }}
                  onClick={handleClose}
               >
                  CANCEL
               </Button>
            </DialogActions>
         </StyledDialog>
      </div>
   )
}
