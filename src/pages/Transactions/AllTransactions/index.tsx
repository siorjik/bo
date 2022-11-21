import { useEffect, useState, FormEvent } from "react"
import { Button, Container } from "@mui/material"
import { DatePicker } from "antd"
import moment, { MomentInput } from 'moment'

import Filter from "./Filter"
import Loader from "../../../components/Loader"
import Table from "../../../components/Table"

import getQueryString from "../../../helpers/getQueryString"
import { useAppDispatch, useAppSelector } from "../../../store"
import { fetchTransactionAllList } from "../../../store/actions/transactionActions"
import { coinTypes, transactionTypes, transferStatuses } from "../../../utils/constants"
import concatenateObjProps from "../../../helpers/concatenateObjProps"

type PaginationStateType = { offset: number, pageSize: number }
type QueryStateType = {
  dates: {
    startDate: string,
    endDate: string,
  },
  fromAddress: string,
  toAddress: string,
  bwsId: string,
  originTransactionId: string,
}

const { RangePicker } = DatePicker

const AllTransactions = () => {
  const [pagination, setPagination] = useState<PaginationStateType>({ offset: 0, pageSize: 10 })
  const [query, setQuery] = useState<QueryStateType>({
    fromAddress: '', toAddress: '', dates: { startDate: '', endDate: '' }, bwsId: '', originTransactionId: ''
  })
  const [isResetPagination, setResetPagination] = useState(false)
  const [isShowFilters, setShowFilters] = useState(false)

  const dispatch = useAppDispatch()
  const { list: { items, count }, listFetchFinished } = useAppSelector(state => state.transaction.all)
  const { isMobileView } = useAppSelector(state => state.display)

  useEffect(() => {
    (async () => {
      await dispatch(fetchTransactionAllList(getQueryString(pagination)))
    })()
  }, [])

  useEffect(() => {
    setResetPagination(false)
  }, [isResetPagination])

  const changeSearch = (value: string, name: string) => {
    setQuery({ ...query, [name]: value })
    setResetPagination(true)
  }

  const clickSearch = async (e: FormEvent) => {
    e.preventDefault()

    await fetchData({ ...pagination, offset: 0 }, true)

    setResetPagination(true)
    setShowFilters(false)
  }

  const fetchData = async (params: { [key: string]: string | number } = pagination, isApply: boolean = false) => {
    let queryString

    if (!isResetPagination || isApply) queryString = getQueryString(concatenateObjProps({ ...query, ...params }))
    else queryString = getQueryString(params)

    await dispatch(fetchTransactionAllList(queryString))

    setPagination({ ...params } as PaginationStateType)
    setResetPagination(false)
  }

  const onChangeDate = async (val: [MomentInput, MomentInput] | null) => {
    let queryString = { ...query, ...pagination, offset: 0, }
    let startDate, endDate

    if (val) {
      startDate = moment(val[0]).format('MM/DD/YYYY')
      endDate = moment(val[1]).format('MM/DD/YYYY')

      queryString = {
        ...queryString,
        dates: { startDate, endDate }
      }

    } else {
      queryString.dates.startDate = queryString.dates.endDate = ''

      startDate = endDate = ''
    }

    await dispatch(fetchTransactionAllList(getQueryString(concatenateObjProps(queryString))))

    setQuery({ ...query, dates: { startDate, endDate } })
  }

  const clearFilters = async () => {
    const queryString = { ...pagination, dates: { ...query.dates } }

    await dispatch(fetchTransactionAllList(getQueryString(concatenateObjProps(queryString))))

    setQuery({ ...query, toAddress: '', fromAddress: '', bwsId: '', originTransactionId: '' })
    setResetPagination(true)
  }

  const domain = process.env.REACT_APP_BACK_OFFICE_DOMAIN

  const headData = [
    'Details', 'ID', 'Type', 'Status', 'Created Date', 'Wallet Type', 'Amount (USD)', 'Comission (USD)', 'Amount (Coin)',
    'Comission (Coin)', 'USD Rate', 'Full Name', 'Phone Number', 'From Address', 'To Address', 
    'Bws Id', 'Origin Tx Id',
  ]

  const dataKeys = [
    'detailsBtn', 'id', 'txType', 'transferStatus', 'createdDate', 'walletType', 'amountUsd', 'comissionUsd', 'amountCoins',
    'comissionCoins', 'dashToUsdRate', 'fullName', 'phoneNumber', 'senderWalletAddress',
    'recipientWalletAddress', 'bwsId', 'originTxId',
  ]

  const mappedData = items.map(item =>
  ({
    ...item,
    txType: <span>{transactionTypes[item.txType]}</span>,
    transferStatus: (
      <span className={`color-${transferStatuses[item.transferStatus].color}`}>
        {transferStatuses[item.transferStatus].value}
      </span>
    ),
    fullName: <span>{item.sender && item.sender.firstName} {item.sender && item.sender.lastName}</span>,
    phoneNumber: <span>{item.sender && item.sender.phoneNumber}</span>,
    walletType: <span>{coinTypes[item.walletType]}</span>,
    comissionUsd: <span>{item.commissionUsd}</span>,
    comissionCoins: <span>{item.commissionCoins}</span>,
    originTxId: <span className="w-50">{item.originTxId}</span>,
    detailsBtn: (
      <Button
        size="small"
        variant='contained'
        href={`${domain}/MobileUsers/TransactionDetails/${item.id}`}
        target='_blank'
      >Details</Button>
    )
  })
  )

  const { fromAddress, toAddress, bwsId, originTransactionId } = query

  const isDisabled = !fromAddress && !toAddress && !bwsId && !originTransactionId

  return (
    <>
      {
        !listFetchFinished ? <Loader /> :
          <Container className="pt-25 pb-10 h-100-percent overflow-hidden" maxWidth='xl'>
            <h3 className="mb-25">All Transactions</h3>
            <div className={`flex j-content-space-between ${isMobileView ? 'flex-dir-column' : ''}`}>
              <RangePicker className="mb-20" onChange={onChangeDate} showTime />
              <div className="mb-20 align-self-end">
                <Button
                  className="w-130 mr-15"
                  variant='outlined'
                  size="small"
                  onClick={() => setShowFilters(true)}
                >Show Filters</Button>
                
                <Button
                  className="w-130"
                  variant='outlined'
                  size="small"
                  onClick={clearFilters}
                  disabled={isDisabled}
                >Clear Filters</Button>
              </div>
            </div>
            <Filter
              query={query}
              onChange={async (value, name) => changeSearch(value, name)}
              onSubmit={clickSearch}
              isDisabled={isDisabled}
              isShow={isShowFilters}
              setShow={async (isShow) => setShowFilters(isShow)}
            />
            <Table
              bodyData={mappedData}
              headData={headData}
              dataKeys={dataKeys}
              containerStyle={`${!isMobileView ? 'pb-100' : 'pb-160'}`}
              fetchData={fetchData}
              dataCount={count}
              isResetPagination={isResetPagination}
            />
          </Container>
      }
    </>
  )
}

export default AllTransactions
