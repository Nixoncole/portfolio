import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Lightbox from 'react-images';

class PastWork extends Component {
    constructor () {
        super();

    }

    renderWork () {
        const { images } = this.props;

        if (!images) return;

        const works = images.map((obj, i) => {
            return (
                <article className="6u 12u$(xsmall) work-item" key={i}>
                    <a
                        className="image fit thumb"
                        href={obj.extern}
                        target="_blank"
                    >
                        <img src={obj.thumbnail} />
                    </a>

                    <h3>{obj.caption}</h3>
                    <p>{obj.description}</p>
                </article>
            );
        });

        return (
            <div className="row">
                {works}
            </div>
        );
    }
    render () {
        return (
            <div>
                {this.renderWork()}
                <Lightbox
                    images={this.props.images}
                />
            </div>
        );
    }
}

PastWork.displayName = 'PastWork';
PastWork.propTypes = {
    images: PropTypes.array
};

export default PastWork;