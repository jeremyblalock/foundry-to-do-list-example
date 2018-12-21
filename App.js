import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import Runner from '@protonapp/proton-runner'
import app from './proton-bundle.json'
import images from './images'

import * as MaterialComponents from '@protonapp/material-components'

const baseURL = 'https://proton-database.herokuapp.com'
const assetsBaseURL = 'https://s3-us-west-1.amazonaws.com/apto-resources-dev'
const uploadsBaseURL = 'https://s3.amazonaws.com/proton-uploads-production'

export default class App extends React.Component {
  getAssetURL = filename => {
    return images[filename]
  }

  getLibraries = () => {
    return {
      '@protonapp/material-components': MaterialComponents
    }
  }

  render() {
    return (
      <Runner
        app={app}
        baseURL={baseURL}
        uploadsBaseURL={uploadsBaseURL}
        getAssetURL={this.getAssetURL}
        libraries={this.getLibraries()}
      />
    )
  }
}

