import { useEffect } from "react"
import { Container, Button } from "@mui/material"
import { Link } from "react-router-dom"

import Table from "../../../components/Table"

import { useAppDispatch, useAppSelector } from "../../../store"
import { fetchKWLSiteList } from "../../../store/actions/kwlActions"
import { fetchCountryList } from "../../../store/actions/countryActions"
import { getKwlEditCountriesPath } from "../../../utils/appPaths"
import getCountriesNames from "../../../helpers/getCountriesNames"
import Loader from "../../../components/Loader"

const Countries = () => {
  const dispatch = useAppDispatch()
  const { list } = useAppSelector(state => state.kwl.site)
  const { list: countryList, listFetchStart } = useAppSelector(state => state.country)

  useEffect(() => {
    (async () => {
      await dispatch(fetchCountryList())
      await dispatch(fetchKWLSiteList())
    })()
  }, [])

  const headData = ['id', 'Source Countries', 'Receive Countries']
  const dataKeys = ['id', 'sourceCountries', 'receiveCountries']
  const mappedData = !!countryList.length && list.map(item => ({
    ...item,
    sourceCountries: (
      <div className="flex flex-dir-column">
        <p className="overflow-hidden ellipsis">
          {`${getCountriesNames(item.sourceCountryIds, countryList)}`}
        </p>
        <Button
          className="w-150 mt-10 m-auto"
          variant="contained"
          size="small"
        >
          <Link
            className="color-white"
            to={`${getKwlEditCountriesPath(item.id)}?countryTypeIds=sourceCountryIds`}
          >Add / Remove</Link>
        </Button>
      </div>
    ),
    receiveCountries: (
      <div className="flex flex-dir-column">
        <p className="overflow-hidden ellipsis">
          {`${getCountriesNames(item.receiveCountryIds, countryList)}`}
        </p>
        <Button
          className="w-150 mt-10 m-auto"
          variant="contained"
          size="small"
        >
          <Link
            className="color-white"
            to={`${getKwlEditCountriesPath(item.id)}?countryTypeIds=receiveCountryIds`}
          >Add / Remove</Link>
        </Button>
      </div>
    ),
    cellClass: `${'max-w-300 overflow-hidden'}`
  }))

  return (
    <>
      <Container className="pt-25 pb-10 h-100-percent overflow-hidden" maxWidth={false}>
        {
          listFetchStart ? <Loader /> : <>
            <h3 className="mb-25">Kuva White Label Countries</h3>
            <Table
              bodyData={mappedData || []}
              headData={headData}
              dataKeys={dataKeys}
              containerStyle='pb-100'
              isPagination={false}
            />
          </>
        }
      </Container>
    </>
  )
}

export default Countries
