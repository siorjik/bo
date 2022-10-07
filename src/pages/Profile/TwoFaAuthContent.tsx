import { useState, useEffect } from "react"
import { Button, Alert, TextField } from "@mui/material"
import QRCode from 'react-qr-code'

export default ({ tabName }: { tabName: string | JSX.Element }) => {
  const [isShowTwoFaSettings, setShowTwoFaSettings] = useState<{ configure: boolean, reset: boolean }>({
    configure: false,
    reset: false,
  })

  useEffect(() => {
    const { configure, reset } = isShowTwoFaSettings

    if (
      (tabName !== 'twoFa') && (configure || reset)) {
        setShowTwoFaSettings({ configure: false, reset: false })
      }
  }, [tabName])

  return (
    <>
      <h3 className="mb-30">{!isShowTwoFaSettings ? 'Authenticator app' : 'Enable authenticator'}</h3>
      {
        !isShowTwoFaSettings.configure && !isShowTwoFaSettings.reset &&
        <>
          <Button
            className="mr-20 mb-10"
            variant="outlined"
            onClick={() => setShowTwoFaSettings({ ...isShowTwoFaSettings, configure: true })}
          >Configure authenticator app</Button>
          <Button
            className="mb-10"
            variant="outlined"
            onClick={() => setShowTwoFaSettings({ ...isShowTwoFaSettings, reset: true })}
          >Reset authenticator key</Button>
        </>
      }
      {
        isShowTwoFaSettings.configure &&
        <>
          <Button
            className="mb-10"
            variant="outlined"
            onClick={() => setShowTwoFaSettings({ ...isShowTwoFaSettings, configure: false })}
          >Cancel</Button>
          <div>
            <p className="flex">
              <span>1.</span>&nbsp;
              <span>Download a two-factor authenticator app like Microsoft Authenticator for Windows Phone,
                Android and iOS or Google Authenticator for Android and iOS.</span>
            </p>
            <p className="flex">
              <span>2.</span>&nbsp;
              <span>Scan the QR Code or enter this key &nbsp;
                <span className="background-black color-white p-3">yl5q lwrm enbo 5vif m2uv pcfj jtdt majl</span>&nbsp;
                into your two factor authenticator app. Spaces and casing do not matter.</span>
            </p>
            <Alert severity="info">
              To enable QR code generation please read our &nbsp;
              <a href='https://go.microsoft.com/fwlink/?Linkid=852423' target='_blank' rel="noreferrer">documentation</a>.
            </Alert>
            <div className="mt-30">
              <QRCode size={150} value="any" />
            </div>
            <p className="flex">
              <span>3.</span>&nbsp;
              <span>Once you have scanned the QR code or input the key above,your two factor authentication&nbsp;
                app will provide you with a unique code. Enter the code in the confirmation box below.</span>
            </p>
            <TextField className="mt-10" label="Verification code" />
            <div className="mt-30">
              <Button variant="contained">Verify</Button>
            </div>
          </div>
        </>
      }
      {
        isShowTwoFaSettings.reset &&
        <>
          <Button
            className="mb-10"
            variant="outlined"
            onClick={() => setShowTwoFaSettings({ ...isShowTwoFaSettings, reset: false })}
          >Cancel</Button>
          <Alert className="mt-20 w-75-percent" severity="warning">
            <h3>If you reset your authenticator key your authenticator app will not work until you reconfigure it.</h3>
            <p>
              This process disables 2FA until you verify your authenticator app and will also reset your 2FA recovery codes.
              &nbsp;
              If you do not complete your authenticator app configuration you may lose access to your account.
            </p>
          </Alert>
          <Button className="mt-20" variant="contained" color="warning">Reset authenticator key</Button>
        </>
      }
    </>
  )
}
