import {useRouter} from "next/router";
import {useEffect} from "react";

const Page = () => {
    const router = useRouter();

    useEffect(() => {
        // 라우터를 이용해서 리다이렉션 시킬 수 있다.
        router.push("/userouter");
    });

    return <span>{router.pathname}</span>
}

export default Page