// jest.mock('react-native/Libraries/EventEmitter/NativeEventEmitter.js', () => {
//   const { EventEmitter } = require('events');
//   return EventEmitter;
// });
jest.mock('react-native/Libraries/EventEmitter/NativeEventEmitter');

jest.mock('react-native', () => {
  const RN = jest.requireActual("react-native");

  RN.NativeModules.AppboyReactBridge = {
      registerAndroidPushToken: jest.fn(),
      setGoogleAdvertisingId: jest.fn(),
      setFirstName: jest.fn(),
      setLastName: jest.fn(),
      setLanguage: jest.fn(),
      setEmail: jest.fn(),
      setPhoneNumber: jest.fn(),
      changeUser: jest.fn(),
      setSdkAuthenticationSignature: jest.fn(),
      addAlias: jest.fn(),
      setSDKFlavor: jest.fn(),
      logCustomEvent: jest.fn(),
      logPurchase: jest.fn(),
      setCountry: jest.fn(),
      setHomeCity: jest.fn(),
      setDateOfBirth: jest.fn(),
      setAttributionData: jest.fn(),
      launchNewsFeed: jest.fn(),
      launchContentCards: jest.fn(),
      getContentCards: jest.fn(),
      logContentCardClicked: jest.fn(),
      logContentCardDismissed: jest.fn(),
      logContentCardImpression: jest.fn(),
      requestFeedRefresh: jest.fn(),
      requestImmediateDataFlush: jest.fn(),
      enableSDK: jest.fn(),
      disableSDK: jest.fn(),
      wipeData: jest.fn(),
      setDateCustomUserAttribute: jest.fn(),
      setCustomUserAttributeArray: jest.fn(),
      setBoolCustomUserAttribute: jest.fn(),
      setStringCustomUserAttribute: jest.fn(),
      setIntCustomUserAttribute: jest.fn(),
      setDoubleCustomUserAttribute: jest.fn(),
      incrementCustomUserAttribute: jest.fn(),
      setGender: jest.fn(),
      addToSubscriptionGroup: jest.fn(),
      removeFromSubscriptionGroup: jest.fn(),
      setPushNotificationSubscriptionType: jest.fn(),
      setEmailNotificationSubscriptionType: jest.fn(),
      addToCustomAttributeArray: jest.fn(),
      removeFromCustomAttributeArray: jest.fn(),
      unsetCustomUserAttribute: jest.fn(),
      getCardCountForCategories: jest.fn(),
      getUnreadCardCountForCategories: jest.fn(),
      getInitialUrl: jest.fn(),
      getInstallTrackingId: jest.fn(),
      requestLocationInitialization: jest.fn(),
      requestGeofences: jest.fn(),
      setLocationCustomAttribute: jest.fn(),
      requestContentCardsRefresh: jest.fn(),
      subscribeToInAppMessage: jest.fn(),
      hideCurrentInAppMessage: jest.fn(),
      logInAppMessageClicked: jest.fn(),
      logInAppMessageImpression: jest.fn(),
      logInAppMessageButtonClicked: jest.fn(),
      setLastKnownLocation: jest.fn(),
      setMetadata: jest.fn(),
      requestPushPermission: jest.fn(),
  };

  return RN;
});
