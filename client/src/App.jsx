import { Background } from "./components/background"
import { Banner } from "./components/banner"
import { FlipCard } from "./components/cards"

export default function App() {
  
  
  return (
    <div className="flex flex-col items-center justify-end w-screen h-auto min-h-screen">
      <Background />
      <Banner >
        <h1 className="mobile:text-lg desktop:text-2xl tracking-[.3em] pb-8">
          WE'RE LAUNCHING SOON
        </h1>
        <div className="mobile:grid mobile:grid-cols-2 mobile:gap-4 sm:flex sm:flex-row ">
          <FlipCard variant="days"/>
          <FlipCard variant="hours"/>
          <FlipCard variant="minutes"/>
          <FlipCard variant="seconds"/>
        </div>
      </Banner>
    </div>
  )
}