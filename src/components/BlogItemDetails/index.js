import {Component} from 'react'
import Loader from 'react-loader-spinner'

import './index.css'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

let blogItemDetailsApiUrl = 'https://apis.ccbp.in/blogs/'

export default class BlogItemDetails extends Component {
  state = {
    isLoading: true,
    blogData: {},
  }

  componentDidMount() {
    this.fetchBlogData()
  }

  fetchBlogData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    blogItemDetailsApiUrl += id

    const blogDataAPIResponse = await fetch(blogItemDetailsApiUrl)
    const fetchedBlogData = await blogDataAPIResponse.json()

    const formattedBlogData = {
      id: fetchedBlogData.id,
      title: fetchedBlogData.title,
      imageUrl: fetchedBlogData.image_url,
      avatarUrl: fetchedBlogData.avatar_url,
      author: fetchedBlogData.author,
      content: fetchedBlogData.content,
      topic: fetchedBlogData.topic,
    }

    this.setState({
      isLoading: false,
      blogData: formattedBlogData,
    })
  }

  render() {
    const {isLoading, blogData} = this.state
    const {title, imageUrl, avatarUrl, author, content} = blogData

    return isLoading ? (
      // <div testid="loader">
      <div>
        <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
      </div>
    ) : (
      <div className="blog-item-details-container">
        <h1 className="blog-item-details-title">{title}</h1>
        <div className="blog-item-author-details-container">
          <img
            className="blog-item-details-avatar"
            src={avatarUrl}
            alt={author}
          />
          <p className="blog-item-details-author">{author}</p>
        </div>

        <img className="blog-item-details-image" src={imageUrl} alt={title} />
        <p className="blog-item-details-content">{content}</p>
      </div>
    )
  }
}
