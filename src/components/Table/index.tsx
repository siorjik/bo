import { TableContainer, Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material"
import moment from 'moment'

import Pagination from './Pagination'

type ObjDataType = {
  [key: string]:
  string | number | boolean | JSX.Element | number[] | string[] |
  { [key: string]: string | number | boolean | [] }
}

type TableType = {
  headData: string[]
  bodyData: ObjDataType[]
  dataKeys: string[]
  containerStyle: string,
  fetchData?: (params: { [key: string]: string | number }) => void,
  isPagination?: boolean,
  isZebra?: boolean,
  dataCount?: number,
  isResetPagination?: boolean,
}

export default ({
  headData,
  bodyData,
  dataKeys,
  containerStyle,
  fetchData = () => { },
  isPagination = true,
  isZebra = true,
  dataCount = 0,
  isResetPagination = false
}: TableType
) => {
  const getValue = (item: ObjDataType, key: string | boolean) => {
    if (typeof item[key as string] === 'boolean') return item[key as string] ? 'Yes' : 'No'
    else return item[key as string]
  }

  return (
    <TableContainer className={`h-100-percent ${containerStyle}`}>
      <Table className={`table ${isZebra ? 'zebra' : ''}`} stickyHeader>
        <TableHead>
          <TableRow>
            {headData.map((item, index) => (<TableCell className="white-space-no" key={index}><h4>{item}</h4></TableCell>))}
          </TableRow>
        </TableHead>
        <TableBody>
          {
            bodyData.map((item, index) => (
              <TableRow key={index}>
                {
                  dataKeys.map((key, index) => {
                    if (key.includes('Date')) item[key] = moment(item[key] as string).format('DD/MM/YYYY, HH:mm:ss')

                    return (
                      <TableCell
                        className={`white-space-no ${key !== 'id' && item.cellClass ? item.cellClass : ''}`}
                        key={index}
                      >{getValue(item, key) as string | number | JSX.Element}</TableCell>
                    )
                  })
                }
              </TableRow>
            ))
          }
        </TableBody>
        {isPagination && <Pagination fetchData={fetchData} count={dataCount} isReset={isResetPagination} />}
      </Table>
    </TableContainer>
  )
}
