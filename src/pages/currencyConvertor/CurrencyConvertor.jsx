import React from 'react';
import { Block } from './Block';
import './currencyConvertor.scss';

function App() {
  const [formCurrency, setFromCurrency] = React.useState('BYN');
  const [toCurrency, setToCurrency] = React.useState('USD');
  const ratesRef = React.useRef({});
  const [formPrice, setFromPrice] = React.useState(0);
  const [toPrice, setToPrice] = React.useState(1);
  React.useEffect(() => {
    fetch('https://cdn.cur.su/api/latest.json')
      .then((res) => res.json())
      .then((json) => {
       ratesRef.current = json.rates;
onChangeToPrice(1)
      })
      .catch((err) => {
        console.warn(err);
        alert('error');
      });
  }, []);
  const onChangeFromPrice = (value) => {
    const price = value /  ratesRef.current[formCurrency];
    const result = price *  ratesRef.current[toCurrency];
    setToPrice(result.toFixed(3));
    setFromPrice(value);
  };
  const onChangeToPrice = (value) => {
    const result = ( ratesRef.current[formCurrency] /  ratesRef.current[toCurrency]) * value;
    setFromPrice(result.toFixed(3));
    setToPrice(value);
  };
  React.useEffect(() => {
    onChangeFromPrice(formPrice);
  }, [formCurrency]);
  React.useEffect(() => {
    onChangeToPrice(toPrice);
  }, [toCurrency]);
  return (
    <div className="body_currencyConvertor">
      <div className="currencyConvertor">
        <Block
          value={formPrice}
          currency={formCurrency}
          onChangeValue={onChangeFromPrice}
          onChangeCurrency={setFromCurrency}
        />
        <Block
          value={toPrice}
          currency={toCurrency}
          onChangeValue={onChangeToPrice}
          onChangeCurrency={setToCurrency}
        />
      </div>
    </div>
  );
}

export default App;
