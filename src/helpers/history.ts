import { createBrowserHistory } from 'history'

export const history = createBrowserHistory()

type HistoryProps = 'pathname' | 'search'

export const getLocationProp = (prop: string) => history.location[prop as HistoryProps]
