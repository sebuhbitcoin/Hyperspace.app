import PropTypes from 'prop-types'
import React from 'react'
import { List } from 'immutable'

const TransactionList = ({ transactions, ntransactions, actions, filter }) => {
	if (transactions.size === 0) {
		return (
			<div className="transaction-list">
				<h3> No recent transactions </h3>
			</div>
		)
	}
	const prettyTimestamp = (timestamp) => {
		const pad = (n) => String('0' + n).slice(-2)

		const yesterday = new Date()
		yesterday.setHours(yesterday.getHours() - 24)
		if (timestamp > yesterday) {
			return (
				'Today at ' +
				pad(timestamp.getHours()) +
				':' +
				pad(timestamp.getMinutes())
			)
		}
		return (
			timestamp.getFullYear() +
			'-' +
			pad(timestamp.getMonth() + 1) +
			'-' +
			pad(timestamp.getDate()) +
			' ' +
			pad(timestamp.getHours()) +
			':' +
			pad(timestamp.getMinutes())
		)
	}
	const transactionComponents = transactions
		.take(ntransactions)
		.filter((txn) => {
			if (!filter) {
				return true
			}
			return (
				txn.transactionsums.totalSpaceCash.abs().gt(0) ||
				txn.transactionsums.totalMiner.abs().gt(0)
			)
		})
		.map((txn, key) => {
			let valueData = ''
			if (txn.transactionsums.totalSpaceCash.abs().gt(0)) {
				valueData +=
					txn.transactionsums.totalSpaceCash
						.round(4)
						.toNumber()
						.toLocaleString() + ' SPACE '
			}
			if (txn.transactionsums.totalMiner.abs().gt(0)) {
				valueData +=
					txn.transactionsums.totalMiner
						.round(4)
						.toNumber()
						.toLocaleString() + ' SPACE (miner) '
			}
			if (valueData === '') {
				valueData = '0 SPACE'
			}
			return (
				<tr key={key}>
					<td className="txid" onClick={() => copyTx(txn.transactionid)}>
						{txn.transactionid.slice(0, 12) + '...'}
					</td>
					<td>{valueData}</td>
					<td>
						{txn.confirmed
							? prettyTimestamp(txn.confirmationtimestamp)
							: 'Not Confirmed'}
					</td>
					<td>
						{txn.confirmed ? (
							<i className="fa fa-check confirmed-icon" />
						) : (
							<i className="fa fa-clock-o unconfirmed-icon" />
						)}
					</td>
				</tr>
			)
		})
	const onMoreClick = () => actions.showMoreTransactions()
	const onToggleFilter = () => actions.toggleFilter()
	const copyTx = (str) => actions.copyText(str)
	// <div className="filter-toggle">
	// <input type="checkbox" onClick={onToggleFilter} checked={filter} />Hide 0 SPACE Transactions
	// </div>
	return (
		<div className="transaction-list">
			<div className="transaction-header">
				<h2>Transaction History</h2>
			</div>
			<table className="pure-table transaction-table">
				<thead>
					<tr>
						<th>Transaction ID</th>
						<th>Amount</th>
						<th>Date</th>
						<th>Status</th>
					</tr>
				</thead>
				<tbody>{transactionComponents}</tbody>
			</table>
			{transactions.size > ntransactions ? (
				<div className="load-more">
					<button className="load-more-button" onClick={onMoreClick}>
						More Transactions
					</button>
				</div>
			) : null}
		</div>
	)
}

TransactionList.propTypes = {
	transactions: PropTypes.instanceOf(List).isRequired,
	ntransactions: PropTypes.number.isRequired,
	filter: PropTypes.bool.isRequired,
}

export default TransactionList
