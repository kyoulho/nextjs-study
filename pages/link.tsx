import Link, {LinkProps} from "next/link";
import styled from "styled-components";
import React from "react";
import {NextPage} from "next";

type BaseLinkProps = React.PropsWithChildren<LinkProps> & {
    className?: string;
    children: React.ReactNode
}

/*
    Next.js 의 링크에 스타일을 적용하기 위한 헬퍼 컴포넌트.
    이 컴포넌트를 스타일드 컴포넌트에서 사용하면,
    정의한 스타일에 대응하는 className이 props로서 전달된다.
 */
const BaseLink = (props: BaseLinkProps) => {
    // {href: '/', children: 'Go to Index', className: 'sc-86a70f75-0 dmVFAC'}
    console.log(props);
    const {className, children, ...rest} = props;
    return (
        <Link {...rest}>
            <a className={className}>{children}</a>
        </Link>
    );
};

const StyledLink = styled(BaseLink)`
  color: #1e90ff;
  font-size: 2em;
`;

const Page: NextPage = () => {
    return (
        <div>
            <StyledLink href={"/"}>Go to Index</StyledLink>
        </div>
    );
};

export default Page;