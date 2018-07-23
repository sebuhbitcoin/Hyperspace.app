import PropTypes from 'prop-types'
import React from 'react'
import SendButton from './sendbutton.js'
import SendPrompt from '../containers/sendprompt.js'
import ReceiveButton from '../containers/receivebutton.js'
import ReceivePrompt from '../containers/receiveprompt.js'
import NewWalletDialog from '../containers/newwalletdialog.js'
import LockButton from '../containers/lockbutton.js'
import RecoverButton from '../containers/recoverbutton.js'
import RecoveryDialog from '../containers/recoverydialog.js'
import ChangePasswordButton from '../containers/changepasswordbutton.js'
import ChangePasswordDialog from '../containers/changepassworddialog.js'
import BackupButton from '../containers/backupbutton.js'
import BackupPrompt from '../containers/backupprompt.js'
import BalanceInfo from '../containers/balanceinfo.js'

const Wallet = ({
	showBalanceInfo,
	showBackupPrompt,
	showReceivePrompt,
	showChangePasswordDialog,
	showSendPrompt,
	showNewWalletDialog,
	showRecoveryDialog,
	actions,
}) => {
	const onSendClick = (currencytype) => () =>
		actions.startSendPrompt(currencytype)
	return (
		<div className="wallet pure-g">
			<div id="sidebar" className="pure-u-1-5">
				<h1>Wallet</h1>
				<SendButton
					currencytype="spacecash"
					onClick={onSendClick('spacecash')}
				/>
				<ReceiveButton />
				<LockButton />
				<ChangePasswordButton />
				<RecoverButton />
				<BackupButton />
			</div>
			<div className="pure-u-4-5">
				{showBalanceInfo ? <BalanceInfo /> : null}
				{showNewWalletDialog ? <NewWalletDialog /> : null}
				{showSendPrompt ? <SendPrompt /> : null}
				{showReceivePrompt ? <ReceivePrompt /> : null}
				{showRecoveryDialog ? <RecoveryDialog /> : null}
				{showChangePasswordDialog ? <ChangePasswordDialog /> : null}
				{showBackupPrompt ? <BackupPrompt /> : null}
			</div>
		</div>
	)
}

Wallet.propTypes = {
	showNewWalletDialog: PropTypes.bool,
	showSendPrompt: PropTypes.bool,
	showReceivePrompt: PropTypes.bool,
	showChangePasswordDialog: PropTypes.bool,
	showBackupPrompt: PropTypes.bool,
}

export default Wallet
