const duration = 300;
export const defaultStyle = {
    transition: `all ${duration}ms ease-in-out`,
    opacity: 0,
    zIndex: 0,
}

export const transitionStyles : { [id: string]: React.CSSProperties }=  {
    entering: { opacity: 1 , zIndex: 50 },
    entered:  { opacity: 1, zIndex: 50 },
    exiting:  { opacity: 0, zIndex: -10 , transition: `all ${duration}ms ease-in-out`},
    exited:  { opacity: 0 , zIndex: -10 ,transition: `all ${duration}ms ease-in-out`},
};

 export const headerTransitionStyles : { [id: string]: React.CSSProperties }=  {
     entering: { opacity: 1 , zIndex: 40 },
     entered:  { opacity: 1, zIndex: 40 },
     exiting:  { opacity: 0, zIndex: -10 , transition: `all ${duration}ms ease-in-out`},
     exited:  { opacity: 0 , zIndex: -10 ,transition: `all ${duration}ms ease-in-out`},
 };