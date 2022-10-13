import { KeyboardEvent } from "react"

export default (e: KeyboardEvent) => ['e', 'E', '+', '-'].includes(e.key) && e.preventDefault()
