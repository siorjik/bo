import { createBrowserHistory } from 'history'

export const history = createBrowserHistory()

type HistoryProps = 'pathname' | 'search'

export const getLocationProp = (prop: string) => history.location[prop as HistoryProps]

export const goBack = () => history.back()

export const goTo = (url: string) => history.push(url)
