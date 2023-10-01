import React from "react";

const Newsitem=(props)=>{

    //destructuring props
    let { title, description, imageurl, newsurl, author, date, source }=props;

    return (
      <div className="my-3">
        <div className="card">
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              position: "absolute",
              right: "0",
            }}
          >
            <span className="badge rounded-pill bg-danger"> {source} </span>
          </div>

          <img src={imageurl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">
              {title}...{" "}
            </h5>

            <p className="card-text">{description}...</p>
            <p className="card-text">
              <small className="text-muted">
                By {author ? author : "unknown"} on{" "}
                {new Date(date).toUTCString()}
              </small>
            </p>
            <a
              href={newsurl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-sm btn-dark "
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  
}

export default Newsitem;

//1 rcc shortcut used for structure
//let {title,description}=this.props; used to pull title and description from props

//create constructor using super
// constructor(){
//   super();
//   console.log("hello constructor")
// }

//2 state changed but props donot

//3  href={newsurl} target="_blank" rel="noreferrer" ,Here - used to open news in new tab
//  <a href={newsurl} target="_blank" rel="noreferrer" className="btn btn-sm btn-primary ">

//4 ftech api used for current latest news
