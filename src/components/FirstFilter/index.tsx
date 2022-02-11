import styled from "styled-components";
import Search from "../Search";
import Select from "../Select";

const Section = styled.section`
  display: flex;
  justify-content: space-between;
  gap: 20px;

  margin: 48px 0 66px;
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
