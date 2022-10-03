import { collapseItems } from '../../utils/constants'

import {
  kwlPath,
  kwlUsersPath,
  kwlSitesPath,
  topUpPath,
  topUpCashrailPath,
  topUpKuvaCoinPath,
  topUpKuvaWhiteLabelPath,
  topUpUsdkPath,
  kuvaLocalPath,
  kuvaLocalOrdersPath,
  kuvaLocalSettingsPath,
  kuvaLocalCouriersPath,
  kuvaLocalCourierDispatchOrderPath,
  kuvaLocalUsersPath,
  kuvaLocalContactPath,
  kuvaLocalFeedbackPath,
  kuvaLocalStoresPath,
  kuvaLocalCountriesPath,
  kuvaLocalRefoundsPath,
  kuvaLocalSubmissionsPath,
  kuvaLocalPromocodePath,
  kuvaLocalCompaniesPath,
  kuvaLocalReportPath,
  kuvaLocalCreditVendorPath,
  kuvaLocalMobileHomePageWidgetsPath,
  kuvaLocalFacebookPath,
} from '../../utils/appPaths'

export default (path: string) => {
  switch (path) {
    case kwlPath:
    case kwlUsersPath:
    case kwlSitesPath:
      return collapseItems.KWL

    case topUpPath:
    case topUpCashrailPath:
    case topUpKuvaCoinPath:
    case topUpKuvaWhiteLabelPath:
    case topUpUsdkPath:
      return collapseItems.TOP_UP

    case kuvaLocalPath:
    case kuvaLocalOrdersPath:
    case kuvaLocalSettingsPath:
    case kuvaLocalCouriersPath:
    case kuvaLocalCourierDispatchOrderPath:
    case kuvaLocalUsersPath:
    case kuvaLocalContactPath:
    case kuvaLocalFeedbackPath:
    case kuvaLocalStoresPath:
    case kuvaLocalCountriesPath:
    case kuvaLocalRefoundsPath:
    case kuvaLocalSubmissionsPath:
    case kuvaLocalPromocodePath:
    case kuvaLocalCompaniesPath:
    case kuvaLocalReportPath:
    case kuvaLocalCreditVendorPath:
    case kuvaLocalMobileHomePageWidgetsPath:
    case kuvaLocalFacebookPath:
      return collapseItems.KUVA_LOCAL

    default: return ''
  }
}