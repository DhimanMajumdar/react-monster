import React from 'react';

const Greeting = () => {
  const hour = new Date().getHours();

  return (
    <div>
      {hour >= 5 && hour < 12 && <h1>Good Morning ☀️</h1>}
      {hour >= 12 && hour < 17 && <h1>Good Afternoon 🌤️</h1>}
      {hour >= 17 && hour < 21 && <h1>Good Evening 🌆</h1>}
      {(hour >= 21 || hour < 5) && <h1>Good Night 🌙</h1>}
    </div>
  );
};

export default Greeting;
