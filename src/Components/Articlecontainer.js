import React, { Component } from 'react';
import Articles from './Articles';

class ArticleContainer extends Component {
  render() {
    const newsItemsData = [
      {
        id: 1,
        title: "Breaking News 1",
        description: "Description of Breaking News 1...",
        imageurl: "https://example.com/image1.jpg",
        linke: "https://example.com/news1"
      },
      {
        id: 2,
        title: "Breaking News 2",
        description: "Description of Breaking News 2...",
        imageurl: "https://example.com/image2.jpg",
        linke: "https://example.com/news2"
      },
      {
        id: 3,
        title: "Breaking News 3",
        description: "Description of Breaking News 3...",
        imageurl: "https://example.com/image3.jpg",
        linke: "https://example.com/news3"
      },
      {
        id: 4,
        title: "Breaking News 4",
        description: "Description of Breaking News 4...",
        imageurl: "https://example.com/image4.jpg",
        linke: "https://example.com/news4"
      },
      {
        id: 5,
        title: "Breaking News 5",
        description: "Description of Breaking News 5...",
        imageurl: "https://example.com/image5.jpg",
        linke: "https://example.com/news5"
      }
    ];

    return (
      <div>
        <Articles newsItems={newsItemsData} />
      </div>
    );
  }
}

export default ArticleContainer;
