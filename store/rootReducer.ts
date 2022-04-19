import {combineReducers} from "redux";
import {rateReducer} from "./rateReducer";

export type RootState = {
  rate: {
    minute: string;
    sms: string;
    internet: string;
    social: SocialNetworks;
  }
}

export const rootReducer = combineReducers({
  rate: rateReducer
})