import React, { Fragment } from 'react';

function Promotion() {
    return (
        <Fragment>
            <div id="promotion-bar" style={{background: '#ffcad4', visibility: 'hidden', opacity: '0'}}> 
                <div className="bar-wapper">
                    <p className="bar-content">CHƯƠNG TRÌNH TẶNG TẶNG VÒNG TRỊ GIÁ ĐẾN 2,990,000</p>
                    <a type="button" className="action-button" href="https://pandora.norbreeze.vn/collections/hot-deals">MUA NGAY</a>
                </div>
                <a href="#" className="close-bar">
                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
                </a>
            </div>
        </Fragment>   
    );
}

export default Promotion;