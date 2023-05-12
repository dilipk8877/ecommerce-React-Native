import { configureStore } from "@reduxjs/toolkit"
import rootReducer from "./src/features/combinReducer/CombinReducer"

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
    
})

export default store