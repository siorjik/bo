import { Fragment, useState, useEffect } from "react"
import { Tab, Tabs } from "@mui/material"

export default (
  { data, getTabName }: {
    data: { name: string, title: string | JSX.Element, content: JSX.Element }[],
    getTabName: (name: string | JSX.Element) => void,
  }
) => {
  const [value, setValue] = useState(1)

  useEffect(() => {
    getTabName(data[value - 1].name)
  }, [value])

  const tabHeader = data.map((item, index) => <Tab key={index} label={item.title} value={index + 1} />)

  const tabContent = data.map((item, index) => index + 1 === value && <Fragment key={index}>{item.content}</Fragment>)

  return (
    <>
      <Tabs value={value} onChange={(_, index) => setValue(index)}>{tabHeader}</Tabs>
      <div className="mt-30">{tabContent}</div>
    </>
  )
}
