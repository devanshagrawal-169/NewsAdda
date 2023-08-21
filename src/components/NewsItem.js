import React from 'react'

const NewsItem = (props) => {
    let { title, description, imageUrl, newsUrl, author, date, source } = props;
    return (
        <div className="my-3">
            <div className="card">
                <div style={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    position: 'absolute',
                    right: '0'
                }
                }>
                    <span className="badge rounded-pill bg-info"> {source} </span>
                </div>
                <img src={!imageUrl ? "https://plus.unsplash.com/premium_photo-1661483130622-7b98709ea9be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG5ld3N8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" : imageUrl} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}  </h5>
                    <p className="card-text">{description}</p>
                    <p className="card-text"><small className="text-muted">By {!author ? "Unknown" : author} on  {new Date(date).toGMTString()}</small></p>
                    <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
                </div>
            </div>
        </div>
    )

}

export default NewsItem