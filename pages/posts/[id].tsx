import {GetStaticPaths, GetStaticProps, NextPage} from "next";
import {useRouter} from "next/router";
import Head from "next/head";
import {ParsedUrlQuery} from "querystring";

type PostProps = {
    id: string
}

const Post: NextPage<PostProps> = (props: PostProps) => {
    const {id} = props;
    /*
        함수 컴포넌트 안에서 라우팅 정보에 접근하기 위한 훅
     */
    const router = useRouter();

    if (router.isFallback) {
        // 폴백 페이지용 표시를 반환한다.
        return <div>Loading...</div>;
    }

    return (
        <div>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href={"/favicon.ico"}/>
            </Head>
            <main><p>이 페이지는 정적 사이트 생성을 통해 빌드 시 생성된 페이지 입니다.</p>
                <p>{`/posts/${id}에 대응하는 페이지입니다.`}</p>
            </main>
        </div>
    );
};

/*
    getStaticProps 실행전에 호출되는 함수, 생성할 페이지의 경로 파라미터의 조합(paths,fallback)을 반환한다.
    paths는 경로 파라미터의 조합을 나타내며, 배열의 각 요소가 1개의 페이지에 대응한다.
    이 파일은 pages/posts/[id].tsx 이므로, 경로 파라미터로서 id의 값을 반환해야 한다.
 */
export const getStaticPaths: GetStaticPaths = async () => {
    // 각 페이지의 경로 파라미터를 모은 것
    const paths = [
        {params: {id: '1'}},
        {params: {id: '2'}},
        {params: {id: '3'}},
    ];
    /*
        fallback: false 는 paths에 주어지지 않은 경로에 대해서는 404 페이지를 표시한다.
        true로 지정하면, 최초 요청시 props 가 빈상태로 화면이 그려진다.
     */
    return {paths, fallback: true}
};

// 파라미터 타입을 정의
interface PostParams extends ParsedUrlQuery {
    id: string
}

// getStaticPaths 실행 후에 각 경로에 대해 getStaticProps가 실행된다.
export const getStaticProps: GetStaticProps<PostProps, PostParams> = async ({params}) => {
    return {
        props: {
            id: params!['id'],
        }
    };
};

export default Post