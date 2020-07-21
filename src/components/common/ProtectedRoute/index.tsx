import React from "react";
import { Route, Redirect } from "react-router-dom";
import { getAccessToken } from "../../../utils/StorageUtils";
import { observer } from "mobx-react";
import { reaction } from "mobx";
class ProtectedRoute extends React.Component {
  render() {
    return <div>fdg</div>;
    //     if(getAccessToken())
    //     {
    //         return <Route path={path} component={component} />

    //     }
    //     else{
    //         return <Redirect to={{pathname:SignIn}}
    //     }
  }
}
export { ProtectedRoute };
