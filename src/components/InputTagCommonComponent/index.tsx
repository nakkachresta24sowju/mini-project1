import React from 'react'
import InputTag from '../../common/Components/BaseInputTag'
import { observable } from 'mobx'
import { observer, inject } from 'mobx-react'

class InputTagCreate extends React.Component {
    @observable inputValue:string ='';
     onChange = (event) => {
      this.inputValue = event.target.value;
     }
    render() {
      return (
        <InputTag 
        type={InputTag.defaultTypes.type.Text}
        onChange={this.onChange}
        value={this.inputValue}          
        inputTagHeight={4}
        inputTagWidth={5}
        />
      )
    }
  }
  
  export default InputTagCreate 
  