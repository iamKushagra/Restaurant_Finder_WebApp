import React, {Component} from 'react';

class Item extends Component {
    render() {
        return (
            <div className="product-item-wrap">
                <div className="product-item" key={this.props.elem._id}>
                    <div className={`product-item-img${(this.props.elem.imgName==="default.png") ? " no-img" : ""}`}>

                    </div>

                    <div className="product-item-info">
                        <div className="product-item-title">
                            {this.props.elem.title}
                        </div>

                        <div className="product-item-price">
                            {this.props.elem.price}
                            <span className="dollar">$</span>
                        </div>

                        <div className="cart-add-btn">
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Item;