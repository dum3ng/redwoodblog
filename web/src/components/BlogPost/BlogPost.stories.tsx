import BlogPost from './BlogPost'

export const generated = () => {
  return (
    <BlogPost
      post={{
        id: 1,
        title: 'generated',
        body: `Adipisicing anim sint sit magna officia magna eiusmod. Minim adipisicing ullamco nostrud excepteur est magna ipsum nisi aliqua labore labore ea elit voluptate. Est qui qui pariatur esse velit id dolor amet voluptate occaecat aliquip. Magna laboris in sint velit commodo magna id ut enim. Pariatur in laboris commodo in excepteur incididunt. Fugiat aute reprehenderit aute nulla duis amet incididunt adipisicing duis in magna aliqua.
  `,
      }}
    />
  )
}

export const summaryPost = () => {
  return (
    <BlogPost
      post={{
        id: 2,
        title: 'summary',
        body: 'Fugiat duis labore aute culpa mollit ea. Quis reprehenderit exercitation nostrud pariatur commodo laborum sit ea ea dolore deserunt voluptate commodo commodo. Nostrud amet cillum dolore labore veniam. Sunt veniam adipisicing enim laborum ea. Consequat duis ullamco cillum duis velit.',
      }}
      summary
    />
  )
}

export default { title: 'Components/BlogPost' }
