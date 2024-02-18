import React, { useEffect, useState } from "react"
import { getHeadingData } from "./HeadingData"
import { DataGrid } from "@mui/x-data-grid"
// import { borderBottom } from "@mui/system"
import { getData } from "../services/getData"

import SearchIcon from "@mui/icons-material/Search"
import ButtonGroup from "@mui/material/ButtonGroup"
import { Refresh, RemoveShoppingCartRounded } from "@mui/icons-material"

import {
	Search,
	SearchIconWrapper,
	StyledInputBase,
	StyledCustomButton,
	FlexBox,
	DataGridStyle,
} from "./styledButtons"


//? Imports for CRUD functionality
import AddDialog from "./addDialog"
import EditDialog from "./editDialog"
import DeleteDialog from "./deleteDialog"
import axios from "axios"


//?Imports for search fucntionality
import AdvanceSearch from "./advanceSearch"
import { internal_resolveProps } from "@mui/utils"

//Creating a load server component
const useQuery = (
	page,
	pageSize,
	order,
	orderBy,
	deleteDialog,
	editDialog,
	addDialog,
	searchInput,
	isAdv,
	advSearchData
) => {
	const [rowCount, setRowCount] = useState(undefined)
	const [isLoading, setIsLoading] = useState(false)
	const [data, setData] = useState([])

	React.useEffect(() => {
		let active = true

		setIsLoading(true)
		setRowCount(undefined)

		// console.log(page, pageSize);

		getData(page, pageSize, order, orderBy, searchInput, isAdv, advSearchData)
			.then((response) => {
				console.log(response)
				setData(
					response.map((e, index) => {
						return {
							id: index,
							sl_no: e.sl_no,
							business_code: e.business_code,
							cust_number: e.cust_number,
							clear_date: (e.clear_date == "0000-00-00" ? "NA" : e.clear_date),
							buisness_year: e.buisness_year,
							doc_id: e.doc_id,
							posting_date: e.posting_date,
							document_create_date: e.document_create_date,
							document_create_date1: e.document_create_date1,
							due_in_datedate: e.due_in_datedate,
							invoice_currency: e.invoice_currency,
							document_type: e.document_type,
							posting_id: e.posting_id,
							area_business: e.area_business,
							total_open_amount: e.total_open_amount,
							baseline_create_date: e.baseline_create_date,
							cust_payment_terms: e.cust_payment_terms,
							invoice_id: e.invoice_id,
							is_open: e.isOpen,
							aging_bucket: (e.aging_bucket == 0 ? "NA" : e.aging_bucket),
							is_deleted: e.is_deleted,
						}
					})
				)
			})
			.catch((err) => {
				console.log(err)
			})
		// console.log(data);
		return () => {
			active = false
		}
	}, [page, pageSize, order, orderBy, deleteDialog, editDialog, addDialog, searchInput, isAdv, advSearchData])

	// setIsLoading(false)
	return { data, rowCount }
}

export default function MainTable() {
	const columns = getHeadingData()
	const [order, setOrder] = useState("ASC")
	const [orderBy, setOrderBy] = useState("sl_no")
	const [selectedRows, setSelectedRows] = useState([])
	const [editDisabled, setEditDisabled] = useState(true)
	const [deleteDisabled, setDeleteDisabled] = useState(true)

	//! Handle Search methods
	const [searchInput, setSearchInput] = useState("");
	const handleSearchField = (event) => {
		setSearchInput(event.target.value);
	}
	//? Advance search
	const [advSearchDialog, setAdvSearchDialog] = useState(false);
	const [isAdv, setIsAdv] = useState(false);
	const [advSearchData, setAdvSearchData] = useState({
		documentID: "",
		invoiceID: "",
		customerNumber: "",
		businessYear: ""
	});
	const handleSearchOpen = () => {
		setAdvSearchDialog(true);
	}
	const handleSearchClose = () => {
		setAdvSearchDialog(false);
	}
	const handleAdvSearch = (data) => {
		setAdvSearchData(data);
		setIsAdv(true);
		setAdvSearchDialog(false);
	}
	//! Handle Refresh of the datagrid

	const handleRefreshGrid = () => {
		setIsAdv(false);
		setAdvSearchData({
			documentID: "",
			invoiceID: "",
			customerNumber: "",
			businessYear: ""
		})
		setSelectedRows([]);
		setSearchInput("");
	}

	//! Add, edit, delete dialogs
	const [addDialog, setAddDialog] = useState(false)
	const [editDialog, setEditDialog] = useState(false)
	const [deleteDialog, setDeleteDialog] = useState(false)


	const handleAddClickOpen = () => {
		setAddDialog(true)
	}
	const handleAddClose = () => {
		setAddDialog(false)
	}

	//! Handle the Edit Operations
	const handleEditClickOpen = () => {
		setEditDialog(true)
	}
	const handleEditClose = () => {
		setEditDialog(false)
	}

	//! Handle the Delete Operations

	const handleDeleteClickOpen = () => {
		setDeleteDialog(true)
	}
	const handleCancel = () => {
		setDeleteDialog(false)
	}
	const handleDelete = () => {
		let toDelete = selectedRows.map(row => {
			return data[row].sl_no;
		})
		console.log("Delete request sent for: ", toDelete.toString());
		axios
			.post(
				"http://localhost:8080/Crud_Web_App/DeleteRows",
				{},
				{
					params: {
						rowsToDelete: toDelete.toString(),
					},
				}
			)
			.then((response) => {
				console.log(response)
			})
			.catch((e) => {
				console.log(e)
			})
		handleCancel()
	}



	useEffect(() => {
		if (selectedRows.length == 1) {
			setEditDisabled(false)
		} else {
			setEditDisabled(true)
		}
		if (selectedRows.length > 0) {
			setDeleteDisabled(false)
		} else {
			setDeleteDisabled(true)
		}
	}, [selectedRows])

	//! page get data method
	const [rowsState, setRowsState] = useState({
		page: 0,
		pageSize: 10,
		order: "ASC",
		orderBy: "sl_no",
	})
	const { data, rowCount } = useQuery(
		rowsState.page,
		rowsState.pageSize,
		rowsState.order,
		rowsState.orderBy,
		deleteDialog,
		editDialog,
		addDialog,
		searchInput,
		isAdv,
		advSearchData
	)
	//! Predict Medthods
	const predictHandler = () => {
		if (selectedRows.length == 0) {
			alert("You must select a row!");
		}
		else {
			let docIdArray = selectedRows.map(rowNumber => {
				return Number(data[rowNumber].doc_id);
			})
			console.log(docIdArray)

			const resultArray = axios.post("http://127.0.0.1:5000/get_prediction", {
				"data": docIdArray
			}, {}).then(response => {
				console.log(response.data)
				let k = 0;
				for (let i = 0; i < selectedRows.length; i++) {
					if (data[selectedRows[i]].clear_date == "NA") {
						data[selectedRows[i]].doc_id = (response.data)[k].aging_bucket
						k++;
					}
				}
				return response.data
			}).catch(err => {
				console.log(err);
			})
		}
	}

	return (
		<div>
			{/* //! Add, Edit, Delete,Advance Search Dialog windows */}
			<AddDialog
				open={addDialog}
				handleClickOpen={handleAddClickOpen}
				handleClose={handleAddClose}
			></AddDialog>
			<EditDialog
				open={editDialog}
				selectedRow={selectedRows[0]}
				handleEditClose={handleEditClose}
			></EditDialog>
			<DeleteDialog
				open={deleteDialog}
				handleCancel={handleCancel}
				handleDelete={handleDelete}
			></DeleteDialog>
			<AdvanceSearch
				open={advSearchDialog}
				handleClose={handleSearchClose}
				handleAdvSearch={handleAdvSearch}
			></AdvanceSearch>


			<FlexBox>
				<ButtonGroup sx={{ width: "33%" }}>
					<StyledCustomButton variant="contained" sx={{ fontSize: "0.6rem" }} onClick={predictHandler}>
						PREDICT
					</StyledCustomButton>
					<StyledCustomButton variant="outlined" sx={{ fontSize: "0.6rem" }}>
						ANALYTICS VIEW
					</StyledCustomButton>
					<StyledCustomButton variant="outlined" onClick={handleSearchOpen} sx={{ fontSize: "0.6rem" }}>
						ADVANCE SEARCH
					</StyledCustomButton>
					<StyledCustomButton variant="contained" onClick={handleRefreshGrid}>
						<Refresh></Refresh>
					</StyledCustomButton>
				</ButtonGroup>
				<Search sx={{ width: "33%" }}>
					<SearchIconWrapper>
						<SearchIcon />
					</SearchIconWrapper>
					<StyledInputBase
						placeholder="Search Customer ID"
						inputProps={{ "aria-label": "search" }}
						onChange={handleSearchField}
						value={searchInput}
					/>
				</Search>
				<ButtonGroup
					variant="outlined"
					aria-label="small outline button group"
					sx={{
						width: "33%",
					}}
				>
					<StyledCustomButton
						variant="outlined"
						width="33%"
						onClick={handleAddClickOpen}
					>
						ADD
					</StyledCustomButton>
					<StyledCustomButton
						variant="outlined"
						width="33%"
						disabled={editDisabled}
						onClick={handleEditClickOpen}
					>
						EDIT
					</StyledCustomButton>
					<StyledCustomButton
						variant="outlined"
						width="33%"
						disabled={deleteDisabled}
						onClick={handleDeleteClickOpen}
					>
						DELETE
					</StyledCustomButton>
				</ButtonGroup>
			</FlexBox>
			<div
				style={{
					height: "70vh",
					width: "90vw",
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					// flexDirection: "column"
				}}
			>
				<DataGrid
					rows={data}
					columns={columns}
					pageSize={10}
					rowsPerPageOptions={[10, 25, 50, 100]}
					checkboxSelection
					rowHeight={35}
					rowCount={50000}
					loading={false}
					// rowsPerPageOptions={[5]}
					//? This is the pagination options
					pagination
					{...rowsState}
					paginationMode="server"
					onPageChange={(page) =>
						setRowsState((prev) => ({ ...prev, page }))
					}
					onPageSizeChange={(pageSize) =>
						setRowsState((prev) => ({ ...prev, pageSize }))
					}
					//? CRUD Section
					selectionModel={selectedRows}
					onSelectionModelChange={(items) => setSelectedRows(items)}
					//? Custom style settings for to make look like the diagrams in the PRS
					sx={DataGridStyle}
				/>
			</div>
		</div>
	)
}
