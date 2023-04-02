import './AppInfo.css'

function getGreeting() {
  const date = new Date()
  const hours = date.getHours()

  if (hours >= 3 && hours < 12) {
    return "morning"
  } else if (hours < 6) {
    return "afternoon"
  } else {
    return "evening"
  }
}

export default function AppInfo() {
  return (
    <div className="app-info">
      <h1>About the app</h1>
      <p>
        Good {getGreeting()}, I'm Ainis. Welcome to my humble React app.
      </p>
      <p>
        At the time of writing this, the date is <time dateTime="2023-03-31">2023-03-31</time>.
        It's a good day to finally start learning React.
        I'm following what seems to be a great <a className="link" href="https://youtu.be/bMknfKXIFA8" target="_blank" rel="noopener noreferrer">React course by Bob Ziroll</a>.
        There's a lot to learn!
      </p>
    </div>
  )
}
