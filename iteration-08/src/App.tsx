import type { FC } from 'react';

// Use this import to load the cart content
import cart from 'assets/cart.json';

// Use this import to load the list of users who can receive a gift from you
import userlist from 'assets/gift_recipients.json';

export type AppProps = {};

export const App: FC<AppProps> = () => {
  return (
    <div>
      <img
        src="https://media.tenor.com/ZFPKlHHJ-FMAAAAd/internet-wow.gif"
        alt="Wow"
        width={1024}
      />
    </div>
  );
};
