import { Container } from "@mui/material"

import Header from "../Header"
import Footer from "../Footer"

export default ({ children }: { children: JSX.Element }) => {
  return (
    <>
      <Header />
      <div className="content simple">
        <Container className="pb-30 overflow-auto">
          {children}
        </Container>
      </div>
      <Footer />
    </>
  )
}