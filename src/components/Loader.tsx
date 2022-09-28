import CircularProgress from '@mui/material/CircularProgress'

export default () => {
  return (
    <div className="loader">
      <div className="spinner">
        <CircularProgress color='secondary' />
      </div>
    </div>
  )
}
