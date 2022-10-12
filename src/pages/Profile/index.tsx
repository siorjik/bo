import { ChangeEvent, FormEvent, useState, useEffect } from "react"
import { Input, Button, Alert } from "@mui/material"

import TwoFaAuthContent from "./TwoFaAuthContent"
import Tabs from "../../components/Tabs"
import BreadCrumbs from "../../components/BreadCrumbs"

import { useAppDispatch, useAppSelector } from "../../store"
import { confirmAuthenticator, disableAuthenticator, fetchAuthenticator, resetError } from "../../store/actions/authActions"

import emailValidation from '../../helpers/emailValidation'
import getActionValue from '../../helpers/getActionValue'

type ProfileType = {
  name: string,
  email: string,
  phoneNumber: string,
  oldPass: string,
  newPass: string,
  confPass: string,
}

const Profile = () => {
  const [profileData, setProfileData] = useState<ProfileType>({
    name: '',
    email: '',
    phoneNumber: '',
    oldPass: '',
    newPass: '',
    confPass: ''
  })
  const [err, setErr] = useState<{ email: boolean, pass: boolean }>({ email: false, pass: false })
  const [isShowAlert, setShowAlert] = useState(false)
  const [tabName, setTabName] = useState<string | JSX.Element>('')
  const [recoveryCodes, setRecoveryCodes] = useState<string[]>([])

  const dispatch = useAppDispatch()
  const { auth: { authenticator, error }, user: { data } } = useAppSelector(state => state)

  useEffect(() => {
    if (!authenticator.sharedKey) dispatch(fetchAuthenticator())
  }, [])

  useEffect(() => {
    setProfileData({ ...profileData, name: data.name, email: data.email, phoneNumber: data.phoneNumber || '' })
  }, [data.email, data.name, data.phoneNumber])

  useEffect(() => {
    if (profileData.confPass !== profileData.newPass && profileData.confPass && profileData.newPass) {
      setErr({ ...err, pass: true })
    } else setErr({ ...err, pass: false })
  }, [profileData.confPass, profileData.newPass])

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target

    if (name === 'email') {
      const isEmailValid = emailValidation(value)

      if (!isEmailValid) setErr({ ...err, email: true })
      else setErr({ ...err, email: false })
    }

    setProfileData({ ...profileData, [name]: value })
  }

  const profileSubmit = (e: FormEvent) => {
    e.preventDefault()

    setShowAlert(true)
    setTimeout(() => setShowAlert(false), 1500)
  }

  const confirmTwoFa = async (code: string) => {
    const result = await getActionValue(() => dispatch(confirmAuthenticator({ code })), 'recoveryCodes')

    setRecoveryCodes(result)
  }

  const { name, email, phoneNumber, oldPass, newPass, confPass } = profileData

  const isDisabledProfile = !name || !email
  const isDisabledPassword = !oldPass || !newPass || !confPass || newPass !== confPass

  const profileForm = (
    <>
      <h3 className="mb-30">Edit Profile</h3>
      <form className="profile-form" onSubmit={profileSubmit}>
        <Input className="mb-20" name='name' placeholder="User name" onChange={onChange} value={name} />
        <Input className="mb-20" name='email' placeholder="Email" onChange={onChange} value={email} error={err.email} />
        <Input className="mb-30" name='phone' placeholder="Phone" type="number" onChange={onChange} value={phoneNumber} />
        <Button className="w-50" variant="contained" type="submit" disabled={isDisabledProfile || err.email}>Save</Button>
      </form>
    </>
  )

  const passwordForm = (
    <>
      <h3 className="mb-30">Change Password</h3>
      <form className="profile-form" onSubmit={profileSubmit}>
        <Input
          className="mb-20"
          type="password"
          name='oldPass'
          placeholder="Current Password"
          onChange={onChange}
          value={oldPass}
        />
        <Input className="mb-20" type="password" name='newPass' placeholder="New Password" onChange={onChange} value={newPass} />
        <div className="mb-30">
          <Input
            fullWidth
            type="password"
            name='confPass'
            placeholder="Confirm Password"
            onChange={onChange}
            value={confPass}
            error={err.pass}
          />
          {err.pass && <span className="err-mess">current and new passwords don't match</span>}
        </div>
        <Button className="w-50" variant="contained" type="submit" disabled={isDisabledPassword}>Save</Button>
      </form>
    </>
  )
  
  const tabsData = [
    { name: 'profile', title: 'Profile', content: profileForm },
    { name: 'password', title: 'Password', content: passwordForm },
    {
      name: 'twoFa',
      title: <span>Two-factor <br />authentication</span>,
      content: (
        <TwoFaAuthContent
          tabName={tabName}
          authenticator={authenticator}
          confirmTwoFa={confirmTwoFa}
          recoveryCode={{ codeList: recoveryCodes, setRecoveryCodes: async (codes: []) => setRecoveryCodes(codes) }}
          error={error}
          resetAuthKey={() => dispatch(disableAuthenticator())}
          resetErr={() => dispatch(resetError())}
        />
      )
    },
  ]

  const breadCrumbsData = [
    { text: 'Home', path: '/' },
    { text: 'Profile', path: null },
  ]

  return (
    <>
      <div className="mt-20"><BreadCrumbs data={breadCrumbsData} /></div>
      <h2 className="mt-30">Manage your account</h2>
      <Tabs data={tabsData} getTabName={(name: string | JSX.Element) => setTabName(name)} />
      {
        isShowAlert &&
        <Alert className="mt-30" severity="success" onClose={() => setShowAlert(!isShowAlert)}>Data was changed!</Alert>
      }
    </>
  )
}

export default Profile
