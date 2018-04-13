import React, {Component} from 'react';
import {liftUser} from './action/actions'
import {Redirect} from 'react-router-dom'
import axios from 'axios';
import {connect} from 'react-redux'

import BasicLayout from './BasicLayout'
import CelebrationLayout from './CelebrationLayout'
import DogLayout from './DogLayout'
import GraphicDesignLayout from './GraphicDesignLayout'
import SunflowerLayout from './SunflowerLayout'

class Generator extends Component{
    constructor(props){
        super(props)
        this.state={
            layout: ''
        }
    }

    componentWillMount(){
        axios.get('/snapbook/'+ this.props.match.params.id)
        .then((ret) => {
            console.log(ret)
            var retBook = ret.data
            if(retBook.layout === 'layout1'){
                this.setState({
                    layout: <BasicLayout pics={retBook.pics}/>
                })
            }
            if(retBook.layout === 'layout2'){
                this.setState({
                    layout: <CelebrationLayout pics={retBook.pics}/>
                })
            }
            if(retBook.layout === 'layout3'){
                this.setState({
                    layout: <DogLayout pics={retBook.pics}/>
                })
            }
            if(retBook.layout === 'layout4'){
                this.setState({
                    layout: <GraphicDesignLayout pics={retBook.pics}/>
                })
            }
            if(retBook.layout === 'layout5'){
                this.setState({
                    layout: <SunflowerLayout pics={retBook.pics}/>
                })
            }
        })
    }

    render(){
        let { layout } = this.state
        return(
            <div>
                {layout}
            </div>
        )
    }
}

export default Generator