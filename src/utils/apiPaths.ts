export const apiPath = process.env.REACT_APP_API_PATH

export const apiLoginPath = `${apiPath}/login`
export const apiLogOutPath = `${apiPath}/logout`
export const getApiRefreshTokensPath = (token: string) => `${apiPath}/tokens/${token}/refresh`

export const apiUserPermissionsPath = `${apiPath}/permissions`

export const apiAuthenticatorPath = `${apiPath}/authenticator`
export const apiAuthenticatorConfirmPath = `${apiPath}/authenticator/confirm`
export const apiAuthenticatorDisablePath = `${apiPath}/authenticator/disable`
