import React from 'react';
import { Text, View, Image } from 'react-native';
import { Card } from 'react-native-elements';

import styles from '../config/theme';

import { axiosWeatherService } from '../../utils/lib/axiosServices';

class Weather extends React.Component {

  state = {
    weatherInfos: null
  }

  componentDidMount() {
    this.getWeatherInfos();
  }

  getWeatherInfos() {
    navigator.geolocation.getCurrentPosition(
      (res) => {
        this.setState({
          weatherInfos: axiosWeatherService
            .request({
              params: {
                lat: res.coords.latitude,
                lon: res.coords.longitude
              }
            }).then(res => {
              this.setState({
                weatherInfos: res.data
              })
            })
        })
      },
      (err) => {

      }
    );
  }

  render() {
    let text;
    if (this.state.weatherInfos && this.state.weatherInfos.cod) {
      text = (
        <View style={{
          display: 'flex',
          justifyContent: 'space-between'
        }}>
          <View>
            <Text>{this.state.weatherInfos.name}, {this.state.weatherInfos.main.temp}°</Text>
            <Text style={{ textTransform: 'capitalize' }}>{this.state.weatherInfos.weather[0].description}</Text>
          </View>

          <Image
            source={{
              uri: `https://openweathermap.org/img/wn/${this.state.weatherInfos.weather[0].icon}@2x.png`
            }} />
        </View>
      );

    } else {
      text = <Text>Ottenendo informazioni meteo...</Text>
    }

    return (
      <Card
        containerStyle={styles.card}
      >
        {text}
      </Card>
    );
  }
}

export default Weather;