import { prices } from './tarifs.js';

export default function Calculator({call, minutes, plan }) {
   	let find = (prices.filter(item => item.call === call))[0];
    let price = find.price;
    let fmprice = ((parseFloat(price) * 0.1) + parseFloat(price));
    let validminutes = `${minutes}`.length;
    let surplus = (minutes - plan);

    let on = (surplus * fmprice).toFixed(2);
    let off = (minutes * price).toFixed(2);

    if ((minutes <= 0) || (validminutes >= 4) || (isNaN(minutes))) {
       const result = {
    		on: '0',
    		off: '0',
    		alert: true
    	}
    	return result;

    } else if ((surplus < 0) & (minutes >= 1)) {
    	const result = {
    		on: '0',
    		off: parseFloat(off)
    	}
      return result;

    } else {
    	const result = {
    		on: parseFloat(on),
    		off: parseFloat(off)
    	}
      return result;
    }
}
