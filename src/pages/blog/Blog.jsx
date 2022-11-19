import React from 'react';
import BlogList from './BlogList';
import { Routes, Route } from 'react-router-dom';
import ExtensionBlog from './components/ExtensionBlog';

const Blog = () => {
  return (
    <Routes>
      <Route index element={<BlogList />} />
      <Route path="/blog-page" element={<ExtensionBlog />} />
    </Routes>
  );
};

export default Blog;
