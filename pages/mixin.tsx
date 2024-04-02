// 빨간색 경계선을 표시하는 스타일
import styled, {css} from "styled-components";
import {NextPage} from "next";

const redBox = css`
padding: 0.25em 1em;
border: 3px solid #ff0000;
border-radius: 10px;
`

// 파란색 문자를 표시하는 스타일
const font = css`
color: #1e90ff;
font-size: 2em;
`;

// 빨간색 경계선과 파란색 문자 스타일을 각각 적용, 배경이 투명한 버튼 컴포넌트
const Button = styled.button`
background:transparent;
margin: 1em;
cursor: pointer;
${redBox}
${font}
`;

// 파란색 문자 스타일을 상속하면서, 굵은 텍스트를 표시하는 컴포넌트
const Text = styled.p`
font-weight: bold;
${font}
`;

const Page: NextPage = () => {
    return (
        <div>
            <Button>Hello</Button>
            <Text>World</Text>
        </div>
    )
};

export default Page