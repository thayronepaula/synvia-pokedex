import styled from "styled-components";
import Search from "../Search";
import Select from "../Select";

const Section = styled.section`
  display: flex;
  justify-content: space-between;
  gap: 20px;

  margin: 48px 0 66px;

  @media (max-width: 1210px) {
    padding-right: 20px;
    padding-left: 20px;
  }

  @media (max-width: 640px) {
    flex-direction: column-reverse;

    margin: 32px 0 45px;
  }
`;

const index = () => {
  return (
    <Section>
      <Search />
      <Select />
    </Section>
  );
};

export default index;
