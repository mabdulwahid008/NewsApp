import React, { Component } from 'react'//rce

export class NewsItem extends Component {
  render() {
      let {title, description, imageUrl, url} = this.props;
    return (
      <div>
        <div className="card" >
            <img src={imageUrl ? imageUrl : "https://static01.nyt.com/images/2022/02/17/us/politics/17dc-justice/merlin_199612353_b05bfb07-3da8-404e-8a75-221181e5d014-facebookJumbo.jpg"} className="card-img-top" alt="..." style={{height : 200}}/>
            <div className="card-body">
                <h5 className="card-title">{title.length >= 50 ? title.slice(0, 50)+"..." : title}</h5>
                <p className="card-text">{description.length >= 150? title.slice(0, 149)+"..." : description }</p>
                <a href={url} target="#BLANK" className="btn btn-sm btn-dark">Read More</a>
            </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
