import { TableContainer, Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material"

type TableType = {
  headData: string[]
  bodyData: { [key: string]: string | number | boolean | JSX.Element }[]
  dataKeys: string[]
  isZebra?: boolean,
}

export default ({ headData, bodyData, dataKeys, isZebra = true }: TableType) => {
  const getValue = (item: { [key: string]: string | number | boolean | JSX.Element }, key: string | boolean) => {
    if (typeof item[key as string] === 'boolean') return item[key as string] ? 'Yes' : 'No'
    else return item[key as string]
  }

  return (
    <TableContainer sx={{ maxHeight: 440 }}>
      <Table className={`table ${isZebra ? 'zebra' : ''}`}>
        <TableHead>
          <TableRow>
            {
              headData.map((item, index) => (<TableCell key={index}><h4>{item}</h4></TableCell>))
            }
          </TableRow>
        </TableHead>
        <TableBody>
          {
            bodyData.map((item, index) => (
              <TableRow key={index}>
                {
                  dataKeys.map((key, index) => (
                    <TableCell key={index}>{getValue(item, key)}</TableCell>
                  ))
                }
              </TableRow>
            ))
          }
        </TableBody>
      </Table>
    </TableContainer>
  )
}
