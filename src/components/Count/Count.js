import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const mapStateToProps = state => ({ amount: state.clicks });

const Count = ({ amount }) => (
	<p>The count is { amount }.</p>
);

Count.propTypes = {
	amount: PropTypes.number.isRequired,
};

export default connect(mapStateToProps)(Count);
