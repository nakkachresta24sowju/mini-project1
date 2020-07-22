import React from "react";
import { Route, Redirect } from "react-router-dom";
import { getAccessToken } from "../../../utils/StorageUtils";
import { observer } from "mobx-react";
import { reaction } from "mobx";
import { LOGIN_PATH} from "../../../Authentication/constants";

// export const ProtectedRoute = observer(props =>
//   {
  
//     const { path, component:Component, ...otherProps} = props
//     if(getAccessToken()) return <Route exact path={path} component ={Component} {...otherProps} />
//     else return <Redirect to={{pathname:LOGIN_PATH}}/>
//   })

type Props = {
  path:any 
  component:any 
}

class ProtectedRoute extends React.Component<Props>{
  render() {
     const {path,component}=this.props
        if(getAccessToken()){ 
         return <Route  exact path={path} component={component}/>
        }
        else{
          return <Redirect to = {{pathname: LOGIN_PATH}} />
        }
  }
}

export default ProtectedRoute