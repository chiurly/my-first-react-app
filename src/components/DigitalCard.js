import americanPsycho from '../images/american-psycho.png'
import './DigitalCard.css'

export default function DigitalCard() {
  return (
    <div className="digital-card">
      <h1>Digital business card</h1>
      <div className="card-picture" background-image={americanPsycho}></div>
      <div className="card-info">
        <h2 className="name">Ainis Čiurlys</h2>
        <h2 className="occupation">Software Engineer</h2>
        <div className="card-buttons">
          <a className="button" href="mailto:chiurly@gmail.com">Email</a>
          <a className="button" href="https://www.linkedin.com/in/chiurly/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
        <h2>About</h2>
        <p>
          The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog.
          The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog.
        </p>
      </div>
    </div>
  )
}
