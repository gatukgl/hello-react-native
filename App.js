import React from "react";

import { NativeRouter, Route } from "react-router-native";
import { Text } from 'react-native-elements'

import { Login } from './Login'
import { Home } from './Home'

export default function App() {
  return (
    <NativeRouter>
      <Route exact path="/" component={Login}/>
      <Route exact path="/home" component={Home}/>
    </NativeRouter>
  );
}
