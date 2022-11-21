import { useEffect, useState, FormEvent } from "react"
import { Button, Container, TextField } from "@mui/material"

import Loader from "../../../components/Loader"
import Table from "../../../components/Table"

import { useAppDispatch, useAppSelector } from "../../../store"
import { fetchTopUpCashrailList } from "../../../store/actions/topUpActions"
import getQueryString from "../../../helpers/getQueryString"
import { fundTypes, topUpStatuses } from "../../../utils/constants"

type PaginationStateType = { offset: number, pageSize: number }

const Cashrail = () => {
  const [query, setQuery] = useState({ reference: '' })
  const [isResetPagination, setResetPagination] = useState(false)
  const [pagination, setPagination] = useState<PaginationStateType>({ offset: 0, pageSize: 10 })

  const dispatch = useAppDispatch()
  const { list: { items, count }, listFetchFinished } = useAppSelector(state => state.topUp.cashrail)

  useEffect(() => {
    (async () => {
      await dispatch(fetchTopUpCashrailList(getQueryString(pagination)))
    })()
  }, [])

  useEffect(() => {
    setResetPagination(false)
  }, [isResetPagination])

  const changeSearch = (value: string) => {
    setQuery({ reference: value })
    setResetPagination(true)
  }

  const clickSearch = async (e: FormEvent) => {
    e.preventDefault()

    await fetchData({ ...pagination, offset: 0 }, true)

    setResetPagination(true)
  }

  const fetchData = async (params: { [key: string]: string | number } = pagination, isApply: boolean = false) => {
    let queryString

    if (!isResetPagination || isApply) queryString = getQueryString({ ...query, ...params })
    else queryString = getQueryString(params)

    await dispatch(fetchTopUpCashrailList(queryString))

    setPagination({ ...params } as PaginationStateType)
    setResetPagination(false)
  }

  const domain = process.env.REACT_APP_BACK_OFFICE_DOMAIN

  const headData = ['Created', 'Reference', 'Type', 'Status', 'From', 'To', 'Agent', 'Details']
  const dataKeys = ['createdDate', 'reference', 'requestType', 'status', 'from', 'to', 'agent', 'detailsBtn']
  const mappedData = items.map(item =>
  ({
    ...item,
    from: `${item.sourceAmount} ${item.sourceCurrency}`,
    to: `${item.destinationAmount} ${item.destinationCurrency}`,
    agent: item.agent && item.agent.email,
    status: <span className={`color-${topUpStatuses[item.status].color}`}>{topUpStatuses[item.status].value}</span>,
    requestType: <span className={`color-${fundTypes[item.requestType].color}`}>{fundTypes[item.requestType].value}</span>,
    detailsBtn: (
      <Button size="small" variant='contained' href={`${domain}/TopUp/cashrail/${item.id}`} target='_blank'>Details</Button>
    )
  })
  )

  return (
    <>
      {
        !listFetchFinished ? <Loader /> :
          <Container className="pt-25 pb-10 h-100-percent overflow-hidden" maxWidth='xl'>
            <h3 className="mb-25">Top Up Cashrail</h3>
            <form className="search mb-20" onSubmit={clickSearch}>
              <TextField
                label='Search by Reference...'
                size="small"
                value={query.reference}
                onChange={({ target: { value } }) => changeSearch(value)}
              />
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

export default Cashrail
