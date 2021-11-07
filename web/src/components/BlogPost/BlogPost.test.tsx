import { render } from '@redwoodjs/testing/web'

import BlogPost from './BlogPost'

describe('BlogPost', () => {
  it('renders successfully', () => {
    expect(() => {
      render(
        <BlogPost
          post={{
            id: 1,
            title: 'some',
            body: 'content',
            createdAt: new Date().toISOString(),
          }}
        />
      )
    }).not.toThrow()
  })
})
