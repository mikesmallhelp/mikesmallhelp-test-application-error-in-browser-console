import React, { useState, useEffect } from 'react';
import PageTemplate from '../../components/PageTemplate';

const IndexComponent = () => {
  const [loading, setLoading] = useState(true);
  
  const PageContent = (
      <div>Hello!</div>
  );

  useEffect(() => {
    console.error("Hello! Something wrong!");
  }, []);

  return (
    <>
      <PageTemplate title={'Test page - error-in-browser-console'} content={PageContent} loading={loading} setLoading={setLoading} />
    </>
  );
};

export default IndexComponent;
