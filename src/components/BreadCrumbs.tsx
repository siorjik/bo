import { Breadcrumbs } from "@mui/material"
import { Link } from "react-router-dom"

export default ({ data }: { data: { text: string, path: string | null }[] }) => {
  const content = data.map((item, index) => {
    if (item.path) return <Link key={index} to={item.path}>{item.text}</Link>
    else return <span key={index}>{item.text}</span>
  })

  return (
    <>
      <Breadcrumbs>
        {content}
      </Breadcrumbs>
    </>
  )
}
