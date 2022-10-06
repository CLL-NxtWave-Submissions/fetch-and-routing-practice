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
    const blogsData = await blogsDataAPIResponse

    this.setState({
      isLoading: false,
      blogList: blogsData,
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
