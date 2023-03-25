import AdditionallyFilledIcon from '../components/Icons/tabs/AdditionallyFilledIcon';
import MainFilledIcon from '../components/Icons/tabs/MainFilledIcon';
import {MainStackScreen, AdditionalStackScreen} from './AppNavigation';

export const tabs = [
  {
    id: 0,
    name: 'Главная',
    component: MainStackScreen,
    icon: MainFilledIcon,
  },
  {
    id: 1,
    name: 'Еще',
    component: AdditionalStackScreen,
    icon: AdditionallyFilledIcon,
  },
];
