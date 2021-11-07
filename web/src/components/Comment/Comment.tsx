const Comment = ({ comment }) => {
  return (
    <div className="bg-gray-400 rounded-sm text-black-600">
      <h2 className="text-lg mb-1">{comment.name}</h2>
      <time>{comment.createdAt}</time>
      <p>{comment.body}</p>
    </div>
  )
}

export default Comment
