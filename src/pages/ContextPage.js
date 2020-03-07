import React, { Component } from 'react'
import { ThemeProvider } from '../utils/ThemeContext'
import ContextTypePage from './ContextTypePage'
import ConsumerPage from './ConsumerPage'

export default class ContextPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            theme: {
                themeColor: 'red'
            }
        }
    }
    
    render() {
        const { theme } = this.state

        return (
            <div>
                <ThemeProvider value={theme}>
                    {/* 只能订阅一个context */}
                    <ContextTypePage />
                    
                    <ConsumerPage />
                </ThemeProvider>
            </div>
        )
    }
}
