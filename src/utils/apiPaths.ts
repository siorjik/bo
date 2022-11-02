export const backOfficeApiPath = process.env.REACT_APP_BACK_OFFICE_API_PATH

export const apiAccountsPath = `${backOfficeApiPath}/accounts`

// auth
export const apiLoginPath = `${apiAccountsPath}/login`
export const apiLogOutPath = `${apiAccountsPath}/logout`
export const getApiRefreshTokensPath = (token: string) => `${apiAccountsPath}/tokens/${token}/refresh`

// permissions
export const apiUserPermissionsPath = `${apiAccountsPath}/permissions`

// 2fa
export const apiAuthenticatorPath = `${apiAccountsPath}/authenticator`
export const apiAuthenticatorConfirmPath = `${apiAccountsPath}/authenticator/confirm`
export const apiAuthenticatorDisablePath = `${apiAccountsPath}/authenticator/disable`

// kwl
export const apiKWLSitesPath = `${backOfficeApiPath}/kwl`
export const apiKWLUsersPath = `${backOfficeApiPath}/kwl/users`

// cashout
const apiCashOutPath = `${backOfficeApiPath}/cash-outs`
export const apiCashOutPendingPath = `${apiCashOutPath}/pending`

// top up
const apiTopUpPath = `${backOfficeApiPath}/top-up-requests`
export const apiTopUpUsdkPath = `${apiTopUpPath}/usdk`
