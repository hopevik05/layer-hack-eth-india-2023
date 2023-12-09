import { Navigate } from "react-router-dom";
import { APP_ROUTES } from "../../constants";

function MissingRootRedirect() {
  return <Navigate to={{ pathname: APP_ROUTES.dashboard }} />;
}

export default MissingRootRedirect;
