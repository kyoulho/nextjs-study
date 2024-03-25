import Head from "next/head";
import {GetStaticProps, NextPage} from "next";

const EnvSample: NextPage = () => {
    // 서버 사이드에서 화면을 그릴 때는 'test1'이 표시되고, 클라이언트 사이드에서 다시 그릴 때는 undefined가 표시된다.
    console.log('process.env.TEST', process.env.TEST);
    // 'test2'가 표시된다.
    console.log('process.env.NEXT_PUBLIC_TEST', process.env.NEXT_PUBLIC_TEST);

    return (
        <div>
            <Head>
                <title>Create Next App</title>
                <link rel={"icon"} href={"/favicon.ico"}/>
            </Head>
            <main>
                {/* 서버 사이드에서 화면을 그릴 때는 'test1'이라고 표시되며,
                클라이언트 사이드에서 다시 그릴 때는 아무것도 표시되지 않는다. */}
                <p>{process.env.TEST}</p>
                <p>{process.env.NEXT_PUBLIC_TEST}</p>
            </main>
        </div>
    );
};

// getStaticProps 는 항상 서버 사이드에서 실행되므로, 모든 환경 변수를 참조할 수 있다.
export const getStaticProps: GetStaticProps = async () => {
    console.log('process.env.TEST', process.env.TEST);
    console.log('process.env.NEXT_PUBLIC_TEST', process.env.NEXT_PUBLIC_TEST);
    return {
        props: {},
    }
};

export default EnvSample;