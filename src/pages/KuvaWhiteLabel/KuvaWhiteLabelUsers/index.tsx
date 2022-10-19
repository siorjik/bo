import { Container } from "@mui/material"
import { useEffect } from "react"

import Table from "../../../components/Table"
import Loader from "../../../components/Loader"

import { useAppDispatch, useAppSelector } from "../../../store"
import { fetchKWLUserList } from "../../../store/actions/kwlActions"

const KuvaWhiteLabelUsers = () => {
  const dispatch = useAppDispatch()
  const { list, listFetchFinished } = useAppSelector(state => state.kwl.user)

  useEffect(() => {
    dispatch(fetchKWLUserList())
  }, [])

  const headData = ['Name', 'Email', 'Phone Number', 'KWL Site']
  const dataKeys = ['name', 'email', 'phoneNumber', 'kwlHostUrl']
  const mappedData = list.map(item =>
    ({ ...item, kwlHostUrl: <a className="link-a" href={item.kwlHostUrl} target='_blank' rel="noreferrer">{item.kwlHostUrl}</a> })
  )

  return (
    <>
      {
        !listFetchFinished ? <Loader /> :
        <Container className="pt-25 pb-10 h-100-percent overflow-hidden" maxWidth='xl'>
          <h3 className="mb-25">Kuva White Label Users</h3>
          <Table bodyData={mappedData} headData={headData} dataKeys={dataKeys} сontainerStyle='pb-50' />
        </Container>
      }
    </>
  )
}

export default KuvaWhiteLabelUsers
