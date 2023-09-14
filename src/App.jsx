import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Header from './components/Header/Header'
import Bookmarks from './components/Bookmarks/Bookmarks'
function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0)
  const handleReadingTime = (id, time) => {
    const newReadingTime = readingTime + time;
    setReadingTime(newReadingTime)
    const remainingBookmarks = bookmarks.filter(bookmark => bookmark.id !== id)
    setBookmarks(remainingBookmarks)
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
