import {AppProps} from "next/app";
import {ThemeProvider} from "styled-components";
import {theme} from "@/_theme";

/*
    모든 페이지에서 초기화 시에 사용되는 컴포넌트이다.
    자세한 내용은 https://nextjs.org/docs/advanced-features/custom-app
*/
const MyApp = ({Component, pageProps}: AppProps) => {
    // styled-components 에서 테마를 사용하기 위해 ThemeProvider를 둔다.
    return (
        <ThemeProvider theme={theme}>
            <Component {...pageProps}/>
        </ThemeProvider>
    );
};

export default MyApp;

