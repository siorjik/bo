import { useState, useEffect } from 'react'
import { TableRow, IconButton, TableFooter, TablePagination } from '@mui/material'
import { LastPage, FirstPage, KeyboardArrowRight, KeyboardArrowLeft } from '@mui/icons-material'
import { useTheme } from '@mui/material/styles'

type TablePaginationActionsProps = {
  count: number,
  page: number,
  rowsPerPage: number,
  onPageChange: (
    event: React.MouseEvent<HTMLButtonElement>,
    newPage: number,
  ) => void,
}

export default ({ fetchData, count, isReset }:
  { fetchData: (params: { [key: string]: string | number }) => void,
    count: number,
    isReset: boolean,
  }
) => {
  const [paginationData, setPaginationData] = useState({ page: 0, rowsPerPage: 10 })

  useEffect(() => {
    if (isReset && paginationData.page !== 0) handleChangePage(null, 0)
  }, [isReset])

  const theme = useTheme()

  const TablePaginationActions = (props: TablePaginationActionsProps) => {
    const { count, page, rowsPerPage, onPageChange } = props

    const handleFirstPageButtonClick = (
      event: React.MouseEvent<HTMLButtonElement>,
    ) => {
      onPageChange(event, 0)

      const obj = { pageSize: rowsPerPage, offset: 0 }

      fetchData(obj)
    }

    const handleBackButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      onPageChange(event, page - 1)

      const obj = { pageSize: rowsPerPage, offset: (page * rowsPerPage) - rowsPerPage }

      fetchData(obj)
    }

    const handleNextButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      onPageChange(event, page + 1)

      const obj = { pageSize: rowsPerPage, offset: (page * rowsPerPage) + rowsPerPage }

      fetchData(obj)
    }

    const handleLastPageButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      const page = Math.max(0, Math.ceil(count / rowsPerPage) - 1)
      onPageChange(event, page)

      const obj = { pageSize: rowsPerPage, offset: rowsPerPage * page }
      fetchData(obj)
    }

    return (
      <>
        <IconButton
          onClick={handleFirstPageButtonClick}
          disabled={page === 0}
          aria-label="first page"
        >
          {theme.direction === 'rtl' ? <LastPage /> : <FirstPage />}
        </IconButton>
        <IconButton
          onClick={handleBackButtonClick}
          disabled={page === 0}
          aria-label="previous page"
        >
          {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
        </IconButton>
        <IconButton
          onClick={handleNextButtonClick}
          disabled={page >= Math.ceil(count / rowsPerPage) - 1}
          aria-label="next page"
        >
          {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
        </IconButton>
        <IconButton
          onClick={handleLastPageButtonClick}
          disabled={page >= Math.ceil(count / rowsPerPage) - 1}
          aria-label="last page"
        >
          {theme.direction === 'rtl' ? <FirstPage /> : <LastPage />}
        </IconButton>
      </>
    )
  }

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    page: number,
  ) => {
    setPaginationData({ ...paginationData, page })
  }

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setPaginationData({ page: 0, rowsPerPage: parseInt(event.target.value, 10) })

    fetchData({ pageSize: event.target.value, offset: 0 })
  }

  return (
    <TableFooter>
      <TableRow>
        <TablePagination
          rowsPerPageOptions={[10, 25, 50]}
          count={count}
          rowsPerPage={paginationData.rowsPerPage}
          page={paginationData.page}
          SelectProps={{
            inputProps: {
              'aria-label': 'rows per page',
            },
            native: true,
          }}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          ActionsComponent={TablePaginationActions}
        />
      </TableRow>
    </TableFooter>
  )
}
