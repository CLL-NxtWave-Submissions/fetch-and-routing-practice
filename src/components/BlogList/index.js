import {Component} from 'react'
import Loader from 'react-loader-spinner'
import BlogItem from '../BlogItem'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'

const blogsApiUrl = 'https://apis.ccbp.in/blogs'

export default class BlogList extends Component {
  state = {
    isLoading: true,
    blogList: [],
  }

  async componentDidMount() {
    const blogsDataAPIResponse = await fetch(blogsApiUrl)
    const blogsData = await blogsDataAPIResponse.json()
    const formattedBlogsData = blogsData.map(blogsDataItem => ({
      id: blogsDataItem.id,
      title: blogsDataItem.title,
      imageUrl: blogsDataItem.image_url,
      avatarUrl: blogsDataItem.avatar_url,
      author: blogsDataItem.author,
      topic: blogsDataItem.topic,
    }))

    this.setState({
      isLoading: false,
      blogList: formattedBlogsData,
    })
  }

  render() {
    const {isLoading, blogList} = this.state

    return isLoading ? (
      // <div testid="loader">
      <div>
        <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
      </div>
    ) : (
      <ul className="blog-list-container">
        {blogList.map(blogListItem => (
          <BlogItem key={blogListItem.id} itemData={blogListItem} />
        ))}
      </ul>
    )
  }
}
