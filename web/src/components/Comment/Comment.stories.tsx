import Comment from './Comment'
import { standard } from './Comment.mock'

export const generated = () => {
  return <Comment comment={standard().comment} />
}

export default { title: 'Components/Comment' }
