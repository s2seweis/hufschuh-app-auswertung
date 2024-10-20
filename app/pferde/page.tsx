"use client";

import Box from "@mui/material/Box";
import { GridRowParams } from "@mui/x-data-grid";
import { columns } from "./columns";
import { DataGridContainer } from "../../core/components/DataGridContainer/DataGridContainer";
import { useHorsesQuery } from "../../core/redux/api/horseApi";
import { useRouter } from "next/navigation";

// ###
import { useDispatch } from "react-redux";
import { logout } from "../../core/redux/auth/authSlice";  // Import logout action
// ###

export default function HorseList() {
  const router = useRouter();
  const navigate = (id: string) => router.push(`pferde/${id}`);
  const dispatch = useDispatch();  // Initialize useDispatch

  const clearLocalStorage = () => {
    // localStorage.clear();  // Clear local storage (e.g., remove authentication tokens)
    // alert('Local storage has been cleared!');
    dispatch(logout());  // Dispatch the logout action to clear authState
    router.push('/');  // Redirect to the home route, where the sign-in form should be shown
  };

  return (
    <Box sx={{ height: "100%", width: "100%" }}>
      <div 
      style={{
        margin:"80px 50px", 
        position:"absolute", 
        height:"auto", 
        zIndex:"100"
      }} 
      className="Logout-Button-Container">
       <button onClick={clearLocalStorage}>Logout</button>
      </div>
      <DataGridContainer
        queryHook={useHorsesQuery}
        defaultColumns={columns}
        onRowClick={(gridRowParams: GridRowParams) =>
          navigate(String(gridRowParams.id))  // Convert the id to string
        }
        searchEnabled={false}
        gridStyles={{
          ".MuiDataGrid-row": {
            maxHeight: "unset !important",
          },
          ".MuiDataGrid-cell": {
            maxHeight: "unset !important",
          },
        }}
      />
    </Box>
  );
}
