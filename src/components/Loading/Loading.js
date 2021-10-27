import React from "react";
import { css, cx } from "emotion";
import CSSTransition  from "react-transition-group/CSSTransition";
import Spinner from "./components/Spinner";
import PropTypes from "prop-types";
import STYLES from './styles'

class Loading extends React.Component {
    constructor(props) {
        super(props);
        this.wrapper = React.createRef();
        this.state = { overflowCss: {} };
        this.getStyles = this.getStyles.bind(this)
        this.cx = this.cx.bind(this)
    }

    componentDidMount() {
        const wrapperStyle = window.getComputedStyle(this.wrapper.current);
        const overflowCss = ['overflow', 'overflowX', 'overflowY'].reduce((m, i) => {
            if (wrapperStyle[i] !== 'visible') m[i] = 'hidden';
            return m;
        }, {});
        this.setState({ overflowCss })
    }

    componentDidUpdate(prevProps) {
        const { active } = this.props;
        if (active) this.wrapper.current.scrollTop = 0;
    }

    getStyles(key, providedState) {
        const base = STYLES[key](providedState, this.props)
        const custom = this.props.styles[key]
        if (!custom) return base;
        return typeof custom === 'function'
            ? custom(base, this.props)
            : custom;
    }

    cx (names, ...args) {
        const arr = Array.isArray(names) ? names : [names];
        return cx(
            ...arr.map(name => name ? `${this.props.classNamePrefix}${name}` : ''),
            ...args
        )
    }

    render() {
        const { overflowCss } = this.state;
        const { children, className, onClick, active, fadeSpeed, spinner, text } = this.props;
        return (
            <div data-testid="wrapper" ref={this.wrapper} className={this.cx(
                ['wrapper', active && 'wrapper--active'],
                css(this.getStyles('wrapper', active ? overflowCss : {})),
                className
            )}>
                <CSSTransition in={active} classNames="_loading-overlay-transition" timeout={fadeSpeed} unmountOnExit>
                    {state => (
                        <div data-testid="overlay" className={this.cx('overlay', css(this.getStyles('overlay', state)))} onClick={onClick}>
                            <div className={this.cx('content', css(this.getStyles('content')))}>
                                {spinner && (
                                    typeof spinner === 'boolean'
                                    ? <Spinner cx={this.cx} getStyles={this.getStyles}/>
                                    : spinner
                                )}
                                {text}
                            </div>
                        </div>
                    )}
                </CSSTransition>
                {children}
            </div>
        );
    }
}

Loading.propTypes = {
    active: PropTypes.bool,
    fadeSpeed: PropTypes.number,
    onClick: PropTypes.func,
    className: PropTypes.string,
    classNamePrefix: PropTypes.string,
    spinner: PropTypes.oneOfType([ PropTypes.bool, PropTypes.node ]),
    text: PropTypes.node,
    styles: PropTypes.shape({
        content: PropTypes.func,
        overlay: PropTypes.func,
        spinner: PropTypes.func,
        wrapper: PropTypes.func,
    })
}

Loading.defaultProps = {
    classNamePrefix: '_loading_overlay_',
    fadeSpeed: 500,
    styles: {}
}

export default Loading;