import styled from "styled-components";
import {NextPage} from "next";

const Text = styled.p`
    color: #1e90ff;
    font-size: 2em;
`;

// 원래 p 요소용이었던 Text 컴포넌트를 a 요소에서 사용하는 예
const Page: NextPage = () => {
    return (
        <div>
            <Text>World</Text>
            <Text as={"a"} href={"/"}>
                Go to index
            </Text>
        </div>
    );
};

export default Page;