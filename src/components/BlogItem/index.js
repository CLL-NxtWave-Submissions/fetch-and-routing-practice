import {Link} from 'react-router-dom'
import './index.css'

const BlogItem = props => {
  const {itemData} = props
  const {id, title, imageUrl, avatarUrl, author, topic} = itemData

  return (
    <Link className="blog-item-routing-link" to={`/blogs/${id}`}>
      <li className="blog-item-container">
        <img className="blog-item-image" src={imageUrl} alt={title} />
        <div className="blog-item-content-container">
          <p className="blog-item-topic">{topic}</p>
          <h1 className="blog-item-title">{title}</h1>
          <div className="blog-author-details-container">
            <img className="blog-item-avatar" src={avatarUrl} alt={author} />
            <p className="blog-item-author">{author}</p>
          </div>
        </div>
      </li>
    </Link>
  )
}

export default BlogItem
