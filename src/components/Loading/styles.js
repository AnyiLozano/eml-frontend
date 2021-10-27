import { keyframes } from 'emotion';

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`
const spinnerDash = keyframes`
  0% {
    stroke-dasharray: 1,200;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 89,200;
    stroke-dashoffset: -35px;
  }
  100% {
    stroke-dasharray: 89,200;
    stroke-dashoffset: -124px;
  }
`
export default {
    wrapper: (state) => ({
      position: 'relative',
      ...state
    }),
    overlay: (state, props) => ({
      position: 'fixed',
      height: '100%',
      width: '100%',
      top: '0px',
      left: '0px',
      display: 'flex',
      textAlign: 'center',
      fontSize: '1.2em',
      color: '#FFF',
      background: '#ffffffdb',
      zIndex: 800,
      transition: `opacity ${props.fadeSpeed}ms ease-in`,
      opacity: (state === 'entering' || state === 'entered') ? 1 : 0
    }),
    content: () => ({
      margin: 'auto'
    }),
    spinner: (state) => ({
      position: 'relative',
      margin: '0px auto 10px auto',
      width: '50px',
      maxHeight: '100%',
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      justifyItems: "center",
      '&:before': {
        content: '""',
        display: 'block',
        paddingTop: '100%'
      },
      '& svg': {
        animation: `${rotate360} 2s linear infinite`,
        height: '100%',
        transformOrigin: 'center center',
        width: '100%',
        position: 'absolute',
        top: '150%',
        bottom: '0',
        left: '100%',
        right: '0',
        margin: 'auto',
        '& circle': {
          animation: `${spinnerDash} 1.5s ease-in-out infinite`,
          strokeDasharray: '1,200',
          strokeDashoffset: 0,
          strokeLinecap: 'round',
          stroke: 'rgba(55, 78, 154, 1)'
        }
      }
    })
  }