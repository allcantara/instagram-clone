import React from 'react';
import { StatusBar } from 'react-native';
import Routes from './src/Routes';

export default () => {
  return (
    <>
      <StatusBar barStyle={"dark-content"} backgroundColor="#f5f5f5" />
      <Routes />
    </>
  );
}
