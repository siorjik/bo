import { Container, TextField, Button, Drawer } from "@mui/material"
import { FormEventHandler } from "react"

type FilterPropsType = {
  query: {
    fromAddress: string,
    toAddress: string,
    bwsId: string,
    originTransactionId: string,
  },
  onChange: (value: string, name: string) => {},
  onSubmit: FormEventHandler,
  isDisabled: boolean,
  isShow: boolean,
  setShow: (isShow: boolean) => {},
}

export default ({ query, onChange, onSubmit, isDisabled, isShow, setShow }: FilterPropsType) => {
  const { fromAddress, toAddress, bwsId, originTransactionId } = query

  return (
    <Drawer anchor="right" open={isShow} onClose={() => setShow(false)}>
      <Container className="mt-20 mb-20">
        <form onSubmit={onSubmit}>
          <TextField
            className="w-100-percent mb-20"
            label='Search by From Address...'
            name='fromAddress'
            size="small"
            value={fromAddress}
            onChange={({ target: { value, name } }) => onChange(value, name)}
          />
          <TextField
            className="w-100-percent mb-20"
            label='Search by To Address...'
            name='toAddress'
            size="small"
            value={toAddress}
            onChange={({ target: { value, name } }) => onChange(value, name)}
          />
          <TextField
            className="w-100-percent mb-20"
            label='Search by Bws Id...'
            name='bwsId'
            size="small"
            value={bwsId}
            onChange={({ target: { value, name } }) => onChange(value, name)}
          />
          <TextField
            className="w-100-percent"
            label='Search by Origin Transaction Id...'
            name='originTransactionId'
            size="small"
            value={originTransactionId}
            onChange={({ target: { value, name } }) => onChange(value, name)}
          />
          <div className="flex j-content-center mt-20">
            <Button size="small" variant="contained" type="submit" disabled={isDisabled}>Apply</Button>
          </div>
        </form>
      </Container>
    </Drawer>
  )
}
