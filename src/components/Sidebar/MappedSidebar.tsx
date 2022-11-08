import { MouseEvent } from "react"
import { MenuList, MenuItem, Collapse } from "@mui/material"
import { NavLink } from "react-router-dom"
import { ExpandLess, ExpandMore } from '@mui/icons-material'

import { PermissionDataType } from "../../types/permissionTypes"
import { getMapedPermissionList } from "../../services/permissionsService"
import { collapseItems } from '../../utils/constants'

import {
  kwlUsersPath,
  kwlSitesPath,
  mobileUsersPath,
  agentsProfilesPath,
  agentGroupsPath,
  topUpCashrailPath,
  topUpKuvaCoinPath,
  topUpKuvaWhiteLabelPath,
  topUpUsdkPath,
  bugReportPath,
  contactPath,
  kuvaLocalSettingsPath,
  kuvaLocalOrdersPath,
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
  creditWalletTreasurePath,
  currencyCloudKLRatesPath,
  currencyCloudOTRatesPath,
  currencyCloudTopUpRatesPath,
  currencyCloudAllRatesPath,
  feedbacksPath,
  masterNodeAllMasterNodesPath,
  masterNodeRewardsPath,
  outboundTransfersCountriesPath,
  outboundTransfersFeesPath,
  outboundTransfersRiskScoresPath,
  cashOutPendingRequestsPath,
  cashOutCompletedRequestsPath,
  cashOutPendingKWLRequestsPath,
  cashOutCompletedKWLRequestsPath,
  cashOutPendingMulticashRequestsPath,
  cashOutCompletedMulticashRequestsPath,
  outboundTransfersTransfersPath,
  pushNotificationsPath,
  referralLinkPath,
  paymentsTreasuryTransfersPath,
  paymentsPayinsPath,
  paymentsPayoutsPath,
  paymentsUpholdTransactionsPath,
  transactionsAllPath,
  transactionsDuplicatePath,
  transactionsUnpaidPath,
  transactionsIncorectRatePath,
  mobileTransfersTransferTablePath,
  mobileTransfersOrderTablePath,
  kwlCountriesPath,
} from '../../utils/appPaths'

export default (
  { userPermissionList, onClick, open }: {
    userPermissionList: PermissionDataType[],
    onClick: (e: MouseEvent, val: string) => void,
    open: { [key: string]: boolean }
  }) => {
  const permissions = getMapedPermissionList(userPermissionList)
  let menuList: JSX.Element[] = []

  const getCollapseExpandIcon = (open: boolean) => open ?
    <div className='item-expand'><ExpandLess /></div> : <div className='item-expand'><ExpandMore /></div>

  userPermissionList.forEach((item, _, thisArr) => {
    if (item.key === permissions.SuperUser) {
      menuList = [...menuList,
      <MenuItem key={permissions.SuperUser} onClick={(e) => onClick(e, collapseItems.KWL)}>
        <div className="item">
          <Collapse component="div" in={open.kwl} collapsedSize='35px' className='collapse'>
            <h4>
              Kuva White Label
              {getCollapseExpandIcon(open.kwl)}
            </h4>
            <NavLink className='item-link' to={kwlSitesPath}>Sites</NavLink>
            <NavLink className='item-link' to={kwlUsersPath}>Users</NavLink>
            <NavLink className='item-link' to={kwlCountriesPath}>Countries</NavLink>
          </Collapse>
        </div>
      </MenuItem>
      ]
    } else if (item.key === permissions.Users_Access) {
      menuList = [...menuList,
      <MenuItem key={permissions.Users_Access}>
        <div className="item">
          <h4><NavLink className='item-link' to={mobileUsersPath}>Mobile Users</NavLink></h4>
        </div>
      </MenuItem>
      ]
    } else if (item.key === permissions.Agents_Access) {
      menuList = [...menuList,
      <MenuItem key={permissions.Agents_Access + 1}>
        <div className="item">
          <h4><NavLink className='item-link' to={agentsProfilesPath}>Agents Profiles</NavLink></h4>
        </div>
      </MenuItem>,
      <MenuItem key={permissions.Agents_Access + 2}>
        <div className="item">
          <h4><NavLink className='item-link' to={agentGroupsPath}>Agent Groups</NavLink></h4>
        </div>
      </MenuItem>
      ]
    } else if (item.key === permissions.Top_Up_Access) {
      menuList = [...menuList,
      <MenuItem key={permissions.Top_Up_Access} onClick={(e) => onClick(e, collapseItems.TOP_UP)}>
        <div className="item">
          <Collapse component="div" in={open.topUp} collapsedSize='35px' className='collapse'>
            <h4>
              Top Up Requests
              {getCollapseExpandIcon(open.topUp)}
            </h4>
            <NavLink className='item-link' to={topUpUsdkPath}>USDk</NavLink>
            <NavLink className='item-link' to={topUpKuvaCoinPath}>Kuva Coin</NavLink>
            <NavLink className='item-link' to={topUpCashrailPath}>Cashrail</NavLink>
            <NavLink className='item-link' to={topUpKuvaWhiteLabelPath}>Kuva White Label</NavLink>
          </Collapse>
        </div>
      </MenuItem>
      ]
    } else if (item.key === permissions.Bug_Reports_Access) {
      menuList = [...menuList,
      <MenuItem key={permissions.Bug_Reports_Access}>
        <div className="item">
          <h4><NavLink className='item-link' to={bugReportPath}>Bug Report</NavLink></h4>
        </div>
      </MenuItem>
      ]
    } else if (item.key === permissions.Contacts_Access) {
      menuList = [...menuList,
      <MenuItem key={permissions.Contacts_Access}>
        <div className="item">
          <h4><NavLink className='item-link' to={contactPath}>Contact</NavLink></h4>
        </div>
      </MenuItem>
      ]
    } else if (item.key === permissions.KuvaLocalAdmin) {
      menuList = [...menuList,
      <MenuItem key={permissions.KuvaLocalAdmin} onClick={(e) => onClick(e, collapseItems.KUVA_LOCAL)}>
        <div className="item">
          <Collapse component="div" in={open.kuvaLocal} collapsedSize='35px' className='collapse'>
            <h4>
              Kuva Local
              {getCollapseExpandIcon(open.kuvaLocal)}
            </h4>
            <NavLink className='item-link' to={kuvaLocalSettingsPath}>Settings</NavLink>
            <NavLink className='item-link' to={kuvaLocalOrdersPath}>Orders</NavLink>
            <NavLink className='item-link' to={kuvaLocalCouriersPath}>Couries</NavLink>
            <NavLink className='item-link' to={kuvaLocalCourierDispatchOrderPath}>Dispatch Orders</NavLink>
            <NavLink className='item-link' to={kuvaLocalUsersPath}>Users</NavLink>
            <NavLink className='item-link' to={kuvaLocalContactPath}>Contact</NavLink>
            <NavLink className='item-link' to={kuvaLocalFeedbackPath}>Feedback</NavLink>
            <NavLink className='item-link' to={kuvaLocalStoresPath}>Stores</NavLink>
            <NavLink className='item-link' to={kuvaLocalCountriesPath}>Countries</NavLink>
            <NavLink className='item-link' to={kuvaLocalRefoundsPath}>Payment Refunds</NavLink>
            <NavLink className='item-link' to={kuvaLocalSubmissionsPath}>Submissions</NavLink>
            {
              thisArr.find(perm => perm.key === permissions.Promo_Code_Manager) &&
              <NavLink className='item-link' to={kuvaLocalPromocodePath}>Promocode</NavLink>
            }
            {
              thisArr.find(perm => perm.key === permissions.Charity_Manager) &&
              <NavLink className='item-link' to={kuvaLocalCompaniesPath}>Charity Companies</NavLink>
            }
            <NavLink className='item-link' to={kuvaLocalReportPath}>Report</NavLink>
            {
              thisArr.find(perm => perm.key === permissions.Credit_Vendor) &&
              <NavLink className='item-link' to={kuvaLocalCreditVendorPath}>Credit Vendor</NavLink>
            }
            <NavLink className='item-link' to={kuvaLocalMobileHomePageWidgetsPath}>Mobile Home Page Widgets</NavLink>
            <NavLink className='item-link' to={kuvaLocalFacebookPath}>Facebook</NavLink>
          </Collapse>
        </div>
      </MenuItem>
      ]
    } else if (item.key === permissions.Credit_Wallet_Reserve_Treasury_Reconciliation) {
      menuList = [...menuList,
      <MenuItem key={permissions.Credit_Wallet_Reserve_Treasury_Reconciliation}>
        <div className="item">
          <h4><NavLink className='item-link' to={creditWalletTreasurePath}>Credit Wallet Treasure</NavLink></h4>
        </div>
      </MenuItem>
      ]
    } else if (item.key === permissions.Currency_Cloud_Rate_Access) {
      menuList = [...menuList,
      <MenuItem key={permissions.Currency_Cloud_Rate_Access} onClick={(e) => onClick(e, collapseItems.CURRENCY_CLOUD)}>
        <div className="item">
          <Collapse component="div" in={open.currencyCloud} collapsedSize='35px' className='collapse'>
            <h4>
              Currency Cloud
              {getCollapseExpandIcon(open.currencyCloud)}
            </h4>
            <NavLink className='item-link' to={currencyCloudKLRatesPath}>Rates for KL</NavLink>
            <NavLink className='item-link' to={currencyCloudOTRatesPath}>Rates for OT</NavLink>
            <NavLink className='item-link' to={currencyCloudTopUpRatesPath}>Rates for Top Up</NavLink>
            <NavLink className='item-link' to={currencyCloudAllRatesPath}>All Rates</NavLink>
          </Collapse>
        </div>
      </MenuItem>
      ]
    } else if (item.key === permissions.Feedbacks_Access) {
      menuList = [...menuList,
      <MenuItem key={permissions.Feedbacks_Access}>
        <div className="item">
          <h4><NavLink className='item-link' to={feedbacksPath}>Feedbacks</NavLink></h4>
        </div>
      </MenuItem>
      ]
    } else if (item.key === permissions.Masternodes_Access) {
      menuList = [...menuList,
      <MenuItem key={permissions.Masternodes_Access} onClick={(e) => onClick(e, collapseItems.MASTER_NODE)}>
        <div className="item">
          <Collapse component="div" in={open.masterNode} collapsedSize='35px' className='collapse'>
            <h4>
              Master Node
              {getCollapseExpandIcon(open.masterNode)}
            </h4>
            <NavLink className='item-link' to={masterNodeAllMasterNodesPath}>All Master Nodes</NavLink>
            <NavLink className='item-link' to={masterNodeRewardsPath}>Rewards</NavLink>
          </Collapse>
        </div>
      </MenuItem>
      ]
    } else if (item.key === permissions.Outbound_Transfers_Access) {
      menuList = [...menuList,
      <MenuItem key={permissions.Outbound_Transfers_Access + 1} onClick={(e) => onClick(e, collapseItems.OUTBOUND_TRANSFERS)}>
        <div className="item">
          <Collapse component="div" in={open.outboundTransfers} collapsedSize='35px' className='collapse'>
            <h4>
              Outbound Transfers
              {getCollapseExpandIcon(open.outboundTransfers)}
            </h4>
            <NavLink className='item-link' to={outboundTransfersTransfersPath}>Transfers</NavLink>
            <NavLink className='item-link' to={outboundTransfersCountriesPath}>Countries</NavLink>
            <NavLink className='item-link' to={outboundTransfersFeesPath}>Fees</NavLink>
            <NavLink className='item-link' to={outboundTransfersRiskScoresPath}>Risk scores</NavLink>
          </Collapse>
        </div>
      </MenuItem>,
      <MenuItem key={permissions.Outbound_Transfers_Access + 2} onClick={(e) => onClick(e, collapseItems.CASHOUT)}>
        <div className="item">
          <Collapse component="div" in={open.cashout} collapsedSize='35px' className='collapse'>
            <h4>
              Cash Out
              {getCollapseExpandIcon(open.cashout)}
            </h4>
            <NavLink className='item-link' to={cashOutPendingRequestsPath}>Pending Requests</NavLink>
            <NavLink className='item-link' to={cashOutCompletedRequestsPath}>Completed Request</NavLink>
            <NavLink className='item-link' to={cashOutPendingKWLRequestsPath}>Pending KWL Requests</NavLink>
            <NavLink className='item-link' to={cashOutCompletedKWLRequestsPath}>Completed KWL Requests</NavLink>
            <NavLink className='item-link' to={cashOutPendingMulticashRequestsPath}>Pending Multicash Requests</NavLink>
            <NavLink className='item-link' to={cashOutCompletedMulticashRequestsPath}>Completed Multicash Requests</NavLink>
          </Collapse>
        </div>
      </MenuItem>
      ]
    } else if (item.key === permissions.Push_Notifications_Access) {
      menuList = [...menuList,
      <MenuItem key={permissions.Push_Notifications_Access}>
        <div className="item">
          <h4><NavLink className='item-link' to={pushNotificationsPath}>Push Notifications</NavLink></h4>
        </div>
      </MenuItem>
      ]
    } else if (item.key === permissions.Referral_Links_Access) {
      menuList = [...menuList,
      <MenuItem key={permissions.Referral_Links_Access}>
        <div className="item">
          <h4><NavLink className='item-link' to={referralLinkPath}>Referral Link</NavLink></h4>
        </div>
      </MenuItem>
      ]
    } else if (item.key === permissions.Payments_Access) {
      menuList = [...menuList,
      <MenuItem key={permissions.Payments_Access + 1} onClick={(e) => onClick(e, collapseItems.PAYMENTS)}>
        <div className="item">
          <Collapse component="div" in={open.payments} collapsedSize='35px' className='collapse'>
            <h4>
              Payments
              {getCollapseExpandIcon(open.payments)}
            </h4>
            <NavLink className='item-link' to={paymentsTreasuryTransfersPath}>Treasury Transfers</NavLink>
            <NavLink className='item-link' to={paymentsPayinsPath}>Payins</NavLink>
            <NavLink className='item-link' to={paymentsPayoutsPath}>Payouts</NavLink>
            <NavLink className='item-link' to={paymentsUpholdTransactionsPath}>Uphold Transactions</NavLink>
          </Collapse>
        </div>
      </MenuItem>,
      <MenuItem key={permissions.Payments_Access + 2} onClick={(e) => onClick(e, collapseItems.TRANSACTIONS)}>
        <div className="item">
          <Collapse component="div" in={open.transactions} collapsedSize='35px' className='collapse'>
            <h4>
              Transactions
              {getCollapseExpandIcon(open.transactions)}
            </h4>
            <NavLink className='item-link' to={transactionsAllPath}>All Transactions</NavLink>
            {
              (thisArr.find(perm => perm.key === permissions.SuperUser) ||
              thisArr.find(perm => perm.key === permissions.Duplicate_Transactions_Access)) &&
              <NavLink className='item-link' to={transactionsDuplicatePath}>Duplicate Transactions</NavLink>
            }
            {
              thisArr.find(perm => perm.key === permissions.SuperUser) &&
              <NavLink className='item-link' to={transactionsIncorectRatePath}>Incorrect Rate Transactions</NavLink>
            }
            {
              thisArr.find(perm => perm.key === permissions.SuperUser) &&
              <NavLink className='item-link' to={transactionsUnpaidPath}>Unpaid Transactions</NavLink>
            }
          </Collapse>
        </div>
      </MenuItem>,
      <MenuItem key={permissions.Payments_Access + 3} onClick={(e) => onClick(e, collapseItems.MOBILE_TRANSFERS)}>
        <div className="item">
          <Collapse component="div" in={open.mobileTransfers} collapsedSize='35px' className='collapse'>
            <h4>
              Mobile Transfers
              {getCollapseExpandIcon(open.mobileTransfers)}
            </h4>
            <NavLink className='item-link' to={mobileTransfersTransferTablePath}>Mobile Transfer Table</NavLink>
            <NavLink className='item-link' to={mobileTransfersOrderTablePath}>Mobile Order Table</NavLink>
          </Collapse>
        </div>
      </MenuItem>
      ]
    }
  })

  return <MenuList>{menuList}</MenuList>
}
