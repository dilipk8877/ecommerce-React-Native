import { combineReducers } from "@reduxjs/toolkit"
import CategoryListingSlice from "../../features/categoryListing/CategoryListingSlice"
import ProductListingSlice from "../productListing/ProductListingSlice"
import SignupSlice from "../signupSlice/SignupSlice"
const rootReducer = combineReducers({
    userCategory:CategoryListingSlice,
    userProduct:ProductListingSlice,
    signup:SignupSlice
})

export default rootReducer