import React from 'react';
import useTitle from '../../utilities/useTitle';

const Blog = () => {
    // Dynamic Title
    useTitle('Blogs || Dent Care');
    
    return (
        <div>
            <h2>Blog</h2>
        </div>
    );
};

export default Blog;