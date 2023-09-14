import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({bookmarks, readingTime}) => {
    return (
        <div className=' w-full md:w-1/3 lg:w-1/3 '>
            <div className='bg-[#6047ec1a] rounded-lg mb-6'>
                <h4 className='text-2xl font-bold text-[#6047EC] text-center py-5 px-12 '>Spent time on read :{readingTime}</h4>
            </div>
             <div className='bg-[#1111110d] rounded-lg h-fit pb-4'>
                <h2 className='text-2xl font-bold py-4 md:py-5 lg:py-8 lg:pl-8 text-center md:text-center lg:text-left'>Bookmark Blogs: {bookmarks.length}</h2>
                {
                    bookmarks.map((bookmark, idx) => <Bookmark key={idx} bookmark={bookmark}></Bookmark>)
                }
            </div>
        </div>
       
    );
};

Bookmarks.propTypes = {
    bookmarks : PropTypes.array,
    readingTime : PropTypes.number
}

export default Bookmarks;