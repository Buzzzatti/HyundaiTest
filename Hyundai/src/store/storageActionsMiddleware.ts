import NetInfo from '@react-native-community/netinfo';
import messaging from '@react-native-firebase/messaging';

// import ConnectionNotSecure from '~components/shared/StatusScreen/ConnectionNotSecure.png';
// import * as RootNavigation from '~helpers/rootNavigation';

const storageActionsMiddleware =
  ({dispatch}) =>
  next =>
  action => {
    return next(action);
  };

export default storageActionsMiddleware;
