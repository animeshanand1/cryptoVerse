import {configureStore, ConfigureStore} from '@reduxjs/toolkit'
import { CryptoApi } from '../services/cryptoApi';

const store=configureStore({
reducer:{
    [CryptoApi.Path]:CryptoApi.reducer
}
})

export default store;