import {AsyncStorage} from 'react-native';
import {FB_LOGIN_SUCCESS, FB_LOGIN_FAIL} from './types';
import {LoginManager, AccessToken} from 'react-native-fbsdk';

export const facebookLogin = () => async dispatch => {
  console.log('start of fb login : ', await AsyncStorage.getItem('fb_token'));
  let token = await AsyncStorage.getItem('fb_token');
  console.log('fuck token : ', token);
  if (token) {
    dispatch({type: FB_LOGIN_SUCCESS, payload: token});
  } else {
    doFacebookLogin(dispatch);
  }
};

const doFacebookLogin = async dispatch => {
  try {
    let result = await LoginManager.logInWithPermissions(['public_profile']);
    if (result.isCancelled) {
      console.log('Login cancelled');
      return dispatch({type: FB_LOGIN_FAIL});
    } else {
      console.log(
        'Login success with permissions: ' +
          result.grantedPermissions.toString(),
      );
      let token = await AccessToken.getCurrentAccessToken();
      //console.log(token);
      await AsyncStorage.setItem('fb_token', token.accessToken);
      dispatch({type: FB_LOGIN_SUCCESS, payload: token});
    }
  } catch (err) {
    console.log(err);
  }
};
