import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'
function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0)
  const handleReadingTime = time => {
    const newReadingTime = readingTime + time;
    setReadingTime(newReadingTime)
  }
  const handleAddToBookmark = blog => {
    const newBookmark = [...bookmarks, blog]
    setBookmarks(newBookmark)
  }
  return (
    <>
      <Header></Header>
      <main className='md:flex gap-5 max-w-6xl mx-5 md:mx-5 lg:mx-auto my-4'>
      <Blogs handleReadingTime={handleReadingTime} handleAddToBookmark={handleAddToBookmark}></Blogs>
      <Bookmarks readingTime={readingTime} bookmarks={bookmarks}></Bookmarks>
      </main>
    </>
  )
}

export default App
