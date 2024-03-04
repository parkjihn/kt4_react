import React from 'react';
import { Link } from 'react-router-dom';

function NotFoundPage() {
  return (
    <div>
      <h1>Page Not Found</h1>
      <Link to="/products">Go to Products</Link>
    </div>
  );
}

export default NotFoundPage;