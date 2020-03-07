import React, { Component } from 'react'
import { ThemeContext } from '../utils/ThemeContext'

class ContextTypePage extends Component {
    render() {
        console.log(this)
        const {themeColor} = this.context
        return (
            <div>
                ContextTypePage themeColor: { themeColor }
            </div>
        )
    }
}

ContextTypePage.contextType = ThemeContext
export default ContextTypePage
