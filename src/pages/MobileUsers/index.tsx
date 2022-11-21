import { useEffect, useState, FormEvent } from "react"
import { Button, Container, TextField } from "@mui/material"
import { DeleteRounded, ReceiptLongRounded } from "@mui/icons-material"
import { DatePicker } from "antd"
import moment from 'moment'

import Loader from "../../components/Loader"
import Table from "../../components/Table"

import getQueryString from "../../helpers/getQueryString"
import { useAppDispatch, useAppSelector } from "../../store"
import { fetchMobileUserList } from "../../store/actions/mobileUserActions"
import { mobileUserStatuses, riskLevelMarkers } from "../../utils/constants"

type PaginationStateType = { offset: number, pageSize: number }

const { RangePicker } = DatePicker

const MobileUsers = () => {
  const [query, setQuery] = useState({ query: '', start: '', end: '' })
  const [isResetPagination, setResetPagination] = useState(false)
  const [pagination, setPagination] = useState<PaginationStateType>({ offset: 0, pageSize: 10 })

  const dispatch = useAppDispatch()
  const { list: { items, count }, listFetchFinished } = useAppSelector(state => state.mobileUser)
  const { isMobileView } = useAppSelector(state => state.display)

  useEffect(() => {
    (async () => {
      await dispatch(fetchMobileUserList(getQueryString(pagination)))
    })()
  }, [])

  useEffect(() => {
    setResetPagination(false)
  }, [isResetPagination])

  const changeSearch = (value: string) => {
    setQuery({ ...query, query: value })
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

    await dispatch(fetchMobileUserList(queryString))

    setPagination({ ...params } as PaginationStateType)
    setResetPagination(false)
  }

  const onChangeDate = async (val: any) => {
    let queryString = { ...query, ...pagination, offset: 0, }
    let start, end
    
    if (val) {
      start = moment(val[0]).format('MM/DD/YYYY')
      end = moment(val[1]).format('MM/DD/YYYY')

      queryString = {
        ...queryString,
        start,
        end,
      }

    } else {
      queryString.start = queryString.end = ''

      start = end = ''
    }
    
    await dispatch(fetchMobileUserList(getQueryString(queryString)))
    
    setQuery({ ...query, start, end })
  }

  const domain = process.env.REACT_APP_BACK_OFFICE_DOMAIN

  const headData = [
    'Status',
    'Roles',
    'Registration Date',
    'User Risk',
    'Full Name',
    'Email',
    'Phone Number',
    'Wallet Address Usd',
    'Transactions',
    'Block',
    'Invite',
    'Details',
    'Delete',
  ]

  const dataKeys = [
    'status',
    'roles',
    'registrationDate',
    'riskScore',
    'fullName',
    'email',
    'phoneNumber',
    'walletAddressUsd',
    'transactions',
    'block',
    'invite',
    'detailsBtn',
    'delete',
  ]

  const mappedData = items.map(item =>
  ({
    ...item,
    riskScore: <span className={`color-${riskLevelMarkers[item.riskScore]}`}>{item.riskScore}</span>,
    status: <span className={`color-${mobileUserStatuses[item.status].color}`}>{mobileUserStatuses[item.status].value}</span>,
    fullName: <span>{item.firstName} {item.lastName}</span>,
    roles: <span>{item.roles.join(',')}</span>,
    transactions: (
      <span className="cursor-pointer" onClick={() => window.open(`${domain}/MobileUsers/${item.id}#!/Transactions`, '_blank')}>
        <ReceiptLongRounded />
      </span>
    ),
    invite: <Button size="small" variant='contained'>{item.canInvite ? 'Disallow to invite' : 'Allow to invite'}</Button>,
    delete: <span className="cursor-pointer"><DeleteRounded /></span>,
    detailsBtn: (
      <Button size="small" variant='contained' href={`${domain}/MobileUsers/${item.id}`} target='_blank'>Details</Button>
    )
  })
  )

  return (
    <>
      {
        !listFetchFinished ? <Loader /> :
          <Container className="pt-25 pb-10 h-100-percent overflow-hidden" maxWidth='xl'>
            <h3 className="mb-25">Mobile Users</h3>
            <div className={`flex j-content-space-between ${isMobileView ? 'flex-dir-column' : ''}`}>
              <RangePicker className="mb-20 mr-10" onChange={onChangeDate} showTime />
              <form className="search mb-20 ml-10" onSubmit={clickSearch}>
                <TextField
                  label='Search by Status, Full Name, Email, Wallet Address Usd'
                  size="small"
                  value={query.query}
                  onChange={({ target: { value } }) => changeSearch(value)}
                />
                <Button size="small" variant="contained" type="submit">Apply</Button>
              </form>
            </div>
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

export default MobileUsers
