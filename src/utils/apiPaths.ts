export const backOfficeApiPath = process.env.REACT_APP_BACK_OFFICE_API_PATH

export const apiAccountsPath = `${backOfficeApiPath}/accounts`
export const apiCountriesPath = `${backOfficeApiPath}/country`

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
const apiKWLPath = `${backOfficeApiPath}/kwl`
export const apiKWLSitesPath = `${apiKWLPath}`
export const apiKWLUsersPath = `${apiKWLPath}/users`
export const getApiKWLByIdPath = (id: number) => `${apiKWLPath}/${id}`
export const getApiKWLSourceCountryPath = (kwlId: number, countryId: number) =>
  `${apiKWLPath}/${kwlId}/source-country/${countryId}`
export const getApiKWLRecieveCountryPath = (kwlId: number, countryId: number) =>
  `${apiKWLPath}/${kwlId}/receive-country/${countryId}`

// cashout
const apiCashOutPath = `${backOfficeApiPath}/cash-outs`
export const apiCashOutPendingPath = `${apiCashOutPath}/pending`

// top up
const apiTopUpPath = `${backOfficeApiPath}/top-up-requests`
export const apiTopUpUsdkPath = `${apiTopUpPath}/usdk`
export const apiTopUpCashrailPath = `${apiTopUpPath}/cash-rail`
export const apiTopUpKWLPath = `${apiTopUpPath}/kwl`
