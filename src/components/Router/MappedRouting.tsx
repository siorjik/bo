import { Fragment } from "react"
import { Route, Navigate, Routes } from "react-router-dom"

import { getMapedPermissionList } from '../../services/permissionsService'
import { PermissionDataType } from '../../types/permissionTypes'

import {
  profilePath,
  loginPath,
  pageNotFoundPath,

  kwlPath,
  kwlSitesPath,
  kwlUsersPath,
  mobileUsersPath,
  agentsProfilesPath,
  agentGroupsPath,
  topUpPath,
  topUpUsdkPath,
  topUpKuvaCoinPath,
  topUpCashrailPath,
  topUpKuvaWhiteLabelPath,
  bugReportPath,
  contactPath,
  kuvaLocalPath,
  kuvaLocalSettingsPath,
  kuvaLocalOrdersPath,
  kuvaLocalCompaniesPath,
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
  kuvaLocalReportPath,
  kuvaLocalCreditVendorPath,
  kuvaLocalMobileHomePageWidgetsPath,
  kuvaLocalFacebookPath,
  creditWalletTreasurePath,
  currencyCloudPath,
  currencyCloudKLRatesPath,
  currencyCloudOTRatesPath,
  currencyCloudTopUpRatesPath,
  currencyCloudAllRatesPath,
  feedbacksPath,
  masterNodePath,
  masterNodeAllMasterNodesPath,
  masterNodeRewardsPath,
  outboundTransfersPath,
  outboundTransfersTransfersPath,
  outboundTransfersCountriesPath,
  outboundTransfersFeesPath,
  outboundTransfersRiskScoresPath,
  cashOutPath,
  cashOutPendingRequestsPath,
  cashOutCompletedRequestsPath,
  cashOutPendingKWLRequestsPath,
  cashOutCompletedKWLRequestsPath,
  cashOutPendingMulticashRequestsPath,
  cashOutCompletedMulticashRequestsPath,
  pushNotificationsPath,
  referralLinkPath,
  paymentsPath,
  paymentsTreasuryTransfersPath,
  paymentsPayinsPath,
  paymentsPayoutsPath,
  paymentsUpholdTransactionsPath,
  transactionsPath,
  transactionsAllPath,
  transactionsDuplicatePath,
  transactionsIncorectRatePath,
  transactionsUnpaidPath,
  mobileTransfersPath,
  mobileTransfersTransferTablePath,
  mobileTransfersOrderTablePath,
} from '../../utils/appPaths'

import Loader from "../Loader"

import PageNotFound from "../../pages/PageNotFound"
import Profile from "../../pages/Profile"

import KuvaWhiteLabel from '../../pages/KuvaWhiteLabel'
import KuvaWhiteLabelSites from '../../pages/KuvaWhiteLabel/KuvaWhiteLabelSites'
import KuvaWhiteLabelUsers from '../../pages/KuvaWhiteLabel/KuvaWhiteLabelUsers'
import MobileUsers from '../../pages/MobileUsers'
import AgentsProfiles from '../../pages/AgentsProfiles'
import AgentGroups from '../../pages/AgentGroups'
import TopUp from '../../pages/TopUp'
import USDk from '../../pages/TopUp/USDk'
import KuvaCoin from '../../pages/TopUp/KuvaCoin'
import Cashrail from '../../pages/TopUp/Cashrail'
import TopUpKuvaWhiteLabel from '../../pages/TopUp/KuvaWhiteLabel'
import BugReport from '../../pages/BugReport'
import Contact from "../../pages/Contact"
import KuvaLocal from "../../pages/KuvaLocal"
import Settings from "../../pages/KuvaLocal/Settings"
import Orders from "../../pages/KuvaLocal/Orders"
import Couriers from "../../pages/KuvaLocal/Couriers"
import DispatchOrders from "../../pages/KuvaLocal/DispatchOrders"
import Users from "../../pages/KuvaLocal/Users"
import KuvaContact from '../../pages/KuvaLocal/Contact'
import Feedback from "../../pages/KuvaLocal/Feedback"
import Stores from "../../pages/KuvaLocal/Stores"
import Countries from "../../pages/KuvaLocal/Countries"
import PaymentRefunds from "../../pages/KuvaLocal/PaymentRefunds"
import Submissions from "../../pages/KuvaLocal/Submissions"
import Promocode from "../../pages/KuvaLocal/Promocode"
import CharityCompanies from "../../pages/KuvaLocal/CharityCompanies"
import Report from "../../pages/KuvaLocal/Report"
import CreditVendor from "../../pages/KuvaLocal/CreditVendor"
import MobileHomePage from "../../pages/KuvaLocal/MobileHomePage"
import Facebook from "../../pages/KuvaLocal/Facebook"
import CreditWalletTreasure from "../../pages/CreditWalletTreasure"
import CurrencyCloud from "../../pages/CurrencyCloud"
import KLRates from "../../pages/CurrencyCloud/KLRates"
import OTRates from "../../pages/CurrencyCloud/OTRates"
import TopUpRates from "../../pages/CurrencyCloud/TopUpRates"
import AllRates from "../../pages/CurrencyCloud/AllRates"
import Feedbacks from "../../pages/Feedbacks"
import MasterNode from "../../pages/MasterNode"
import AllMasterNodes from "../../pages/MasterNode/AllMasterNodes"
import Rewards from "../../pages/MasterNode/Rewards"
import OutboundTransfers from "../../pages/OutboundTransfers"
import Transfers from "../../pages/OutboundTransfers/Transfers"
import OutboundTransfersCountries from "../../pages/OutboundTransfers/Countries"
import Fees from "../../pages/OutboundTransfers/Fees"
import RiskScores from "../../pages/OutboundTransfers/RiskScores"
import CashOut from "../../pages/CashOut"
import PendingRequests from "../../pages/CashOut/PendingRequests"
import CompletedRequests from "../../pages/CashOut/CompletedRequests"
import CompletedKWLRequests from "../../pages/CashOut/CompletedKWLRequests"
import PendingKWLRequests from "../../pages/CashOut/PendingKWLRequests"
import PendingMulticashRequests from "../../pages/CashOut/PendingMuticashRequests"
import CompletedMulticashRequests from "../../pages/CashOut/CompletedMultiCashRequests"
import PushNotifications from "../../pages/PushNotifications"
import ReferralLink from "../../pages/ReferralLink"
import TreasuryTransfers from "../../pages/Payments/TreasuryTransfers"
import Payments from "../../pages/Payments"
import Payins from "../../pages/Payments/Payins"
import Payouts from "../../pages/Payments/Payouts"
import UpholdTransactions from "../../pages/Payments/UpholdTransactions"
import Transactions from "../../pages/Transactions"
import AllTransactions from "../../pages/Transactions/AllTransactions"
import DuplicateTransactions from "../../pages/Transactions/DuplicateTransactions"
import IncorrectRateTransactions from "../../pages/Transactions/IncorrectRateTransactions"
import UnpaidTransactions from "../../pages/Transactions/UnpaidTransactions"
import MobileTransfers from "../../pages/MobileTransfers"
import MobileTransferTable from "../../pages/MobileTransfers/MobileTransferTable"
import MobileOrderTable from "../../pages/MobileTransfers/MobileOrderTable"

export default ({ userPermissionList }: { userPermissionList: PermissionDataType[] }) => {
  const permissions = getMapedPermissionList(userPermissionList)
  let routesList: JSX.Element[] = []

  userPermissionList.forEach((item, _, thisArr) => {
    if (item.key === permissions.SuperUser) {
      routesList = [...routesList,
      <Fragment key={permissions.SuperUser}>
        <Route path='/' element={<Navigate replace to={kwlPath} />} />
        <Route path={kwlPath} element={<Navigate replace to={kwlSitesPath} />} />
        <Route path={kwlPath} element={<KuvaWhiteLabel />} >
          <Route path={kwlSitesPath} element={<KuvaWhiteLabelSites />} />
          <Route path={kwlUsersPath} element={<KuvaWhiteLabelUsers />} />
        </Route>
      </Fragment>
      ]
    } else if (item.key === permissions.Users_Access) {
      routesList = [...routesList,
      <Fragment key={permissions.Users_Access}>
        <Route path='/' element={<Navigate replace to={mobileUsersPath} />} />
        <Route path={mobileUsersPath} element={<MobileUsers />} />
      </Fragment>
      ]
    } else if (item.key === permissions.Agents_Access) {
      routesList = [...routesList,
      <Fragment key={permissions.Agents_Access}>
        <Route path='/' element={<Navigate replace to={agentsProfilesPath} />} />
        <Route path={agentsProfilesPath} element={<AgentsProfiles />} />
        <Route path={agentGroupsPath} element={<AgentGroups />} />
      </Fragment>
      ]
    } else if (item.key === permissions.Top_Up_Access) {
      routesList = [...routesList,
      <Fragment key={permissions.Top_Up_Access}>
        <Route path='/' element={<Navigate replace to={topUpPath} />} />
        <Route path={topUpPath} element={<Navigate replace to={topUpUsdkPath} />} />
        <Route path={topUpPath} element={<TopUp />} >
          <Route path={topUpUsdkPath} element={<USDk />} />
          <Route path={topUpKuvaCoinPath} element={<KuvaCoin />} />
          <Route path={topUpCashrailPath} element={<Cashrail />} />
          <Route path={topUpKuvaWhiteLabelPath} element={<TopUpKuvaWhiteLabel />} />
        </Route>
      </Fragment>
      ]
    } else if (item.key === permissions.Bug_Reports_Access) {
      routesList = [...routesList,
      <Fragment key={permissions.Bug_Reports_Access}>
        <Route path='/' element={<Navigate replace to={bugReportPath} />} />
        <Route path={bugReportPath} element={<BugReport />} />
      </Fragment>
      ]
    } else if (item.key === permissions.Contacts_Access) {
      routesList = [...routesList,
      <Fragment key={permissions.Contacts_Access}>
        <Route path='/' element={<Navigate replace to={contactPath} />} />
        <Route path={contactPath} element={<Contact />} />
      </Fragment>
      ]
    } else if (item.key === permissions.KuvaLocalAdmin) {
      routesList = [...routesList,
      <Fragment key={permissions.KuvaLocalAdmin}>
        <Route path='/' element={<Navigate replace to={kuvaLocalPath} />} />
        <Route path={kuvaLocalPath} element={<Navigate replace to={kuvaLocalSettingsPath} />} />
        <Route path={kuvaLocalPath} element={<KuvaLocal />} >
          <Route path={kuvaLocalSettingsPath} element={<Settings />} />
          <Route path={kuvaLocalOrdersPath} element={<Orders />} />
          <Route path={kuvaLocalCouriersPath} element={<Couriers />} />
          <Route path={kuvaLocalCourierDispatchOrderPath} element={<DispatchOrders />} />
          <Route path={kuvaLocalUsersPath} element={<Users />} />
          <Route path={kuvaLocalContactPath} element={<KuvaContact />} />
          <Route path={kuvaLocalFeedbackPath} element={<Feedback />} />
          <Route path={kuvaLocalStoresPath} element={<Stores />} />
          <Route path={kuvaLocalCountriesPath} element={<Countries />} />
          <Route path={kuvaLocalRefoundsPath} element={<PaymentRefunds />} />
          <Route path={kuvaLocalSubmissionsPath} element={<Submissions />} />
          {
            thisArr.find(perm => perm.key === permissions.Promo_Code_Manager) &&
            <Route path={kuvaLocalPromocodePath} element={<Promocode />} />
          }
          {
            thisArr.find(perm => perm.key === permissions.Charity_Manager) &&
            <Route path={kuvaLocalCompaniesPath} element={<CharityCompanies />} />
          }
          <Route path={kuvaLocalReportPath} element={<Report />} />
          {
            thisArr.find(perm => perm.key === permissions.Credit_Vendor) &&
            <Route path={kuvaLocalCreditVendorPath} element={<CreditVendor />} />
          }
          <Route path={kuvaLocalMobileHomePageWidgetsPath} element={<MobileHomePage />} />
          <Route path={kuvaLocalFacebookPath} element={<Facebook />} />
        </Route>
      </Fragment>
      ]
    } else if (item.key === permissions.Credit_Wallet_Reserve_Treasury_Reconciliation) {
      routesList = [...routesList,
      <Fragment key={permissions.Credit_Wallet_Reserve_Treasury_Reconciliation}>
        <Route path='/' element={<Navigate replace to={creditWalletTreasurePath} />} />
        <Route path={creditWalletTreasurePath} element={<CreditWalletTreasure />} />
      </Fragment>
      ]
    } else if (item.key === permissions.Currency_Cloud_Rate_Access) {
      routesList = [...routesList,
      <Fragment key={permissions.Currency_Cloud_Rate_Access}>
        <Route path='/' element={<Navigate replace to={currencyCloudPath} />} />
        <Route path={currencyCloudPath} element={<Navigate replace to={currencyCloudKLRatesPath} />} />
        <Route path={currencyCloudPath} element={<CurrencyCloud />} >
          <Route path={currencyCloudKLRatesPath} element={<KLRates />} />
          <Route path={currencyCloudOTRatesPath} element={<OTRates />} />
          <Route path={currencyCloudTopUpRatesPath} element={<TopUpRates />} />
          <Route path={currencyCloudAllRatesPath} element={<AllRates />} />
        </Route>
      </Fragment>
      ]
    } else if (item.key === permissions.Feedbacks_Access) {
      routesList = [...routesList,
      <Fragment key={permissions.Feedbacks_Access}>
        <Route path='/' element={<Navigate replace to={feedbacksPath} />} />
        <Route path={feedbacksPath} element={<Feedbacks />} />
      </Fragment>
      ]
    } else if (item.key === permissions.Masternodes_Access) {
      routesList = [...routesList,
      <Fragment key={permissions.Masternodes_Access}>
        <Route path='/' element={<Navigate replace to={masterNodePath} />} />
        <Route path={masterNodePath} element={<Navigate replace to={masterNodeAllMasterNodesPath} />} />
        <Route path={masterNodePath} element={<MasterNode />} >
          <Route path={masterNodeAllMasterNodesPath} element={<AllMasterNodes />} />
          <Route path={masterNodeRewardsPath} element={<Rewards />} />
        </Route>
      </Fragment>
      ]
    } else if (item.key === permissions.Outbound_Transfers_Access) {
      routesList = [...routesList,
      <Fragment key={permissions.Outbound_Transfers_Access}>
        <Fragment>
          <Route path='/' element={<Navigate replace to={outboundTransfersPath} />} />
          <Route path={outboundTransfersPath} element={<Navigate replace to={outboundTransfersTransfersPath} />} />
          <Route path={outboundTransfersPath} element={<OutboundTransfers />} >
            <Route path={outboundTransfersTransfersPath} element={<Transfers />} />
            <Route path={outboundTransfersCountriesPath} element={<OutboundTransfersCountries />} />
            <Route path={outboundTransfersFeesPath} element={<Fees />} />
            <Route path={outboundTransfersRiskScoresPath} element={<RiskScores />} />
          </Route>
        </Fragment>
        <Fragment>
          <Route path='/' element={<Navigate replace to={cashOutPath} />} />
          <Route path={cashOutPath} element={<Navigate replace to={cashOutPendingRequestsPath} />} />
          <Route path={cashOutPath} element={<CashOut />} >
            <Route path={cashOutPendingRequestsPath} element={<PendingRequests />} />
            <Route path={cashOutCompletedRequestsPath} element={<CompletedRequests />} />
            <Route path={cashOutPendingKWLRequestsPath} element={<PendingKWLRequests />} />
            <Route path={cashOutCompletedKWLRequestsPath} element={<CompletedKWLRequests />} />
            <Route path={cashOutPendingMulticashRequestsPath} element={<PendingMulticashRequests />} />
            <Route path={cashOutCompletedMulticashRequestsPath} element={<CompletedMulticashRequests />} />
          </Route>
        </Fragment>
      </Fragment>
      ]
    } else if (item.key === permissions.Push_Notifications_Access) {
      routesList = [...routesList,
      <Fragment key={permissions.Push_Notifications_Access}>
        <Route path='/' element={<Navigate replace to={pushNotificationsPath} />} />
        <Route path={pushNotificationsPath} element={<PushNotifications />} />
      </Fragment>
      ]
    } else if (item.key === permissions.Referral_Links_Access) {
      routesList = [...routesList,
      <Fragment key={permissions.Referral_Links_Access}>
        <Route path='/' element={<Navigate replace to={referralLinkPath} />} />
        <Route path={referralLinkPath} element={<ReferralLink />} />
      </Fragment>
      ]
    } else if (item.key === permissions.Payments_Access) {
      routesList = [...routesList,
      <Fragment key={permissions.Payments_Access}>
        <Fragment>
          <Route path='/' element={<Navigate replace to={paymentsPath} />} />
          <Route path={paymentsPath} element={<Navigate replace to={paymentsTreasuryTransfersPath} />} />
          <Route path={paymentsPath} element={<Payments />} >
            <Route path={paymentsTreasuryTransfersPath} element={<TreasuryTransfers />} />
            <Route path={paymentsPayinsPath} element={<Payins />} />
            <Route path={paymentsPayoutsPath} element={<Payouts />} />
            <Route path={paymentsUpholdTransactionsPath} element={<UpholdTransactions />} />
          </Route>
        </Fragment>
        <Fragment>
          <Route path='/' element={<Navigate replace to={transactionsPath} />} />
          <Route path={transactionsPath} element={<Navigate replace to={transactionsAllPath} />} />
          <Route path={transactionsPath} element={<Transactions />} >
            <Route path={transactionsAllPath} element={<AllTransactions />} />
            {
              (thisArr.find(perm => perm.key === permissions.SuperUser) ||
                thisArr.find(perm => perm.key === permissions.Duplicate_Transactions_Access)) &&
              <Route path={transactionsDuplicatePath} element={<DuplicateTransactions />} />
            }
            {
              thisArr.find(perm => perm.key === permissions.SuperUser) &&
              <Route path={transactionsIncorectRatePath} element={<IncorrectRateTransactions />} />
            }
            {
              thisArr.find(perm => perm.key === permissions.SuperUser) &&
              <Route path={transactionsUnpaidPath} element={<UnpaidTransactions />} />
            }
          </Route>
        </Fragment>
        <Fragment>
          <Route path='/' element={<Navigate replace to={mobileTransfersPath} />} />
          <Route path={mobileTransfersPath} element={<Navigate replace to={mobileTransfersTransferTablePath} />} />
          <Route path={mobileTransfersPath} element={<MobileTransfers />} >
            <Route path={mobileTransfersTransferTablePath} element={<MobileTransferTable />} />
            <Route path={mobileTransfersOrderTablePath} element={<MobileOrderTable />} />
          </Route>
        </Fragment>
      </Fragment>
      ]
    }
  })

  return (
    <Routes>
      {
        !!userPermissionList.length ?
          <>
            {routesList}
            <Route path={profilePath} element={<Profile />} />
            <Route path={loginPath} element={<Navigate replace to='/' />} />
            <Route path={pageNotFoundPath} element={<PageNotFound />} />
            <Route path='*' element={<Navigate replace to={pageNotFoundPath} />} />
          </>
          :
          <Route path='*' element={<Loader />} />
      }
    </Routes>
  )
}