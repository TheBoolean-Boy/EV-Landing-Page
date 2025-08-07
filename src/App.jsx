import { useEffect, useState } from 'react';
import './App.css'
import Background from './Components/Background/Background';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';


function App(){
  let heroData = [
    {text1: "Dive into", text2: "what you love"},
    {text1: "Indulge", text2: "your passions"},
    {text1: "Give in to", text2: "your passions"}
  ]
  const [heroCount, setHeroCount] = useState(2);
  const [playStatus, setPlayStatus] = useState(false);

  useEffect ( () => {
    setInterval(() => {
      setHeroCount ( (heroCount) => {
        return heroCount===2?0: heroCount+1
      })
    }, 3000);
  }, [])

  return(
    <div>
    <Background playStatus = {playStatus} heroCount= {heroCount}/>
    <Navbar />
    <Hero 
      heroCount = {heroCount}
      setHeroCount = {setHeroCount}
      heroData = {heroData[heroCount]}
      playStatus = {playStatus}
      setPlayStatus = {setPlayStatus}
    />
    </div>
  )
}


export default App;