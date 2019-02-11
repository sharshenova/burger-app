import React from 'react';
import OrderButton from './OrderButton/OrderButton';


function BurgerForm(props) {
    return <div className="panel">
        <p className="total">Итого: {props.total}</p>
        <div>
            {props.children}
        </div>
        <OrderButton disabled={!props.isPurchasable}/>
    </div>
}


export default BurgerForm
