import React, {PureComponent, Fragment} from 'react'
import {
  View,
  Text,
  StyleSheet,
} from 'react-native'
import PropTypes from 'prop-types'
import moment from 'moment'
import TimerCell from './TimerCell'
const styles = StyleSheet.create({
  container: {
    padding: 8,
	alignSelf: 'center',
    backgroundColor: 'transparent'
  },
  directionRow: {
    flexDirection: 'row',
  },
  timerText: {
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'center'
  },
  doubleDotText: {
    color: 'rgb(241, 55, 0)',
    paddingHorizontal: 5,
    paddingTop: 5,
    fontWeight: '900',
  }
})

class Timer extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      counterDay: 0,
      counterHour: 0,
      counterMinute: 0,
      counterSecond: 0,
    }
  }

  componentDidMount() {
    this.countdown = setInterval(() => {
      this.countCounter()
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.countdown)
  }

  countCounter = () => {
    const sprintSaleEndDate = this.props.timer.end_date.substring(0, 10)
    const sprintSaleEndTime = this.props.timer.end_date.substring(11, 19)
    const sprintSaleEnd = `${sprintSaleEndDate}T${sprintSaleEndTime}+07:00`
    const duration = moment.duration(moment(sprintSaleEnd).diff(moment()))
    const days = duration.days() >= 0 ? duration.days() : 0
    const hours = duration.hours() >= 0 ? duration.hours() : 0
    const minutes = duration.minutes() >= 0 ? duration.minutes() : 0
    const seconds = duration.seconds() >= 0 ? duration.seconds() : 0

    if (duration._milliseconds <= 1000) {
      this.setState({ isShowModal: true })
    }


    this.setState({
      counterDay: days,
      counterHour: hours,
      counterMinute: minutes,
      counterSecond: seconds,
    })
  }

  doubleDigit = number => {
    return number <= 9 ? `0${number}` : `${number}`
  }


  render() {
    const { counterDay, counterHour, counterMinute, counterSecond } = this.state
    return (
      <View style={styles.container}>
        <View style={styles.directionRow}>
		  {
			counterDay > 0 && (
				<Fragment>
				  <TimerCell number={this.doubleDigit(counterDay)} text={'hari'} numBackColor={'#ffda00'} numColor={'#006436'} textColor={'#ffffff'} />
				  <Text style={[styles.timerText, styles.doubleDotText, {color: '#006436'}]}>:</Text>
				</Fragment>
			)
		  }
		  <TimerCell number={this.doubleDigit(counterHour)} text={'jam'} numBackColor={'#ffda00'}  numColor={'#006436'} textColor={'#ffffff'} />
		  <Text style={[styles.timerText, styles.doubleDotText, {color: '#006436'}]}>:</Text>
		  <TimerCell number={this.doubleDigit(counterMinute)} text={'menit'} numBackColor={'#ffda00'} numColor={'#006436'} textColor={'#ffffff'} />
            <Text style={[styles.timerText, styles.doubleDotText, {color: '#006436'}]}>:</Text>
		  <TimerCell number={this.doubleDigit(counterSecond)} text={'detik'} numBackColor={'#ffda00'} numColor={'#006436'} textColor={'#ffffff'} />
        </View>
      </View>
    )
  }
}

Timer.propTypes = {
  timer: PropTypes.object.isRequired,
}

export default Timer
