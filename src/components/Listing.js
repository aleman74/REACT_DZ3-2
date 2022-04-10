import React from 'react'
import PropTypes from 'prop-types'

// import shortid from "shortid";


function Listing(props) {

    return (

        <div className="item-list">

            {props.items.map((item) =>

                <div key={item.listing_id} className="item">
                    <div className="item-image">
                        <a href={item.url}>
                            <img src={GetImage(item)}/>
                        </a>
                    </div>
                    <div className="item-details">
                        <p className="item-title">{GetName(item.title)}</p>
                        <p className="item-price">$3.99</p>
                        <p className={GetClassQuantity(item.quantity)}>{item.quantity + ' left'}</p>
                    </div>
                </div>
            )}
        </div>
    );
}

function GetClassQuantity(value)
{
    let result = 'item-quantity';

    if (value <= 10)
        result += ' level-low';
    else if (value <= 20)
        result += ' level-medium';
    else
        result += ' level-high';

    return result;
}

function GetPrice(item)
{
    let result = null;

    if (item.currency_code && item.price)
    {
        if ((item.currency_code == '$') || (item.currency_code == '€'))
            result = item.currency_code + item.price;
        else
            result = item.price + ' ' + item.currency_code;
    }

    return result;
}

function GetImage(item)
{
    if (item.MainImage && item.MainImage.url_570xN)
        return item.MainImage.url_570xN;
    else
        return null;
}

function GetName(value)
{
    console.log('value = ' + value);

    if (value) {
        // Если название предложения привышает 50 символов, то необходимо выводить только первые 50 символов, и добавлять символ … в конце.
        if (value.length > 50)
            return value.substring(0, 50) + '...';
        else
            return value;
    }
    else
        return '';
}

Listing.propTypes = {
    items: PropTypes.array.isRequired
}

Listing.defaultProps = {


};


export default Listing;
