import React from 'react';
import Head from 'next/head';

const MyComponent = () => {
  return (
    <>
      <Head>
        <title>My Awesome Page</title>
        <meta name="description" content="This is an awesome page made with Next.js and TypeScript" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/indion moovesh.online" />
      </Head>

      <div>
        <h1>Welcome to My Awesome Page</h1>
        <p>This page is using React and Next.js with TypeScript!</p>
      </div>
    </>
  );
};

export default MyComponent;
