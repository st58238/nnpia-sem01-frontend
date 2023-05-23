import {DataGrid, GridColDef, GridRowsProp, GridSortModel} from "@mui/x-data-grid";
import {useEffect, useState} from "react";

interface Props {
    rows: GridRowsProp,
    cols: GridColDef[],
    rowCount: number,
    defaultSortField: string | undefined,
    defaultSortDirection: string | undefined
}

const Table = (data: Props) => {
    const rowCount = data.rowCount
    const [rowCountState, setRowCountState] = useState(rowCount)

    let sortModel: GridSortModel | undefined = undefined
    if (data.defaultSortField != null && data.defaultSortDirection != null) {
        sortModel = [{field: data.defaultSortField, sort: data.defaultSortDirection.toLowerCase()}]
    }


    useEffect(() => {
        setRowCountState((prevRowCountState) =>
            rowCount !== undefined ? rowCount : prevRowCountState,
        );
    }, [rowCount, setRowCountState]);

    return <DataGrid
        rows={data.rows}
        columns={data.cols}
        paginationMode='server'
        rowCount={rowCountState}
        keepNonExistentRowsSelected
        sortModel={sortModel}
    />
}

export default Table