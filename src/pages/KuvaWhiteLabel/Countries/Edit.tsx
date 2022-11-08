import { ChangeEvent, useEffect, useState } from "react"
import { FormControlLabel, Container, Checkbox, Button } from "@mui/material"
import { useParams, useSearchParams } from "react-router-dom"

import Loader from "../../../components/Loader"

import { useAppDispatch, useAppSelector } from "../../../store"
import { fetchKWLDataById, setKWLCountry, deleteKWLCountry } from "../../../store/actions/kwlActions"
import { fetchCountryList } from "../../../store/actions/countryActions"
import {
  DELETE_KWL_RECEIVE_COUNTRY,
  DELETE_KWL_SOURCE_COUNTRY,
  SET_KWL_RECEIVE_COUNTRY,
  SET_KWL_SOURCE_COUNTRY
} from "../../../store/actions/actionTypes"
import { getApiKWLRecieveCountryPath, getApiKWLSourceCountryPath } from "../../../utils/apiPaths"

type CountriesStateType = { all: number[], added: number[] }

const Edit = () => {
  const { id } = useParams()
  const [params] = useSearchParams()
  const countryTypeIds = params.get('countryTypeIds')

  const [countries, setCountries] = useState<CountriesStateType>({ all: [], added: [] })

  const dispatch = useAppDispatch()
  const { data, dataFetchStart } = useAppSelector(state => state.kwl)
  const { list, listFetchStart } = useAppSelector(state => state.country)

  const countryIds = data[countryTypeIds as 'sourceCountryIds' | 'receiveCountryIds']

  useEffect(() => {
    (async () => {
      await dispatch(fetchCountryList())
      await dispatch(fetchKWLDataById(+id!))
    })()
  }, [])

  const isSourceCountries = countryTypeIds?.includes('source')

  const title = isSourceCountries ? 'Source Countries' : 'Receive Countries'

  const getApiData = (countryId: number = 0) => {
    if (isSourceCountries) {
      return {
        delAction: DELETE_KWL_SOURCE_COUNTRY,
        addAction: SET_KWL_SOURCE_COUNTRY,
        apiPath: getApiKWLSourceCountryPath(+id!, countryId)
      }
    } else {
      return {
        delAction: DELETE_KWL_RECEIVE_COUNTRY,
        addAction: SET_KWL_RECEIVE_COUNTRY,
        apiPath: getApiKWLRecieveCountryPath(+id!, countryId)
      }
    }
  }



  const onChangeInput = (e: ChangeEvent<HTMLInputElement>, type: string) => {
    const value = +e.target.value

    if (countries[type as keyof CountriesStateType].includes(value)) {
      const newValue = countries[type as keyof CountriesStateType].filter((item: number) => item !== value)

      setCountries({ ...countries, [type]: [...newValue] })
    } else setCountries({ ...countries, [type]: [...countries[type as keyof CountriesStateType], value] })
  }

  const onSubmit = async (action: string) => {
    const { all, added } = countries

    if (action === 'add') {
      if (!!all.length) {
        await Promise.all(all.map(async (item: number) =>
          await dispatch(setKWLCountry(getApiData().addAction)(getApiData(item).apiPath))))

        setCountries({ ...countries, all: [] })
      } else return false
    } else {
      if (!!added.length) {
        await Promise.all(added.map(async (item: number) =>
          await dispatch(deleteKWLCountry(getApiData().delAction)(getApiData(item).apiPath))))

          setCountries({ ...countries, added: [] })
        } else return false
      }

    await dispatch(fetchKWLDataById(+id!))
  }
  
  return (
    <Container className="pt-25">
      {dataFetchStart || listFetchStart ? <Loader /> : <div className="kwl-countries">
        <div className="kwl-countries-block">
          <h3 className="mb-20">{title}:</h3>
          <Button
            className="mb-20"
            variant="contained"
            onClick={() => onSubmit('remove')}
            disabled={!countries.added.length}
          >Remove</Button>
          <div className="kwl-countries-block-list">
            {
              list.map(item => {
                if (countryIds.find(id => id === item.id)) return (
                  <div key={item.id}>
                    <FormControlLabel
                      label={item.name}
                      control={<Checkbox value={item.id} onChange={(e) => onChangeInput(e, 'added')} />}
                    />
                  </div>
                )

                return false
              })
            }
          </div>
        </div>

        <div className="kwl-countries-block">
          <div className="kwl-countries-block-top">
            <h3 className="mb-20">All Countries:</h3>
            <Button 
              className="mb-20"
              variant="contained"
              onClick={() => onSubmit('add')}
              disabled={!countries.all.length}
            >Add</Button>
          </div>
          <div className="kwl-countries-block-list">
            {
              list.map(item => (
                <div key={item.id}>
                  <FormControlLabel
                    label={item.name}
                    control={<Checkbox checked={countryIds.includes(item.id) || countries.all.includes(item.id)}
                      value={item.id}
                      onChange={(e) => onChangeInput(e, 'all')}
                      disabled={countryIds.includes(item.id)} />}
                  />
                </div>
              ))
            }
          </div>
        </div>
      </div>}
    </Container>
  )
}

export default Edit
