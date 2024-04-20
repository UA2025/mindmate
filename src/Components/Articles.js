import React, { Component } from 'react';
import './Article.css'
class Articles extends Component {
  render() {
    const { newsItems } = this.props;

    // Slice the array to get the first four items
    const newsItemsToShow = newsItems.slice(0, 4);

    return (
      <div>
        {newsItemsToShow.map((item, index) => (
          <div key={index} className="card" style={{ width: '18rem' }}>
            <img src={item.imageurl} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{item.title}...</h5>
              <p className="card-text">{item.description}...</p>
              <a href={item.linke} className="bt" target="_blank" rel="noreferrer">
                Read more
              </a>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Articles;
