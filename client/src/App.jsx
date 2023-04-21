import { Background } from "./components/background"
import { Banner } from "./components/banner"
import { FlipCard } from "./components/cards"

export default function App() {
  
  
  return (
    <div className="flex flex-col items-center justify-end w-screen h-screen">
      <Background />
      <Banner >
        <h1 className="mobile:text-lg desktop:text-2xl tracking-[.3em] pb-8">
          WE'RE LAUNCHING SOON
        </h1>
        <div className="flex mobile:flex-row desktop:flex-row">
          <FlipCard variant="days"/>
          <FlipCard variant="hours"/>
          <FlipCard variant="minutes"/>
          <FlipCard variant="seconds"/>
        </div>
      </Banner>
    </div>
  )
}