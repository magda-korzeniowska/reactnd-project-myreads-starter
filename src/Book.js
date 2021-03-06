import React, { Component } from 'react'
import { PropTypes } from 'prop-types'

class Book extends Component {
  render() {

    let bookImage
    if (this.props.book.imageLinks) {
      bookImage = this.props.book.imageLinks.thumbnail
    } else {
      bookImage = "https://via.placeholder.com/128x193.jpg?text=No+Image"
    }

    return(
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193,
            backgroundImage: `url(${ bookImage })` }}></div>
          <div className="book-shelf-changer">
            <select
              onChange={(e) => this.props.changeShelf(
                this.props.book, e.target.value
              )}
              // default value of select option:
              value={this.props.currentShelf}
              >
              <option value="move" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{this.props.book.title}</div>
        <div className="book-authors">{this.props.book.authors}</div>
      </div>
    )
  }
}

Book.propTypes = {
  book: PropTypes.object.isRequired,
  currentShelf: PropTypes.string.isRequired,
  changeShelf: PropTypes.func.isRequired
}

export default Book
