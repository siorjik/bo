import { FormEvent, useEffect, useState } from "react"
import { Container, Button, TextField } from "@mui/material"

import Loader from "../../../components/Loader"
import Table from "../../../components/Table"

import { useAppDispatch, useAppSelector } from "../../../store"
import { fetchCashOutPendingList } from "../../../store/actions/cashOutActions"
import getQueryString from "../../../helpers/getQueryString"

type PaginationStateType = { offset: number, pageSize: number }

const PendingRequests = () => {
  const [query, setQuery] = useState('')
  const [isResetPagination, setResetPagination] = useState(false)
  const [pagination, setPagination] = useState<PaginationStateType>({ offset: 0, pageSize: 10 })

  const dispatch = useAppDispatch()
  const { list: { items, count }, listFetchFinished } = useAppSelector(state => state.cashOut.cashOutPending)

  useEffect(() => {
    (async () => {
      await dispatch(fetchCashOutPendingList(getQueryString(pagination)))
    })()
  }, [])

  useEffect(() => {
    setResetPagination(false)
  }, [isResetPagination])

  const changeSearch = (value: string) => {
    setQuery(value)
    setResetPagination(true)
  }

  const clickSearch = async (e: FormEvent) => {
    e.preventDefault()

    await fetchData({ ...pagination, offset: 0 }, true)

    setResetPagination(true)
  }

  const fetchData = async (params: { [key: string]: string | number } = pagination, isApply: boolean = false) => {
    const queryString = getQueryString({ query: !isResetPagination || isApply ? query : '', ...params })

    await dispatch(fetchCashOutPendingList(queryString))

    setPagination({ ...params } as PaginationStateType)
    setResetPagination(false)
  }

  const domain = process.env.REACT_APP_BACK_OFFICE_DOMAIN

  const headData = ['Created', 'Amount', 'User', 'Status', 'Cash Out Date', 'Details']
  const dataKeys = ['createdDate', 'amount', 'phoneNumber', 'status', 'cashOutDate', 'detailsBtn']
  const mappedData = items.map(item =>
  ({
    ...item,
    phoneNumber: item.user && item.user.phoneNumber,
    detailsBtn: (
      <Button size="small" variant='contained' href={`${domain}/Cashout/Details/${item.id}`} target='_blank'>Details</Button>
    )
  })
  )

  return (
    <>
      {
        !listFetchFinished ? <Loader /> :
          <Container className="pt-25 pb-10 h-100-percent overflow-hidden" maxWidth='xl'>
            <h3 className="mb-25">Cashout Pending Requests</h3>
            <form className="search mb-20" onSubmit={clickSearch}>
              <TextField label='Search' size="small" value={query} onChange={({ target: { value } }) => changeSearch(value)} />
              <Button size="small" variant="contained" type="submit">Apply</Button>
            </form>
            <Table
              bodyData={mappedData}
              headData={headData}
              dataKeys={dataKeys}
              containerStyle='pb-100'
              fetchData={fetchData}
              dataCount={count}
              isResetPagination={isResetPagination}
            />
          </Container>
      }
    </>
  )
}

export default PendingRequests
