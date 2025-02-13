import React from 'react';
import ReactDOM from 'react-dom/client';
import Confirmation from './Confirmation';


ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <Confirmation
              message="Hai"
              onConfirm={() => {
                console.log("COnfirm");
              }}
              onCancel={() => {
                console.log("Cancel");
              }}
            />
    </React.StrictMode>
  );
  