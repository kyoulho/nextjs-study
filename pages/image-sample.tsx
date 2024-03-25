import {NextPage} from "next";
import Image from "next/image";
// 이미지 파일을 임포트한다
import BibleImage from "../public/images/bible.jpeg";

const ImageSample: NextPage<void> = () => {
    return (
        <div>
            <h1>이미지 표시 비교</h1>
            <p>img 태그로 표시한 경우</p>
            {/* 일반적인 img 태그를 사용해서 이미지를 표시한다 */}
            <img src="/images/bible.jpeg" alt={"bible"}/>
            <p>Image 컴포넌트로 표시한 경우</p>
            <Image src={BibleImage} alt={"bible"}/>
            <p>Image로 표시한 경우는 사전에 그리기 영역이 확보됩니다.</p>
        </div>
    );
}

export default ImageSample;