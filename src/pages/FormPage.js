import React, { Component } from 'react'
import myFormCreat from '../components/myFormCreat'

const nameRules = {required: true, message: '请输入用户名'}
const passwordRules = {required: true, message: '请输入密码'}

@myFormCreat
class FormPage extends Component {
    render() {
        const { getFieldDecorator } = this.props
        return (
            <div>
                <div>
                    {
                        getFieldDecorator('name', {rules: [nameRules]})(
                            <input placeholder='请输入用户名' />
                        )
                    }
                </div>
                <div>
                    {
                        getFieldDecorator('password', {rules: [passwordRules]})(
                            <input type='password' placeholder='请输入密码' />
                        )
                    }
                </div>
                <button onClick={this.submit}>提交</button>
            </div>
        )
    }

    submit = () => {
        const { getFieldsValue, getFieldValue, validateFields } = this.props
        // console.log('getFieldsValue', getFieldsValue())
        // console.log('getFieldValue', getFieldValue('name'))
        validateFields((err, data) => {
            if(err) {
                console.log(err)
            } else {
                console.log(data)
            }
        })
    }
}

export default FormPage