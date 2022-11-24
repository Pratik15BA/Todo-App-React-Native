import React, { useEffect } from 'react';
import Main from './app/components/Main'
import { BackHandler, Alert } from 'react-native';

import {
  AdMobBanner,
  AdMobInterstitial,
  PublisherBanner,
  AdMobRewarded,
  setTestDeviceIDAsync,
} from 'expo-ads-admob';

const interstitialID = "ca-app-pub-3940256099942544/1033173712";

function showInterstitial() {
  AdMobInterstitial.setAdUnitID(interstitialID);
  AdMobInterstitial.requestAdAsync().then(() => {
    AdMobInterstitial.showAdAsync().catch((e) => console.log(e));
  });
}

function backPress (){
  Alert.alert("Back Pressed");
}
export default function App() {

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', showInterstitial);
    return () => BackHandler.removeEventListener('hardwareBackPress', showInterstitial).then(BackHandler.exitApp());
  }, []);

  return (
    <Main/>
  );
}
