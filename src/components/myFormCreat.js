import React, { Component } from 'react'

export default function myFormCreat(Cmp) {
  return class extends Component {
    constructor(props) {
      super(props)
      this.state = {
				errorMsgs: {}
			}
      this.options = {}
    }

    validateFields = callback => {
			let errors = {}
			const state = {...this.state}
			for(let name in this.options) {
				let rules = this.options[name].rules
				if(rules && rules.length) {
					for(let rule of rules) {
						if(rule.required) {
							if(!state[name]) {
								errors[name] = rule.message
							}
							break
						}
					}
				}
			}

			this.setState({
				errorMsgs: {...errors}
			})
			
			if (typeof callback === 'function') {
					if(JSON.stringify(errors) === '{}') {
					callback(undefined, state)
				} else {
					callback(errors, state)
				}
			}
    }

    getFieldValue = name => {
      return this.state[name]
    }

    getFieldsValue = () => {
      return this.state
    }

    getFieldDecorator = (name, option) => {
			this.options[name] = option
      return InputCmp => {
				const { errorMsgs } = this.state

        return (
					<div>
						{
							React.cloneElement(InputCmp, {
								name,
								value: this.state[name] || '',
								onChange: this.handleChange
							})
						}
						{
							errorMsgs[name] ? <p>{errorMsgs[name]}</p> : null
						}
					</div>
				)
      }
    }

    handleChange = e => {
      let { name, value } = e.target
      this.setState({
        [name]: value
      })
    }

    render() {
      const {
        getFieldDecorator,
        getFieldsValue,
        getFieldValue,
        validateFields
			} = this

      const funs = {
        getFieldDecorator,
        getFieldsValue,
        getFieldValue,
        validateFields
			}
			
      return (
        <div className='container'>
          <Cmp {...funs} />
        </div>
      )
    }
  }
}
