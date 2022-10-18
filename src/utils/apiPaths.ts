export const accountsApiPath = process.env.REACT_APP_ACCOUNTS_API_PATH
export const backOfficeApiPath = process.env.REACT_APP_BACK_OFFICE_API_PATH

// auth
export const apiLoginPath = `${accountsApiPath}/login`
export const apiLogOutPath = `${accountsApiPath}/logout`
export const getApiRefreshTokensPath = (token: string) => `${accountsApiPath}/tokens/${token}/refresh`

export const apiUserPermissionsPath = `${accountsApiPath}/permissions`

// 2fa
export const apiAuthenticatorPath = `${accountsApiPath}/authenticator`
export const apiAuthenticatorConfirmPath = `${accountsApiPath}/authenticator/confirm`
export const apiAuthenticatorDisablePath = `${accountsApiPath}/authenticator/disable`

// kwl
export const apiKWLSitesApiPath = `${backOfficeApiPath}/kwl`
