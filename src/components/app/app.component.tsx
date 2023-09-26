import { Toaster } from 'react-hot-toast';

import { SearchParams } from '../search-params';

type AppProps = React.HTMLProps<HTMLDivElement>;

export const App = (props: AppProps) => {
  return (
    <div {...props}>
      <h1>Adopt Me!</h1>

      <SearchParams />

      <Toaster />
    </div>
  );
};
