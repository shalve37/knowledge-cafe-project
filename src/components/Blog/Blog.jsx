import PropTypes from 'prop-types';
import { BsBookmark } from 'react-icons/bs';
const Blog = ({blog, handleAddToBookmark, handleReadingTime}) => {
    const {title, cover_image, author_name, author_image,minutes_to_read, posted_date, hashtags} = blog
    return (
        <div>
            <img className='rounded-lg w-full' src={cover_image} alt="" />
            <div className='flex justify-between items-center my-5'>
                <div className='flex items-center gap-3'>
                    <img className='w-[60px] h-[60px] rounded-full ' src={author_image} alt="" />
                    <div>       
                        <h3 className='text-lg md:text-xl lg:text-xl font-bold'>{author_name}</h3>
                        <p className='font-semibold text-[#11111199] '>{posted_date}</p>
                    </div>
                </div>
                <div className='flex items-center'>
                    <span className='md:text-xl lg:text-xl font-medium text-[#11111199]'>{minutes_to_read} min read</span>
                    <button onClick={() => handleAddToBookmark(blog)} className='ml-2 text-[#11111199]'><BsBookmark></BsBookmark></button>
                </div>

            </div>
            <h2 className='text-2xl md:text-3xl lg:text-4xl font-bold'>{title} </h2>
            <p className='md:text-xl lg:text-xl font-medium text-[#11111199] my-4'>
                {
                    hashtags.map((hashtag, idx) => <span key={idx}> <a href="">{hashtag}</a></span>)
                }
            </p>
            <p className='my-5'>
            <button onClick={() => handleReadingTime(parseFloat(minutes_to_read))} className='text-[#6047EC] text-xl font-semibold underline'>Mark as read</button>
            </p>
            <hr className='my-10'/>
        </div>
    );
};

Blog.propTypes = {
    blog : PropTypes.object.isRequired,
    handleAddToBookmark : PropTypes.func,
    handleReadingTime : PropTypes.func,
    minutes_to_read : PropTypes.number
}

export default Blog;