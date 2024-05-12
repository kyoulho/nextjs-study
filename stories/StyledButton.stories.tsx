// 파일 안의 스토리 설정(메타데이터 객체)
import {StyledButton} from "@/components/StyledButton";
import {action} from "@storybook/addon-actions";
import React, {useState} from "react";

export default {
    // 그룹명
    title: 'StyledButton',
    // 사용하는 컴포넌트
    component: StyledButton,
};

// increment 라는 이름으로 action을 출력하기 위한 함수를 만든다.
const incrementAction = action('increment');

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

export const Success = (props) => {
    return (
        <StyledButton {...props} variant={"success"}>
            Primary
        </StyledButton>
    );
};
export const Transparent = (props) => {
    return (
        <StyledButton {...props} variant={"transparent"}>
            Primary
        </StyledButton>
    );
};
