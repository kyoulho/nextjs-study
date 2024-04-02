import styled from "styled-components";
import {NextPage} from "next";

const Text = styled.p`
color: blue;
font-weight: bold;
`;

// 스타일을 상속한다.
const BorderedText = styled(Text)`
padding: 8px 16px;
border: 3px solid blue;
border-radius: 8px;
`;

const Page: NextPage = () => {
    return (
        <div>
            <Text>Hello</Text>
            <BorderedText>World</BorderedText>
        </div>
    );
};

export default Page