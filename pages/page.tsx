import {useRouter} from "next/router";
import {useEffect} from "react";

const Page = () => {
    const router = useRouter();

    useEffect(() => {
        // 라우터를 이용해서 리다이렉션 시킬 수 있다.
        router.push("/userouter");

        /*
         router.push({
             pathname: "/userouter",
             query: {keyword: "hello"}
         });
         */
    });

    // 호출하면 페이지가 리로드 된다.
    router.reload();

    // 호출하면 이전 페이지로 돌아간다.
    router.back();

    // 이동 시작 시의 이벤트를 구독한다.
    router.events.on("routeChangeStart", (url, {shallow}) => {
        //url에는 이동 대상지의 경로를 부여할 수 있다.
        //shallow는 얕은 라우팅(경로만 치환해서 이동)의 경우에는 true가 된다.
    });

    // 이동 완료 시의 이벤트를 구독한다.
    router.events.on("routeChangeComplete", (url, {shallow}) => {
        //url에는 이동 대상지의 경로를 부여할 수 있다.
        //shallow는 얕은 라우팅(경로만 치환해서 이동)의 경우에는 true가 된다.
    });

    return <span>{router.pathname}</span>
}

export default Page