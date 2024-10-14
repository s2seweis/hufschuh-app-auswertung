"use client";

import Box from "@mui/material/Box";
import { GridRowParams } from "@mui/x-data-grid";
import { columns } from "./columns";
import { DataGridContainer } from "../../core/components/DataGridContainer/DataGridContainer";
import { useHorsesQuery } from "../../core/redux/api/horseApi";
import { useRouter } from "next/navigation";

export default function HorseList() {
  const router = useRouter();
  const navigate = (id: string) => router.push(`pferde/${id}`);

  return (
    <Box sx={{ height: "100%", width: "100%" }}>
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
