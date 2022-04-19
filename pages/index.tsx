import type { NextPage } from 'next'
import {WrapApp} from "./styles";
import Range from "../components/Range/Range"
import CountRate from "../components/CountRate/CountRate";
import Social from "../components/Social/Social";
import {useSelector, useDispatch} from "react-redux";
import {RootState} from "../store/rootReducer";
import React from "react";

const Home: NextPage = (): JSX.Element => {
  const {minute, sms, internet, social} = useSelector((state: RootState) => state.rate)
  const dispatch = useDispatch()

  return (
    <WrapApp>
      <div>
        <h1>Настройте тариф</h1>
        <Range
          placeholder="Минуты"
          values={['100', '200', '300', '600']}
          value={minute}
          change={(value) => dispatch({type: 'SET_MINUTE', payload: value})}
        />
        <Range
          placeholder="СМС"
          values={['0', '100', '150', '200']}
          value={sms}
          change={(value) => dispatch({type: 'SET_SMS', payload: value})}
        />
        <Range
          placeholder="Интернет"
          values={['5', '10', '15', '25']}
          value={internet}
          change={(value) => dispatch({type: 'SET_INTERNET', payload: value})}
        />
        <Social value={social}/>
      </div>
      <CountRate/>
    </WrapApp>
  )
}

export default Home
