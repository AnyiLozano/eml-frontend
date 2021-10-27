import React from "react";
import { css } from "emotion";
import PropTypes from "prop-types"

const Spinner = ({ getStyles, cx }) => (
    <div className={cx('spinner', css(getStyles('spinner')))}>
        <div className="lds-ring">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <img src="img/logo.png" />
        </div>
    </div>
)

Spinner.propTypes = {
    getStyles: PropTypes.func.isRequired,
    cx: PropTypes.func.isRequired
}

export default Spinner;