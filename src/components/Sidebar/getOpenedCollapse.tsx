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
  currencyCloudPath,
  currencyCloudKLRatesPath,
  currencyCloudTopUpRatesPath,
  currencyCloudAllRatesPath,
  currencyCloudOTRatesPath,
  masterNodePath,
  masterNodeAllMasterNodesPath,
  masterNodeRewardsPath,
  outboundTransfersPath,
  outboundTransfersTransfersPath,
  outboundTransfersCountriesPath,
  outboundTransfersFeesPath,
  outboundTransfersRiskScoresPath,
  cashoutPath,
  cashoutPendingRequestsPath,
  cashoutCompletedRequestsPath,
  cashoutPendingKWLRequestsPath,
  cashoutCompletedKWLRequestsPath,
  cashoutPendingMulticashRequestsPath,
  cashoutCompletedMulticashRequestsPath,
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

    case currencyCloudPath:
    case currencyCloudKLRatesPath:
    case currencyCloudOTRatesPath:
    case currencyCloudTopUpRatesPath:
    case currencyCloudAllRatesPath:
      return collapseItems.CURRENCY_CLOUD

    case masterNodePath:
    case masterNodeAllMasterNodesPath:
    case masterNodeRewardsPath:
      return collapseItems.MASTER_NODE

    case outboundTransfersPath:
    case outboundTransfersTransfersPath:
    case outboundTransfersCountriesPath:
    case outboundTransfersFeesPath:
    case outboundTransfersRiskScoresPath:
      return collapseItems.OUTBOUND_TRANSFERS

    case cashoutPath:
    case cashoutPendingRequestsPath:
    case cashoutCompletedRequestsPath:
    case cashoutPendingKWLRequestsPath:
    case cashoutCompletedKWLRequestsPath:
    case cashoutPendingMulticashRequestsPath:
    case cashoutCompletedMulticashRequestsPath:
      return collapseItems.CASHOUT

    default: return ''
  }
}