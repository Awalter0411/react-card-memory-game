import appStyle from './assets/style/app.module.css'
import Card from './Card'

const cards = [
  {
    src: "../src/assets/image/android.png"
  },
  {
    src: "../src/assets/image/angular.png"
  },
  {
    src: "../src/assets/image/bootstrap.png"
  },
  {
    src: "../src/assets/image/docker.png"
  },
  {
    src: "../src/assets/image/react.png"
  },
  {
    src: "../src/assets/image/telegram.png"
  },
  {
    src: "../src/assets/image/tiktok.png"
  },
  {
    src: "../src/assets/image/vuejs.png"
  },
]

function App() {
  return (
    <div className={appStyle.container}>
      <div className={appStyle.title}>
        card-memory-game
      </div>
      <div className={appStyle.game}>
        <Card background={cards[0].src} id={0} />
        <Card background={cards[1].src} id={1} />
        <Card background={cards[2].src} id={2} />
        <Card background={cards[3].src} id={3} />
        <Card background={cards[4].src} id={4} />
        <Card background={cards[4].src} id={4} />
        <Card background={cards[3].src} id={3} />
        <Card background={cards[2].src} id={2} />
        <Card background={cards[1].src} id={1} />
        <Card background={cards[0].src} id={0} />
        <Card background={cards[5].src} id={5} />
        <Card background={cards[6].src} id={6} />
        <Card background={cards[6].src} id={6} />
        <Card background={cards[7].src} id={7} />
        <Card background={cards[7].src} id={7} />
        <Card background={cards[5].src} id={5} />
      </div>
    </div>
  )
}

export default App
