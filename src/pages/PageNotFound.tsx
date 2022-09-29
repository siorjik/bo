import { Button } from "@mui/material"
import { Container } from '@mui/material'

import { goBack } from "../helpers/history"

const PageNotFound = () => {
  return (
    <>
      <Container maxWidth='sm'>
        <div className="flex align-items-center j-content-center flex-dir-column text-center h-100-vh">
          <h2>Page not found :(</h2>
          <Button className="w-100" variant="outlined" onClick={() => goBack()}>Go back</Button>
        </div>
      </Container>
    </>
  )
}

export default PageNotFound
