import './Idea.css'

export default function Idea(props) {
  return (
    <section className="idea-card" data-id={props.id}>
      <h2>{props.title}</h2>
      <p>{props.desc}</p>
    </section>
  )
}