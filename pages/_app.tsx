import {AppProps} from "next/app";
import {ThemeProvider} from "styled-components";
import {theme} from "@/_theme";

const MyApp = ({Component, pageProps}: AppProps) => {
    // styled-components 에서 테마를 사용하기 위해 ThemeProvider를 둔다.
    return (
        <ThemeProvider theme={theme}>
            <Component {...pageProps}/>
        </ThemeProvider>
    );
};

export default MyApp;

