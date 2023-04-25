import React from 'react';
import ReactDOM from 'react-dom/client';

/**
 * These style sheets are imported here. It means, you can use the classes
 * defined in these style sheets in your components without creating other
 * style sheets.
 */
import './styles/index.css';
import './styles/normalize.css';

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        {/* 
            Here will be the root component of your application.

            Happy coding!
        */}
    </React.StrictMode>
);
