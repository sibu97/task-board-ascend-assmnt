import React from 'react';
import { MultipleContainers} from '@dnd-kit';

function App() {
  return (
    <div style={{ textAlign: 'center' }}>
    
  <MultipleContainers
    containerStyle={{
      maxHeight: '80vh',
    }}
    itemCount={15}
    scrollable
  />

    </div>
  );
}

export default App;
