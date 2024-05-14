import {StyledButton} from "@/components/StyledButton";
import {action} from "@storybook/addon-actions";
import React, {useState} from "react";
import {Meta} from "@storybook/react";
import MDXDocument from "./StyledButton.mdx";

// 파일 안의 스토리 설정(메타데이터 객체)
export default {
    // 그룹명
    title: 'StyledButton',
    // 자동으로 문서 생성
    //tags: ["autodocs"],
    parameters: {
        docs:{
            // 도큐먼트용 mdx 컴포넌트를 지정
            page: MDXDocument,
        }
    },
    // 사용하는 컴포넌트
    component: StyledButton,
    // 매개변수를 스토리북에서 변경할 수 있도록 추가
    argTypes: {
        variant: {
            control: {type: "radio"},
            options: ["primary", "success", "transparent"],
        },
        children: {
            control: {type: "text"}
        }
    }
} as Meta<typeof StyledButton>;

// increment 라는 이름으로 action을 출력하기 위한 함수를 만든다.
const incrementAction = action('increment');

// 함수 컴포넌트로 선언하는 방식
export const Primary = (props) => {
    const [count, setCount] = useState(0);
    const onClick = (e: React.MouseEvent) => {
        // 현재 카운트를 전달하고 Action을 호출한다.
        incrementAction(e, count);
        setCount((c) => c + 1);
    };

    return (
        <StyledButton {...props} variant={"primary"} onClick={onClick}>
            Count: {count}
        </StyledButton>
    );
};

// 객체 리터럴로 선언하는 방식
export const Success = {
    args: {
        variant: "success",
        children: "Success",
    }
};

export const Transparent = {
    args: {
        variant: "transparent",
        children: "Transparent",
    }
};

