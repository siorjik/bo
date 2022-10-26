import { useState, useEffect, useContext, MouseEvent } from 'react'
import MenuList from '@mui/material/MenuList'
import MenuItem from '@mui/material/MenuItem'
import ExpandLess from '@mui/icons-material/ExpandLess'
import ExpandMore from '@mui/icons-material/ExpandMore'
import Collapse from '@mui/material/Collapse'
import { NavLink } from 'react-router-dom'
import { MenuRounded, MenuOpenRounded } from '@mui/icons-material'

import { getLocationProp } from '../../helpers/history'
import { getSidebarPermissions } from '../../services/permissionsService'
import { MainContext } from '../../App'
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
  cashoutPendingRequestsPath,
  cashoutCompletedRequestsPath,
  cashoutPendingKWLRequestsPath,
  cashoutCompletedKWLRequestsPath,
  cashoutPendingMulticashRequestsPath,
  cashoutCompletedMulticashRequestsPath,
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
} from '../../utils/appPaths'
import { collapseItems, menuItems } from '../../utils/constants'
import getOpenedCollapse from './getOpenedCollapse'

type CollapseMenuType = {
  kwl: boolean,
  topUp: boolean,
  kuvaLocal: boolean,
  currencyCloud: boolean,
  masterNode: boolean,
  outboundTransfers: boolean,
  cashout: boolean,
  payments: boolean,
  transactions: boolean,
  mobileTransfers: boolean,
}

export default ({ isMobileView }: { isMobileView?: boolean }) => {
  const [open, setOpen] = useState<CollapseMenuType>({
    kwl: false,
    topUp: false,
    kuvaLocal: false,
    currencyCloud: false,
    masterNode: false,
    outboundTransfers: false,
    cashout: false,
    payments: false,
    transactions: false,
    mobileTransfers: false,
  })
  const [menuOpen, setMenuOpen] = useState(true)

  const { userPermissionList } = useContext(MainContext)

  const pathname = getLocationProp('pathname')

  useEffect(() => {
    if (userPermissionList.length) setOpen({ ...open, [getOpenedCollapse(pathname)]: true })
  }, [userPermissionList, pathname])

  const onClick = (e: MouseEvent, val: string) => {
    const target = e.target as HTMLLIElement

    const isLink = target.className === 'item-link'

    if (!isLink) setOpen({ ...open, [val]: !open[val as keyof CollapseMenuType] })
  }

  const getCollapseExpandIcon = (open: boolean) => open ?
    <div className='item-expand'><ExpandLess /></div> : <div className='item-expand'><ExpandMore /></div>

  const isPermission = (checkedItem: string) => getSidebarPermissions(userPermissionList, checkedItem)

  return (
    <>
      {!isMobileView && <div className="switch-menu-section">
        <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          {!menuOpen ? <MenuRounded /> : <MenuOpenRounded />}
        </div>
      </div>}
      <div className={`sidebar ${!menuOpen ? 'menu-closed' : ''}`}>
        {<MenuList>
          {isPermission(collapseItems.KWL) && <MenuItem onClick={(e) => onClick(e, collapseItems.KWL)}>
            <div className="item">
              <Collapse component="div" in={open.kwl} collapsedSize='35px' className='collapse'>
                <h4>
                  Kuva White Label
                  {getCollapseExpandIcon(open.kwl)}
                </h4>
                <NavLink className='item-link' to={kwlSitesPath}>KWL Sites</NavLink>
                <NavLink className='item-link' to={kwlUsersPath}>Users</NavLink>
              </Collapse>
            </div>
          </MenuItem>}

          {isPermission(menuItems.MOBILE_USERS) && <MenuItem>
            <div className="item">
              <h4><NavLink className='item-link' to={mobileUsersPath}>Mobile Users</NavLink></h4>
            </div>
          </MenuItem>}

          {isPermission(menuItems.AGENTS_PROFILES) && <MenuItem>
            <div className="item">
              <h4><NavLink className='item-link' to={agentsProfilesPath}>Agents Profiles</NavLink></h4>
            </div>
          </MenuItem>}

          {isPermission(menuItems.AGENT_GROUPS) && <MenuItem>
            <div className="item">
              <h4><NavLink className='item-link' to={agentGroupsPath}>Agent Groups</NavLink></h4>
            </div>
          </MenuItem>}

          {isPermission(collapseItems.TOP_UP) && <MenuItem onClick={(e) => onClick(e, collapseItems.TOP_UP)}>
            <div className="item">
              <Collapse component="div" in={open.topUp} collapsedSize='35px' className='collapse'>
                <h4>
                  Top Up
                  {getCollapseExpandIcon(open.topUp)}
                </h4>
                <NavLink className='item-link' to={topUpUsdkPath}>USDk</NavLink>
                <NavLink className='item-link' to={topUpKuvaCoinPath}>Kuva Coin</NavLink>
                <NavLink className='item-link' to={topUpCashrailPath}>Cashrail</NavLink>
                <NavLink className='item-link' to={topUpKuvaWhiteLabelPath}>Kuva White Label</NavLink>
              </Collapse>
            </div>
          </MenuItem>}

          {isPermission(menuItems.BUG_REPORT) && <MenuItem>
            <div className="item">
              <h4><NavLink className='item-link' to={bugReportPath}>Bug Report</NavLink></h4>
            </div>
          </MenuItem>}

          {isPermission(menuItems.CONTACTS_ACCESS) && <MenuItem>
            <div className="item">
              <h4><NavLink className='item-link' to={contactPath}>Contact</NavLink></h4>
            </div>
          </MenuItem>}

          {isPermission(collapseItems.KUVA_LOCAL) && <MenuItem onClick={(e) => onClick(e, collapseItems.KUVA_LOCAL)}>
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
                  isPermission(menuItems.PROMO_CODE_MANAGER) && 
                   <NavLink className='item-link' to={kuvaLocalPromocodePath}>Promocode</NavLink>
                }
                {
                  isPermission(menuItems.CHARITY_MANAGER) &&
                    <NavLink className='item-link' to={kuvaLocalCompaniesPath}>Charity Companies</NavLink>
                }
                <NavLink className='item-link' to={kuvaLocalReportPath}>Report</NavLink>
                {
                  isPermission(menuItems.CREDIT_VENDOR) &&
                    <NavLink className='item-link' to={kuvaLocalCreditVendorPath}>Credit Vendor</NavLink>
                }
                <NavLink className='item-link' to={kuvaLocalMobileHomePageWidgetsPath}>Mobile Home Page Widgets</NavLink>
                <NavLink className='item-link' to={kuvaLocalFacebookPath}>Facebook</NavLink>
              </Collapse>
            </div>
          </MenuItem>}

          {isPermission(menuItems.CREDIT_WALLET_TREASURE) && <MenuItem>
            <div className="item">
              <h4><NavLink className='item-link' to={creditWalletTreasurePath}>Credit Wallet Treasure</NavLink></h4>
            </div>
          </MenuItem>}

          {isPermission(collapseItems.CURRENCY_CLOUD) && <MenuItem onClick={(e) => onClick(e, collapseItems.CURRENCY_CLOUD)}>
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
          </MenuItem>}

          {isPermission(menuItems.FEEDBACKS_ACCESS) && <MenuItem>
            <div className="item">
              <h4><NavLink className='item-link' to={feedbacksPath}>Feedbacks</NavLink></h4>
            </div>
          </MenuItem>}

          {isPermission(collapseItems.MASTER_NODE) && <MenuItem onClick={(e) => onClick(e, collapseItems.MASTER_NODE)}>
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
          </MenuItem>}

          {
            isPermission(collapseItems.OUTBOUND_TRANSFERS) &&
              <MenuItem onClick={(e) => onClick(e, collapseItems.OUTBOUND_TRANSFERS)}>
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
              </MenuItem>
          }

          {isPermission(collapseItems.CASHOUT) && <MenuItem onClick={(e) => onClick(e, collapseItems.CASHOUT)}>
            <div className="item">
              <Collapse component="div" in={open.cashout} collapsedSize='35px' className='collapse'>
                <h4>
                  Cashout
                  {getCollapseExpandIcon(open.cashout)}
                </h4>
                <NavLink className='item-link' to={cashoutPendingRequestsPath}>Pending Requests</NavLink>
                <NavLink className='item-link' to={cashoutCompletedRequestsPath}>Completed Request</NavLink>
                <NavLink className='item-link' to={cashoutPendingKWLRequestsPath}>Pending KWL Requests</NavLink>
                <NavLink className='item-link' to={cashoutCompletedKWLRequestsPath}>Completed KWL Requests</NavLink>
                <NavLink className='item-link' to={cashoutPendingMulticashRequestsPath}>Pending Multicash Requests</NavLink>
                <NavLink className='item-link' to={cashoutCompletedMulticashRequestsPath}>Completed Multicash Requests</NavLink>
              </Collapse>
            </div>
          </MenuItem>}

          {isPermission(menuItems.PUSH_NOTIFICATION) && <MenuItem>
            <div className="item">
              <h4><NavLink className='item-link' to={pushNotificationsPath}>Push Notifications</NavLink></h4>
            </div>
          </MenuItem>}

          {isPermission(menuItems.REFERRAL_LINK) && <MenuItem>
            <div className="item">
              <h4><NavLink className='item-link' to={referralLinkPath}>Referral Link</NavLink></h4>
            </div>
          </MenuItem>}

          {isPermission(collapseItems.PAYMENTS) && <MenuItem onClick={(e) => onClick(e, collapseItems.PAYMENTS)}>
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
          </MenuItem>}

          {isPermission(collapseItems.TRANSACTIONS) && <MenuItem onClick={(e) => onClick(e, collapseItems.TRANSACTIONS)}>
            <div className="item">
              <Collapse component="div" in={open.transactions} collapsedSize='35px' className='collapse'>
                <h4>
                  Transactions
                  {getCollapseExpandIcon(open.transactions)}
                </h4>
                <NavLink className='item-link' to={transactionsAllPath}>All Transactions</NavLink>
                {isPermission(menuItems.DUPLICATE_TRANSACTIONS) &&
                    <NavLink className='item-link' to={transactionsDuplicatePath}>Duplicate Transactions</NavLink>}
                {isPermission(menuItems.INCORRECT_RATE_TRANSACTION) &&
                  <NavLink className='item-link' to={transactionsIncorectRatePath}>Incorrect Rate Transactions</NavLink>}
                {isPermission(menuItems.UNPAID_TRANSACTION) &&
                  <NavLink className='item-link' to={transactionsUnpaidPath}>Unpaid Transactions</NavLink>}
              </Collapse>
            </div>
          </MenuItem>}

          {isPermission(collapseItems.MOBILE_TRANSFERS) && <MenuItem onClick={(e) => onClick(e, collapseItems.MOBILE_TRANSFERS)}>
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
          </MenuItem>}
        </MenuList>}
      </div>
    </>
  )
}
