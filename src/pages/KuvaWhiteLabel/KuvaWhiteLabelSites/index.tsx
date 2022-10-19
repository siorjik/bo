import { Container, Button } from "@mui/material"
import { useEffect } from "react"

import Table from "../../../components/Table"

import { useAppDispatch, useAppSelector } from "../../../store"
import { fetchKWLSiteList } from "../../../store/actions/kwlActions"

const KuvaWhiteLabelSites = () => {
  const dispatch = useAppDispatch()
  const { list } = useAppSelector(state => state.kwl.site)

  useEffect(() => {
    dispatch(fetchKWLSiteList())
  }, [])

  const domain = process.env.REACT_APP_BACK_OFFICE_DOMAIN

  const headData = ['id', 'Host Url', 'Is Default', 'Details']
  const dataKeys = ['id', 'hostUrl', 'isDefault', 'detailsBtn']
  const mappedData = list.map(item =>
    ({
      ...item,
      detailsBtn: (
        <Button size="small" variant='contained' href={`${domain}/KuvaWhiteLabel/${item.id}`} target='_blank'>Details</Button>
      )
    })
  )
  
  return (
    <>
      <Container className="pt-25 pb-10 h-100-percent overflow-hidden" maxWidth='xl'>
        <h3 className="mb-25">Kuva White Label Sites</h3>
        <Button
          className="mb-20"
          variant="contained"
          href={`${domain}/KuvaWhiteLabel/Create`} target='_blank'
        >Create new</Button>
        <Table bodyData={mappedData} headData={headData} dataKeys={dataKeys} сontainerStyle='pb-100' />
      </Container>
    </>
  )
}

export default KuvaWhiteLabelSites
