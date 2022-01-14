import styled from "styled-components";
import { SearchInput } from "../molecules/SearchInput";

const users = [...Array(10).keys()].map((val) => {
  return {
    id: val,
    name: `わんこ${val}`,
    image: "https://source.unsplash.com/G8cB8hY3yvU",
    email: "123456@com",
    phone: "000-000-0987",
    company: {
      name: "テスト株式会社"
    },
    website: "https://google.com"
  };
});

const user = {
  name: "わんこ",
  image: "https://source.unsplash.com/G8cB8hY3yvU",
  email: "123456@com",
  phone: "000-000-0987",
  company: {
    name: "テスト株式会社"
  },
  website: "https://google.com"
};

export const Users = () => {
  return (
    <SContainaer>
      <h2>ユーザー一覧</h2>
      <SearchInput />
    </SContainaer>
  );
};

const SContainaer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
`;
