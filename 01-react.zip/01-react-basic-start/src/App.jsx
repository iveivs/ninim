import { useState } from "react"
import DifferencesSection from "./components/DifferencesSection"
import EffectSection from "./components/EffectSection"
import FeedBackSection from "./components/FeedBackSection"
import Header from "./components/Header/Header"
import IntroSection from "./components/IntroSection"
import TabsSection from "./components/TabsSection"
import TeachingSection from "./components/TeachingSection"

export default function App() {
  const [tab, setTab] = useState('effect')
  return (
    <>
      <Header  />
      <main>
        < IntroSection />
        {/* <TeachingSection /> */}

        <TabsSection active={tab} onChange={(current) => setTab(current)} />
        {tab === 'main' && (
          <>
            <TeachingSection />
            <DifferencesSection />
          </>
        )}

        {tab === 'feedback' && <FeedBackSection  />}
        {tab === 'effect' && <EffectSection  />}

      </main>
    </>
  )
}


