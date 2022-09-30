import { Component, ErrorInfo } from "react"
import axios from 'axios'
import { Button, Container } from '@mui/material'

type StateType = {
  hasError: boolean,
  message: string | null,
}

class ErrorBoundary extends Component<{ children: JSX.Element }, StateType> {
  constructor(props: { children: JSX.Element } | Readonly<{ children: JSX.Element }>) {
    super(props)
    this.state = { hasError: false, message: null }

    this.checkResponse()
  }

  static getDerivedStateFromError(err: Error) {
    return { hasError: true }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo | null): void {
    this.setState({ message: error.message })
  }

  checkResponse = () => axios.interceptors.response.use((resp) => {
    return resp
  }, (error) => {
    this.setState({ hasError: true, message: error.message })

    return Promise.reject(error)
  })

  getErrorTemplate = () => (
    <Container maxWidth='sm'>
      <div className="flex align-items-center j-content-center flex-dir-column h-100-vh">
        <h2>ooops, something broke :(</h2>
        <div className="flex">
          <h3 className="white-space-no">error message:</h3> &nbsp; <h3 className="err-mess">{this.state.message}</h3>
        </div>
        <Button className="w-150 mt-20" variant="outlined" onClick={() => window.location.href = '/'}>Go to main</Button>
      </div>
    </Container>
  )

  render() {
    const { hasError } = this.state

    if (hasError) return this.getErrorTemplate()
    else return this.props.children
  }
}

export default ErrorBoundary
