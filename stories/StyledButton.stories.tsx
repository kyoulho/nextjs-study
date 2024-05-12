// 파일 안의 스토리 설정(메타데이터 객체)
import {StyledButton} from "@/components/StyledButton";

export default {
    // 그룹명
    title: 'StyledButton',
    // 사용하는 컴포넌트
    component: StyledButton,
};

export const Primary = (props) => {
    return (
        <StyledButton {...props} variant={"primary"}>
            Primary
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
