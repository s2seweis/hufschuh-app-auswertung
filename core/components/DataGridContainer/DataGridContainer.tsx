"use client";

import React, { SyntheticEvent, useState } from "react";
import { useQuery, UseQueryResult } from "react-query";
import { GridColumns } from "@mui/x-data-grid";
import {
  Box,
  InputAdornment,
  Paper,
  Tab,
  Tabs,
  TextField,
} from "@mui/material";
import { Alert } from "@mui/lab";
import { StyledDataGrid } from "./StyledDataGrid";
import SearchIcon from "../../../assets/icons/SearchIcon";

type PaginatedResponse<T> = {
  data: T[];
  totalCount: number;
  offset: number;
  limit: number;
  totalPages: number;
  page: number;
  pagingCounter: number;
  hasPrevPage: boolean;
  hasNextPage: boolean;
  prevPage: number;
  nextPage: number;
};

export type Filter = {
  [key: string]: {
    $eq?: any;
    $gt?: any;
    $gte?: any;
    $in?: any[];
    $lt?: any;
    $lte?: any;
    $ne?: any;
    $nin?: any[];
  };
};

type FilterPreset = {
  label: string;
  filter: Filter;
};

function a11yProps(index: number) {
  return {
    id: `filter-preset-tab-${index}`,
    "aria-controls": `filter-preset-tabpanel-${index}`,
  };
}

export const DataGridContainer = ({
  queryHook,
  queryHookParams,
  defaultColumns,
  onRowClick,
  filter,
  filterPresets,
  searchEnabled = false,
  gridStyles,
}: {
  // TODO
  queryHook: any;
  queryHookParams?: object;
  queryHookId?: object;
  defaultColumns: GridColumns;
  onRowClick?: (row: any) => void;
  filter?: Filter;
  filterPresets?: FilterPreset[];
  searchEnabled?: boolean;
  gridStyles?: any;
}) => {
  const [pageNumber] = useState(1);
  const [pageSize] = useState(50);
  const [selectedFilterPresets, setSelectedFilterPresets] = useState(0);
  const [search, setSearch] = useState("");

  const combinedFilter = {
    ...filter,
    ...(filterPresets ? filterPresets[selectedFilterPresets].filter : {}),
  };

  // fixme types
  const { data, isFetching, isLoading }: any = queryHook(
    {},
    {
      refetchOnMountOrArgChange: true,
    }
  );

  const handleFilterPresetChange = (
    event: SyntheticEvent,
    newValue: number
  ) => {
    setSelectedFilterPresets(newValue);
  };

  // if (error) {
  //   return <Alert severity="error">{error.message}</Alert>;
  // }

  console.log(data);

  return (
    <Paper
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        width: "100%",
      }}
      elevation={3}
    >
      {/*filter presets */}
      {filterPresets && (
        <Tabs
          value={selectedFilterPresets}
          onChange={handleFilterPresetChange}
          aria-label="Filter Presets"
          sx={{
            flexGrow: 0,
          }}
        >
          {filterPresets.map((preset, index) => (
            <Tab
              key={`tab-preset-${preset.label}`}
              label={preset.label}
              {...a11yProps(index)}
            />
          ))}
        </Tabs>
      )}

      {/*search*/}
      {searchEnabled && (
        <Box sx={{ width: "100%", padding: "1rem", flexGrow: 0 }}>
          <TextField
            fullWidth
            placeholder="Suche"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  {/*@ts-ignore*/}
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        </Box>
      )}

      {/*Table*/}
      <Box
        sx={{
          height: 400,
          width: "100%",
          backgroundColor: "white",
          flexGrow: 1,
        }}
      >
        <StyledDataGrid
          columns={defaultColumns}
          rows={data?.data || []}
          loading={isLoading}
          hideFooterSelectedRowCount
          componentsProps={{
            pagination: {
              labelRowsPerPage: "Zeilen pro Seite",
            },
          }}
          onRowClick={(row) => onRowClick && onRowClick(row)}
          localeText={{
            noRowsLabel: "Es sind noch keine Einträge vorhanden",
            columnHeaderSortIconLabel: "Sortieren",
            MuiTablePagination: {
              labelDisplayedRows: ({ from, to, count }) =>
                `${from} - ${to} von ${count}`,
            },
            // currently hidden
            // footerRowSelected: (selectedCount) =>
            //   `${selectedCount} Zeile(n) ausgewählt`,
          }}
          sx={gridStyles}
        />
      </Box>
    </Paper>
  );
};
