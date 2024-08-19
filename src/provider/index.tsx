/*
 * RootProvider component wraps the application with essential context providers:
 *
 * 1. ReactQueryProvider: Manages data fetching and caching using React Query.
 * 2. Redux Provider: Connects the Redux store to the React application.
 * 3. PersistGate: Ensures persisted Redux state is loaded before rendering the UI.
 *
 * Takes `children` as a prop, representing the wrapped components.
 */

import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { persistor, store } from '../redux';
import ReactQueryProvider from './ReactQueryProvider';
import { PersistGate } from 'redux-persist/integration/react';

type RootProviderType = {
  children: ReactNode;
};
const RootProvider = ({ children }: RootProviderType) => {
  return (
    <ReactQueryProvider>
      <Provider store={store}>
        <PersistGate loading='null' persistor={persistor}>
          {children}
        </PersistGate>
      </Provider>
    </ReactQueryProvider>
  );
};

export default RootProvider;
