import React, {PureComponent} from 'react'
import {
  View,
  Text,
  StyleSheet,
} from 'react-native'


export default class TimerCell extends PureComponent{
  render(){
    return(
    	<View style={style().container}>
		  <View style={style(this.props).timerBox}>
			<Text style={style(this.props).timerText}>
			  {this.props.number}
			</Text>
		  </View>
		  <View>
			<Text style={style(this.props).timerLabelText}>
			  {this.props.text}
			</Text>
		  </View>
		</View>
	)
  }
}

function style(props) {
  return StyleSheet.create({
	container: {
	  alignItems: 'center'
	},
	timerBox: {
	  backgroundColor: props && props.numBackColor ? props.numBackColor : 'rgb(241, 55, 0)',
	  width: 32,
	  height: 32,
	  borderRadius: 5.5,
	  alignItems: 'center',
	  justifyContent: 'center'
	},
	timerText: {
	  fontSize: 14,
	  color: props && props.numColor ? props.numColor :  'white',
	  fontWeight: '900',
	  textAlign: 'center',
	},
	timerLabelText: {
	  fontSize: 14,
	  color: props && props.textColor ? props.textColor : 'white',
	  fontWeight: '600',
	  textAlign: 'center',
	}
  })
}