import styled, {css} from "styled-components";

const variants = {
    primary: {
        color: '#ffffff',
        backgroundColor: '#1d3461',
        border: 'none',
    },
    success: {
        color: '#ffffff',
        backgroundColor: '#5AB203',
        border: 'none',
    },
    transparent: {
        color: '#111111',
        backgroundColor: 'transparent',
        border: '1px solid black',
    },
} as const; // 객체를 불변으로 만들어 속성에 다른 값이 할당 될 수 없게 한다.

type StyledButtonProps = {
    // variant = "primary" | "success" | "transparent"
    variant: keyof typeof variants
};

export const StyledButton = styled.button<StyledButtonProps>`
  ${({variant}) => {
    // variant에 주어진 키를 기반으로, 대응할 스타일을 얻는다.
    const style = variants[variant];

    // css를 사용해, 여러 스타일을 반환한다.
    return css`
      color: ${style.color};
      background-color: ${style.backgroundColor};
      border: ${style.border};
    `;
  }}

  border-radius: 12px;
  font-size: 14px;
  height: 38px;
  line-height: 22px;
  letter-spacing: 0;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`;