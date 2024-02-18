import axios from "axios";

const keys = ["student_id", "student_name", "student_avg_marks"];

const getData = (page, pageSize, field, sort, seacrhInput, isAdv, advSearchData) => {
   if (isAdv == true) {
      return new Promise((resolve, reject) => {
         axios.post("http://localhost:8080/Crud_Web_App/DisplayServlet", {}, {
            params: {
               page: page,
               page_size: pageSize,
               isAdv: isAdv,
               documentID: advSearchData.documentID,
               invoiceID: advSearchData.invoiceID,
               customerNumber: advSearchData.customerNumber,
               businessYear: advSearchData.businessYear
            }
         }).then(response => {
            resolve(response.data)
            return response.data;
         }).catch(err => {
            reject(err)
            console.log(err);
         })
      })
   }
   return new Promise((resolve, reject) => {
      axios.post("http://localhost:8080/Crud_Web_App/DisplayServlet", {}, {
         params: {
            page: page,
            page_size: pageSize,
            field: field,
            sort: sort,
            search_input: seacrhInput
         }
      }).then(response => {
         // console.log(response.data);
         resolve(response.data)
         return response.data;
      }).catch(err => {
         reject(err)
         console.log(err);
      })
   })
}
export { getData, keys }
