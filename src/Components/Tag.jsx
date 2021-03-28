import './Tag.css'

function Tag({ text }) {
  return (
    <div className="tag-container p-2">
      <span className="has-text-info is-size-5">{text}</span>
    </div>
  )
}

export default Tag
