import { styled } from "@mui/material/styles";
import { DataGrid } from "@mui/x-data-grid";

export const StyledDataGrid = styled(DataGrid)(({ theme }) => ({
    ".MuiDataGrid-columnHeaders": {
        backgroundColor: theme.palette.grey["200"],
    },
    ".MuiDataGrid-columnHeader, .MuiDataGrid-cell": {
        padding: "1rem",
    },
    ".MuiDataGrid-columnHeaderTitle": {
        fontWeight: 400,
        textTransform: "uppercase",
    },
}));
