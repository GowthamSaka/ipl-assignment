import {Component} from 'react'

import './index.css'

class Comments extends Component {
  render() {
    return (
      <div className="comments-bg-container">
        <div className="input-container">
          <h1 className="heading">Comments</h1>
          <div className="input-card-container">
            <div className="input-cards">
              <p className="caption">Say something about 4.0 Technologies</p>
              <form className="form-container">
                <input
                  className="name-input"
                  type="text"
                  placeholder="Your name"
                />
                <br />
                <input
                  type="textarea"
                  className="comment-type"
                  placeholder="Your comment"
                />
                <br />
                <button type="button" className="add-button">
                  Add Comment
                </button>
              </form>
            </div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
              alt="comments"
              className="comments-image"
            />
          </div>
          <hr className="separator" />
        </div>
      </div>
    )
  }
}

export default Comments
