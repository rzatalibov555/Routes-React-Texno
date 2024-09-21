import { Link, useMatch } from "react-router-dom"

const CustomLinkHook = ({children, to, ...props}) => {

    const match = useMatch(to)
    console.log(match)
    return(
        <Link to={to} 
        style={{
            color: match ? 'purple' : 'red'
        }}
        {...props}
        >

            {children}        

        </Link>
    )
}

export {CustomLinkHook}