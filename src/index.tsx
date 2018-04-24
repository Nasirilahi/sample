import React, {Component} from 'react'
import { StyleSheet, View } from 'react-native'
import TimerBanner from './TimerBanner'
export interface Props { }
export interface State { }

const styles: any = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center'
    }
})

const timer = {
    end_date: '2018-04-25 18:00:00 +0000 +0000' ,
    start_date: '2018-04-24 12:01:00 +0000 +0000'
}
class App extends Component<Props, State> {
    public render() {
        return (
            <View style={styles.container}>
                <TimerBanner timer={timer}/>
            </View>
        )
    }
}

export default App