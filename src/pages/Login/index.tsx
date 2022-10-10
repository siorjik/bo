import { ChangeEvent, FormEvent, useState } from 'react'
import { TextField, Button, Checkbox, FormControlLabel } from '@mui/material'

import emailValidation from '../../helpers/emailValidation'

import { fetchTokens } from '../../store/actions/authActions'
import { useAppDispatch, useAppSelector } from './../../store'

const Login = () => {
  const [form, setForm] = useState<{ email: string, password: string }>({ email: '', password:'' })
  const [err, setErr] = useState<{ email: boolean, password: boolean }>({ email: false, password: false })

  const dispatch = useAppDispatch()
  const { auth } = useAppSelector(state => state)

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target

    if (name === 'login') {
      const isLoginValid = emailValidation(value)

      if (!isLoginValid) setErr({ ...err, email: true })
      else setErr({ ...err, email: false })
    }

    setForm({ ...form, [name]: value })
  }

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault()

    await dispatch(fetchTokens(form))
  }

  const isDisabled = !form.email || !form.password || err.email || err.password

  return (
    <div className="login">
      <h2 className="header mb-20">Log in</h2>
      <div className="form">
        <form onSubmit={onSubmit} className="form-content">
          <TextField className='text-input' label='Email' name='email' value={form.email} error={err.email} onChange={onChange} />
          <TextField
            className='text-input'
            type='password'
            label='Password'
            name='password' 
            value={form.password}
            error={err.password}
            onChange={onChange}
          />
          {auth.error && <span className='err-mess'>Invalid email or password.</span>}
          <FormControlLabel control={<Checkbox defaultChecked />} label="Remember me?" />
          <Button variant="contained" type='submit' disabled={!!isDisabled}>Log in</Button>
        </form>
      </div>

      <p>Forgot your password?</p>
    </div>
  )
}

export default Login
