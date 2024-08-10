import { configureStore } from '@reduxjs/toolkit'
import productDetails  from '../feature/productSlice'
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// Define the persist config
const persistConfig = {
  key: 'root',
  storage,
};
const persistedReducer = persistReducer(persistConfig, productDetails);

export const store = configureStore({
  reducer: {
    app:persistedReducer
  },
})
// Create a persistor
export const persistor = persistStore(store);