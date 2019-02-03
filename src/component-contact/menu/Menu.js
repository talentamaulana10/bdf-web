import React, { Component } from 'react'
import Draw from '../draw/Draw'
import Skype from '../draw/DrawSkype'
import Github from '../draw/DrawGithub'
import Telegram from '../draw/DrawTelegram'
export default class Menu extends Component{
    render(){
        return(
            <div>
                <Draw  />
                <Skype/>
                <Github/>
                <Telegram/>
            </div>
        )
    }
}