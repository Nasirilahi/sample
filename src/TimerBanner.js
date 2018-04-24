import React, {PureComponent} from 'react'
import { ImageBackground, Dimensions } from 'react-native'
import Timer from './Timer'
// import Timer from './Timer'
const {width} = Dimensions.get('window')

export default class TimerBanner extends PureComponent{
  static defaultProps = {
    url: `http://via.placeholder.com/${width}x${Math.floor(width / 4)}`
  }
  render(){
    return(
		<ImageBackground source={{uri: this.props.url}} style={{width, height: width / 4, justifyContent: 'center' }}>
		  <Timer timer={this.props.timer} />
		</ImageBackground>
	)
  }
}



