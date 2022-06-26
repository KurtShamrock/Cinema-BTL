import React from 'react';
import Banner from '../components/Banner';
import MovieSelection from '../components/MovieSelection';
import Event from '../components/Event';
import SlideHome from '../components/slideHome/slideHome';

function Main() {
  return (
    <main className="flex-shrink-0">
      <div className="container">
        <SlideHome />
        <div style={{ height: '766px', width: '100px' }}></div>
        <Banner />
        <MovieSelection />
        <Event />
      </div>
    </main>
  );
}

export default Main;
