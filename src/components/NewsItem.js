import React, { Component } from 'react'
import './NewsItem.css';
export class NewsItem extends Component {
    
  render() {
    
    let {title,description, imgUrl,newsUrl,author,date} = this.props;

    return (
      <div className='my-3'>
        <div className="card">
            <img src= {imgUrl? imgUrl : "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/57c5f285c443fd2edcb2b00afb4ba1f6.jpg"} className="card-img-top"  alt="..."/>
            <div className="card-body">
                <h5 className="card-title mb-3">{title}...</h5>
                <p className="card-text">{description}...</p>
                <p className="card-text"><small className="text-body-secondary">By : {author? author : "Unknown"} On : {new Date(date).toGMTString()}</small></p>
                <a href = {newsUrl} target='_blank' rel="noreferrer" className=" btn btn-sm btn-primary d-grid">Read More</a>
            </div>
        </div>
      </div>
    )
  }
}

export default NewsItem