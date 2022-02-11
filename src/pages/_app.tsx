import { AppProps } from "next/app";
import { PokemonProvider } from "../context/pokemonData";
import { TypesProvider } from "../context/filterType";

import GlobalStyle from "../styles/global";
const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <TypesProvider>
      <PokemonProvider>
        <Component {...pageProps} />
        <GlobalStyle />
      </PokemonProvider>
    </TypesProvider>
  );
};

export default MyApp;
