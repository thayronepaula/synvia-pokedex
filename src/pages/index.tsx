import styled from "styled-components";
import Header from '../components/Header'
const Title = styled.h1`
  color: red;
  font-size: 50px;
`;

export default function Home() {
  return (
    <div>
      <Header />
    </div>
  );
}
