import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"

const RequireNoAuth = ({ children }) => {
    const { authenticated } = useSelector(store => store.auth)

    return authenticated ? children : <Navigate to="/" replace />
}

export default RequireNoAuth