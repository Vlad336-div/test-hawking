import React, {useState, useEffect} from 'react';
import {WrapCountRate} from "./styles";
import {useSelector} from "react-redux";
import {RootState} from "../../store/rootReducer";
import axios from "axios"

const CountRate = (): JSX.Element => {
  const rate = useSelector((state: RootState) => state.rate)
  const [rateCount, setRateCount] = useState<string>('0')

  useEffect( () => {
    (async () => {
      const {data} = await axios.post('/api/rate', rate)
      setRateCount(data.count)
    })();
  }, [rate])

  return (
    <WrapCountRate>
      <div>
        Стоимость тарифа: <span>{rateCount} руб./месяц</span>
      </div>
    </WrapCountRate>
  );
};

export default CountRate;