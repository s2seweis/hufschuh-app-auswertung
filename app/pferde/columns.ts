import {
  GridColDef,
  GridValueFormatterParams,
  GridValueGetterParams,
} from "@mui/x-data-grid";

export const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 90, hide: true },
  {
    field: "owner",
    headerName: "Besitzer",
    width: 150,
    editable: true,
    valueGetter: (params: GridValueGetterParams) => {
      const horse = params.row;
      return `${horse.owner.firstName} ${horse.owner.lastName}`;
    },
  },
  {
    field: "owner.createdAt",
    headerName: "Registriert am",
    width: 150,
    editable: true,
    valueGetter: (params: GridValueGetterParams) =>
      new Date(params.row.owner.createdAt).toLocaleDateString(),
  },

  {
    field: "name",
    headerName: "Pferd Name",
    width: 150,
    editable: true,
  },
  {
    field: "inquiryAt",
    headerName: "Anfrage am",
    width: 150,
    editable: true,
    valueFormatter: (params: GridValueFormatterParams) =>
      params.value ? new Date(params.value).toLocaleDateString() : "-",
  },
  {
    field: "offerCreatedAt",
    headerName: "Angebot am",
    width: 110,
    editable: true,
    valueFormatter: (params: GridValueFormatterParams) =>
      params.value ? new Date(params.value).toLocaleDateString() : "-",
  },
  {
    field: "updatedAt",
    headerName: "Änderung",
    width: 150,
    editable: true,
    valueFormatter: (params: GridValueFormatterParams) =>
      new Date(params.value).toLocaleDateString(),
  },
  {
    field: "meta.difficulty",
    headerName: "Schwierigkeit",
    width: 150,
    editable: true,
    valueGetter: (params: GridValueGetterParams) => {
      const horse = params.row;
      return horse.meta?.difficulty;
    },
  },
  {
    field: "meta.editor",
    headerName: "Bearbeitet von",
    width: 150,
    editable: true,
    valueGetter: (params: GridValueGetterParams) => {
      const horse = params.row;
      return horse.meta?.editor;
    },
  },
  {
    field: "meta.state",
    headerName: "Status",
    width: 150,
    editable: true,
    valueGetter: (params: GridValueGetterParams) => {
      const horse = params.row;
      return horse.meta?.state;
    },
  },
];
