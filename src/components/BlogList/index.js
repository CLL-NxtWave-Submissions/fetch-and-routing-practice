import {Component} from 'react'
import BlogItem from '../BlogItem'
import './index.css'

const blogsApiUrl = 'https://apis.ccbp.in/blogs'

export default class BlogList extends Component {
  state = {
    blogList: [],
  }

  async componentDidMount() {
    const blogsDataAPIResponse = await fetch(blogsApiUrl)
    const blogsData = await blogsDataAPIResponse

    this.setState({
      blogList: blogsData,
    })
  }

  render() {
    const {blogList} = this.state

    return (
      <ul className="blog-list-container">
        {blogList.map(blogListItem => (
          <BlogItem itemData={blogListItem} />
        ))}
      </ul>
    )
  }
}
