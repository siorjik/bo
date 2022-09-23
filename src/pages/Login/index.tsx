import { ChangeEvent, useState } from 'react'
import { TextField, Button, Checkbox, FormControlLabel } from '@mui/material'

import emailValidation from '../../helpers/emailValidation'

import { fetchTokens } from '../../store/actions/authActions'
import { useAppDispatch } from './../../store'
import { UserType } from '../../types/authTypes'

type LoginErrState = {
  login: boolean,
  pass: boolean,
}

const Login = () => {
  const [form, setForm] = useState<UserType>({ login: '', pass:'' })
  const [err, setErr] = useState<LoginErrState>({ login: false, pass: false })

  const dispatch = useAppDispatch()

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target

    if (name === 'login') {
      const isLoginValid = emailValidation(value)

      if (!isLoginValid) setErr({ ...err, login: true })
      else setErr({ ...err, login: false })
    }

    setForm({ ...form, [name]: value })
  }

  const onClick = async () => {
    await dispatch(fetchTokens(form))
  }

  const isDisabled = !form.login || !form.pass || err.login || err.pass

  return (
    <div className="login">
      <h2 className="header">Log in</h2>
      <div className="form">
        <div className="form-content">
          <TextField className='text-input' label='Email' name='login' value={form.login} error={err.login} onChange={onChange} />
          <TextField className='text-input' label='Password' name='pass' value={form.pass} error={err.pass} onChange={onChange} />
          <FormControlLabel control={<Checkbox defaultChecked />} label="Remember me?" />
          <Button variant="contained" onClick={onClick} disabled={!!isDisabled}>Log in</Button>
        </div>
      </div>

      <p>Forgot your password?</p>
    </div>
  )
}

export default Login
