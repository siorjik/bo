export const loginPath = '/login'

// kwl
export const kwlPath = '/kuva-white-label'
export const kwlSitesPath = `${kwlPath}/sites`
export const kwlUsersPath = `${kwlPath}/users`
export const kwlCountriesPath = `${kwlPath}/countries`
export const kwlEditCountriesPath = `${kwlCountriesPath}/:id/edit`
export const getKwlEditCountriesPath = (id: number) => `${kwlCountriesPath}/${id}/edit`

// top up
export const topUpPath = '/top-up'
export const topUpUsdkPath = `${topUpPath}/usdk`
export const topUpKuvaCoinPath = `${topUpPath}/kuva-coin`
export const topUpCashrailPath = `${topUpPath}/cashrail`
export const topUpKuvaWhiteLabelPath = `${topUpPath}/kuva-white-label`

// kuva local
export const kuvaLocalPath = '/kuva-local'
export const kuvaLocalSettingsPath = `${kuvaLocalPath}/settings`
export const kuvaLocalOrdersPath = `${kuvaLocalPath}/orders`
export const kuvaLocalCouriersPath = `${kuvaLocalPath}/couriers`
export const kuvaLocalCourierDispatchOrderPath = `${kuvaLocalPath}/courier-dispatch-order`
export const kuvaLocalUsersPath = `${kuvaLocalPath}/users`
export const kuvaLocalContactPath = `${kuvaLocalPath}/contact`
export const kuvaLocalFeedbackPath = `${kuvaLocalPath}/feedback`
export const kuvaLocalStoresPath = `${kuvaLocalPath}/stores`
export const kuvaLocalCountriesPath = `${kuvaLocalPath}/countries`
export const kuvaLocalRefoundsPath = `${kuvaLocalPath}/refounds`
export const kuvaLocalSubmissionsPath = `${kuvaLocalPath}/submissions`
export const kuvaLocalPromocodePath = `${kuvaLocalPath}/promocode`
export const kuvaLocalCompaniesPath = `${kuvaLocalPath}/companies`
export const kuvaLocalReportPath = `${kuvaLocalPath}/report`
export const kuvaLocalCreditVendorPath = `${kuvaLocalPath}/credit-vendor`
export const kuvaLocalMobileHomePageWidgetsPath = `${kuvaLocalPath}/mobile-home-page-widgets`
export const kuvaLocalFacebookPath = `${kuvaLocalPath}/facebook`

// currency cloud
export const currencyCloudPath = '/currency-cloud'
export const currencyCloudKLRatesPath = `${currencyCloudPath}/kl-rates`
export const currencyCloudOTRatesPath = `${currencyCloudPath}/ot-rates`
export const currencyCloudTopUpRatesPath = `${currencyCloudPath}/top-up-rates`
export const currencyCloudAllRatesPath = `${currencyCloudPath}/all-rates`

// master node
export const masterNodePath = '/master-node'
export const masterNodeAllMasterNodesPath = `${masterNodePath}/all-master-nodes`
export const masterNodeRewardsPath = `${masterNodePath}/rewards`

// outbound transfers
export const outboundTransfersPath = '/outbound-transafers'
export const outboundTransfersTransfersPath = `${outboundTransfersPath}/transfers`
export const outboundTransfersCountriesPath = `${outboundTransfersPath}/countries`
export const outboundTransfersFeesPath = `${outboundTransfersPath}/fees`
export const outboundTransfersRiskScoresPath = `${outboundTransfersPath}/risk-scores`

// cash out
export const cashOutPath = '/cashout'
export const cashOutPendingRequestsPath = `${cashOutPath}/pending-requests`
export const cashOutCompletedRequestsPath = `${cashOutPath}/completed-requests`
export const cashOutPendingKWLRequestsPath = `${cashOutPath}/pending-kwl-requests`
export const cashOutCompletedKWLRequestsPath = `${cashOutPath}/completed-kwl-requests`
export const cashOutPendingMulticashRequestsPath = `${cashOutPath}/pending-multicash-requests`
export const cashOutCompletedMulticashRequestsPath = `${cashOutPath}/completed-multicash-requests`

// payments
export const paymentsPath = '/payments'
export const paymentsTreasuryTransfersPath = `${paymentsPath}/treasury-transfers`
export const paymentsPayinsPath = `${paymentsPath}/payins`
export const paymentsPayoutsPath = `${paymentsPath}/payouts`
export const paymentsUpholdTransactionsPath = `${paymentsPath}/uphold-transactions`

// transactions
export const transactionsPath = '/transactions'
export const transactionsAllPath = `${transactionsPath}/all`
export const transactionsDuplicatePath = `${transactionsPath}/duplicate`
export const transactionsIncorectRatePath = `${transactionsPath}/incorrect-rate`
export const transactionsUnpaidPath = `${transactionsPath}/unpaid`

// mobile transfers
export const mobileTransfersPath = '/mobile-transfers'
export const mobileTransfersTransferTablePath = `${mobileTransfersPath}/transfer-table`
export const mobileTransfersOrderTablePath = `${mobileTransfersPath}/order-table`

export const mobileUsersPath = '/mobile-users'
export const agentsProfilesPath = '/agents-profiles'
export const agentGroupsPath = '/agent-groups'
export const bugReportPath = '/bug-report'
export const pageNotFoundPath = '/page-not-found'
export const contactPath = '/contact'
export const creditWalletTreasurePath = '/credit-wallet-treasure'
export const feedbacksPath = '/feedbacks'
export const pushNotificationsPath = '/push-notifications'
export const referralLinkPath = '/referral-link'
export const profilePath = '/profile'
