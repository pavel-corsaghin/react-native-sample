import React from 'react';
import { ActivityIndicator } from 'react-native';
import { Provider as ReduxStoreProvider, useSelector } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';
import { Provider as PaperProvider } from 'react-native-paper';
import {
  PaperThemeDefault,
  PaperThemeDark,
  CombinedDefaultTheme,
  CombinedDarkTheme,
} from 'app/assets/Themes';
import Navigator from 'app/navigation';
import { I18nextProvider } from 'react-i18next';
import {} from 'react-redux';
import i18n from './assets/i18n';
import storeConfig from './store';
import { isDarkTheme } from './store/@slices/theme';

const { store, persistor } = storeConfig;

const RootNavigation: React.FC = () => {
  const isDark = useSelector(isDarkTheme);
  const paperTheme = isDark ? PaperThemeDark : PaperThemeDefault;
  const combinedTheme = isDark ? CombinedDarkTheme : CombinedDefaultTheme;

  return (
    <PaperProvider theme={paperTheme}>
      <Navigator theme={combinedTheme} />
    </PaperProvider>
  );
};

const App: React.FC = () => {
  return (
    <I18nextProvider i18n={i18n}>
      <ReduxStoreProvider store={store}>
        <PersistGate loading={<ActivityIndicator />} persistor={persistor}>
          <RootNavigation />
        </PersistGate>
      </ReduxStoreProvider>
    </I18nextProvider>
  );
};

export default App;
