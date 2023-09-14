import ProptTypes from 'prop-types'
const Bookmark = ({bookmark}) => {
    const {title} = bookmark
    return (
        <div className='bg-white mb-5 mx-8 rounded-lg'>
            <h2 className='text-lg font-semibold p-5'>{title}</h2>
        </div>
    );
};

Bookmark.propTypes = {
    bookmark : ProptTypes.object.isRequired
}

export default Bookmark;