import React from 'react'
import { ThemeComsumer } from '../utils/ThemeContext'

export default function ConsumerPage() {
    return (
        <div>
            <span>ConsumerPage themeColor: </span>
            <ThemeComsumer>
                {
                    ctx => <span>{ ctx.themeColor }</span>
                }
            </ThemeComsumer>
        </div>
    )
}
