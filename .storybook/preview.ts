import type {Preview} from "@storybook/react";

const preview: Preview = {
    parameters: {
        // 컴포넌트를 표시하는 환경의 뷰포트를 추가한다.
        viewport: {
            viewports: {
                iphonex:{
                    name: "iPhone X",
                    styles:{
                        width: "375px",
                        height: "812px",
                    }
                }
            },
        },
        // 컴포넌트를 표시하는 배경 색상을 추가한다.
        backgrounds: {
            values: [
                {
                    name: "gray",
                    value: "#808080"
                }
            ],
        },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },
};

export default preview;
