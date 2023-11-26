import Idea from '../Idea/Idea'
import './Ideas.css'

export default function Ideas({ allIdeas }) { 
  const ideaCards = allIdeas.map((idea) => {
    return <Idea id={idea.id} title={idea.title} desc={idea.desc} />
  })

  return (
    <>
      <h2>Ideas</h2>
        <section className="ideas-container">
          {ideaCards}
        </section>
    </>
  )
}