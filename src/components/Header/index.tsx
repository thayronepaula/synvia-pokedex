import Image from "next/image";
import { Header, Wrapper, Contain, Title } from "./styles";

import Pokeball from "../../../public/pokeball.svg";
import SynviaAvatar from "../../../public/synvia-A.svg";
import SignOutIcon from "../../../public/sign-out-icon.svg";

const index = () => {
  return (
    <Header>
      <Wrapper>
        <Contain>
          <Image width={50} height={50} src={Pokeball.src} alt="Logo Pokedex" />
          <Title>Pokédex</Title>
        </Contain>
        <Contain>
          <Image
            width={40}
            height={40}
            src={SynviaAvatar.src}
            alt="Synvia Avatar"
          />
          <Image
            width={18}
            height={14}
            src={SignOutIcon.src}
            alt="Synvia Avatar"
          />
        </Contain>
      </Wrapper>
    </Header>
  );
};

export default index;
