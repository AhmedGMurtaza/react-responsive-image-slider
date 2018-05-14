import React from 'react';
import PropTypes from 'prop-types';

const Controls = ({onSliding,slidesCount,currentSlide}) => {
    const controlsText = ['prev','next'];

    //create bubbles based on slides length
    const bubblesHtml = () => {
        let i = 1, 
            html = [];
        while(i <= slidesCount){
            html.push(<div 
                key={`bubble${i}`}
                className={`bubble ${currentSlide === i ? 'current':''}`}></div>);
            i++;
        }
        return html;
    }

    return (
        <div className="controls">
            <div className="controls__bubbles">
                { slidesCount && bubblesHtml() }
            </div>
            <div className="controls__buttons">
                {
                    controlsText.map(item => <button 
                        key={item} 
                        className="btn" 
                        onClick={() => onSliding(item)}>{item}</button>)
                }
            </div>
        </div>
    );
}

export default Controls;

Controls.propTypes = {
}