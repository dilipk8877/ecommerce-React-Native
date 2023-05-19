import { combineReducers } from "@reduxjs/toolkit"
import CategoryListingSlice from "../../features/categoryListing/CategoryListingSlice"
import ProductListingSlice from "../productListing/ProductListingSlice"
import SignupSlice from "../signupSlice/SignupSlice"
import LoginSlice from "../loginSlice/LoginSlice"

const rootReducer = combineReducers({
    userCategory:CategoryListingSlice,
    userProduct:ProductListingSlice,
    signup:SignupSlice,
    login:LoginSlice,

})

export default rootReducer