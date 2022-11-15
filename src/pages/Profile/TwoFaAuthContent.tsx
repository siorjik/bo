import { useState, useEffect, ChangeEvent } from "react"
import { Button, Alert, TextField } from "@mui/material"
import QRCode from 'react-qr-code'

import excludeSymbolsFromNumber from "../../helpers/excludeSymbolsFromNumber"

export default (
  { tabName, authenticator, confirmTwoFa, recoveryCode, error, resetAuthKey, resetErr }:
  {
    tabName: string | JSX.Element,
    authenticator: { sharedKey: string, authenticatorUri: string },
    confirmTwoFa: (code: string) => void,
    recoveryCode: { codeList: string[], setRecoveryCodes: (codes: []) => {} },
    error: string,
    resetAuthKey: () => {},
    resetErr: () => {}
  }
) => {
  const [isShowTwoFaSettings, setShowTwoFaSettings] = useState<{ configure: boolean, reset: boolean }>({
    configure: false,
    reset: false,
  })
  const [twoFaData, setTwoFaData] = useState<{ code: string, recoveryCodes: string[] }>({ code: '', recoveryCodes: [] })

  const { codeList, setRecoveryCodes } = recoveryCode

  useEffect(() => {
    const { configure, reset } = isShowTwoFaSettings

    if ((tabName !== 'twoFa') && (configure || reset)) {
      setShowTwoFaSettings({ configure: false, reset: false })
    }

    if (twoFaData.code) setTwoFaData({ ...twoFaData, code: '' })

    if (codeList && codeList.length) setRecoveryCodes([])
    if (error) resetErr()
  }, [tabName, isShowTwoFaSettings])

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target

    if (value.length > 6) return false

    setTwoFaData({ ...twoFaData, code: value })
  }

  const resetTwoFa = () => {
    resetAuthKey()

    setShowTwoFaSettings({ configure: true, reset: false })
  }

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
                <span className="background-black color-white p-3">{authenticator.sharedKey}</span>&nbsp;
                into your two factor authenticator app. Spaces and casing do not matter.</span>
            </p>
            <Alert className="mt-30" severity="info">
              To enable QR code generation please read our &nbsp;
              <a
                className="link-a"
                href='https://go.microsoft.com/fwlink/?Linkid=852423'
                target='_blank' rel="noreferrer"
              >documentation</a>.
            </Alert>
            <div className="mt-30">
              <QRCode size={150} value={authenticator.authenticatorUri} />
            </div>
            <p className="flex">
              <span>3.</span>&nbsp;
              <span>Once you have scanned the QR code or input the key above,your two factor authentication&nbsp;
                app will provide you with a unique code. Enter the code in the confirmation box below.</span>
            </p>
            <TextField
              className="mt-10"
              type='number'
              label="Verification code"
              onChange={onChange}
              onKeyDown={excludeSymbolsFromNumber}
              value={twoFaData.code}
            />
            {error && <p className="err-mess">{error}</p>}
            {((codeList && !codeList.length) || !codeList) && <div className="mt-30">
              <Button variant="contained" onClick={() => confirmTwoFa(twoFaData.code)} disabled={twoFaData.code.length < 6}>
                Verify
              </Button>
            </div>}

            {codeList && !!codeList.length && <Alert className="mt-30" severity="warning">
              <h3>Save this codes for recovery:</h3>
              {codeList.map((item, index) => <p key={index}>{item}</p>)}
            </Alert>}
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
          <Button className="mt-20" variant="contained" color="warning" onClick={resetTwoFa}>Reset authenticator key</Button>
        </>
      }
    </>
  )
}
