export default function SectionLabel({ index, children }) {
  return (
    <p className="section-label">
      {index != null && <span className="section-label__index">{index}</span>}
      <span className="section-label__text">{children}</span>
    </p>
  )
}
