import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Controls extends Component{
    /* button controls */ 
    controlsText = ['prev', 'next'];

    bubbleTransition = (key) => {
        this.props.bubbleTransition(key);
    }                                                                           

    /* reate bubbles based on slides length */
    bubblesHtml = () => {
        const { onSliding, slidesCount, currentSlide } = this.props;
        let html = [];
        for( let i = 1; i<= slidesCount; i++){
            html.push(
                <div 
                    key={`bubble${i}`}
                    className={`bubble ${currentSlide === i ? 'current':''}`}
                    onClick={ () => this.bubbleTransition(i) }
                ></div>
            );
        }
        return html;
    }

    render(){
        const { onSliding, slidesCount, currentSlide } = this.props;
        return (
            <div className="controls">
                <div className="controls__bubbles">
                    {slidesCount && this.bubblesHtml()}
                </div>
                <div className="controls__buttons">
                    {
                        this.controlsText.map(item => 
                        <button
                            key={item}
                            className="btn"
                            onClick={() => onSliding(item)}>{item}
                        </button>)
                    }
                </div>
            </div>
        );
    }
}

export default Controls;

Controls.propTypes = {
}