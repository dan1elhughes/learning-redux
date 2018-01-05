import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { changeCount } from '../../actions';

const mapDispatchToProps = dispatch => ({
	onClick: () => dispatch(changeCount(1)),
});

const Button = ({ onClick }) => (
	<button type='button' onClick={onClick}>Increment</button>
);

Button.propTypes = {
	onClick: PropTypes.func,
};

export default connect(null, mapDispatchToProps)(Button);
