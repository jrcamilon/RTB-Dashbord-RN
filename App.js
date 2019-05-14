import React from 'react';
import { WebView  } from 'react-native';
import { ScreenOrientation } from 'expo';

export default class App extends React.Component {

  constructor() {
    super();
    this.state = {
      orientation: 'ALL_BUT_UPSIDE_DOWN',
      url: 'https://rtb.corp.adobe.com/'
    }
  }

  componentDidMount() {
    ScreenOrientation.allowAsync("ALL_BUT_UPSIDE_DOWN");
  }
  render() {
    return (
      <WebView
        source={{uri: this.state.url}}
        style={{marginTop: 35}}
        useWebKit={true} 
      />
    );
  }
}
