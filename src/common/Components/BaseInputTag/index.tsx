import React from 'react'
import {InputTagWrapper} from './styledComponents'
import {
    InputTagTypes
 } from './constants/inputTagConstants'
type Props = {
    inputTagHeight:any
    inputTagWidth:any
    type:any
    onChange:any
    value:string
}
class InputTag extends React.Component<Props>{
    static defaultTypes = {
        type: InputTagTypes,
    }
      
    render() {
        const {type,inputTagHeight,inputTagWidth,onChange,value} = this.props
        if(type === "TEXT")
        {
        return (
           <InputTagWrapper 
           type="text" 
           onChange={onChange}
           value={value}
           inputTagHeight={inputTagHeight}
           inputTagWidth={inputTagWidth}/>
         )
        }
        else if(type === "PASSWORD")
        {
            <InputTagWrapper 
            type="password" 
            onChange={onChange}
            value={value}
            inputTagHeight={inputTagHeight}
            inputTagWidth={inputTagWidth}/>  
        }
    }
  }
  
  export default InputTag 
  