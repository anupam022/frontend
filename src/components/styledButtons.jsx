import { styled, alpha } from "@mui/material/styles"
import Box from "@mui/material/Box"
import InputBase from "@mui/material/InputBase"
import SearchIcon from "@mui/icons-material/Search"
import Button from "@mui/material/Button"
import ButtonGroup from "@mui/material/ButtonGroup"

//?Styling for the main add/delete/delete buttons

const Search = styled("div")(({ theme }) => ({
	color: "#fefefe",
	position: "relative",
	borderRadius: "10px",
	backgroundColor: "#fefefe",
	height: "45px",
	"&:hover": {
		backgroundColor: "#eee",
	},
	marginRight: "2rem",
	marginLeft: 0,
	width: "100%",
	[theme.breakpoints.up("sm")]: {
		marginLeft: theme.spacing(3),
		width: "auto",
	},
}))

const SearchIconWrapper = styled("div")(({ theme }) => ({
	padding: "0 0.6rem",
	height: "100%",
	position: "absolute",
	pointerEvents: "none",
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	color: "rgba(0,0,0,0.5)"
}))

const StyledInputBase = styled(InputBase)(({ theme }) => ({
	color: "#333",
	fontSize: "0.8rem",
	"& .MuiInputBase-input": {
		padding: "0.5rem 0.5rem 0.5rem 0",
		// vertical padding + font size from searchIcon
		paddingLeft: `calc(1rem + 0.7*3rem)`,
		transition: theme.transitions.create("width"),
		width: "100%",
		[theme.breakpoints.up("md")]: {
			width: "20ch",
		},
	},
}))

const FlexBox = styled("div")(() => ({
	width: "90vw",
	height: "4rem",
	backgroundColor: "none",
	display: "flex",
	flexDirection: "row",
	justifyContent: "space-between",
	alignItems: "center",
	color: "#333",
	// padding:"0 80px"
}))

const StyledCustomButton = styled(Button)((theme) => ({
	fontSize: "0.6rem",
	width: theme.width,
	height: "2rem",
	color: "#fefefe",

	// border: "2px solid #333",
	// color: "#333"
}))

const DataGridStyle = {
	color: "#fefefe",
	fontSize: "0.8rem",
	// border: "2px solid rgba(255,255,255, 0.2)",
	border: "none",
	"& .MuiCheckbox-root .MuiSvgIcon-root": {
		color: "#fefefe",
		fontSize: "1rem",
	},
	"& .MuiCheckbox-root .Mui-checked": {
		color: "#1976d2",
	},
	"& .MuiDataGrid-iconSeparator": {
		display: "none",
	},
	"& .MuiDataGrid-columnHeaders": {
		borderBottom: `none`,
		backgroundColor: "rgba(0,0,0,0.15)",
	},
	"& .MuiDataGrid-footerContainer": {
		border: `none`,
		backgroundColor: "rgba(0,0,0,0.15)",
		color: "#fefefe",
	},
	"& .MuiDataGrid-footerContainer .MuiTablePagination-root": {
		color: "#fefefe !important",
	},
	"& .MuiDataGrid-columnsContainer, .MuiDataGrid-cell": {
		borderBottom: `2px solid rgba(255,255,255, 0.2)`,
	},
	"& .MuiDataGrid-cell": {
		color: "#fefefe",
	},
	".MuiDataGrid-columnHeader :hover .MuiDataGrid-sortIcon": {
		color: "#fefefe",
	},
	".MuiDataGrid-columnHeader .MuiDataGrid-sortIcon": {
		color: "#fefefe",
	},
	".MuiDataGrid-columnHeader .MuiDataGrid-menuIcon button svg": {
		color: "#fefefe",
	},
}

export {
	Search,
	SearchIconWrapper,
	StyledInputBase,
	StyledCustomButton,
	FlexBox,
	DataGridStyle
}
