import React from 'react'
import './App.css'
import PagesOne from './components/organism/pages/1/pagesOne'
import PagesTwo from './components/organism/pages/2/pagesTwo'
import PagesThree from './components/organism/pages/3/pagesThree'
import PagesFive from './components/organism/pages/5/pagesFive'
import PagesSix from './components/organism/pages/6/pagesSix'

function App() {
  return (
    <>  
    <div className='bgBlack'>
       <PagesOne/>
       <div>
       <PagesTwo/>
       </div>
       <PagesThree/>
       <PagesFive/>
       <PagesSix/>
    </div>
    </>
  )
}

export default App
