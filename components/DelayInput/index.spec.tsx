import {render, RenderResult, screen} from "@testing-library/react";
import {DelayInput} from "@/components/DelayInput/index";
import {fireEvent} from "@storybook/test";
import {act} from "react-dom/test-utils";

describe("DelayInput", () => {
    let renderResult: RenderResult;
    let handleChange: jest.Mock;

    beforeEach(() => {
        // 타이머를 jest 타이머로 대체한다.
        jest.useFakeTimers()
        // 목 함수를 작성한다.
        handleChange = jest.fn();
        renderResult = render(<DelayInput onChange={handleChange}/>);
    });

    afterEach(() => {
        renderResult.unmount();
        // 타이머를 원래의 타이머로 되돌린다
        jest.useFakeTimers();
    })

    it("span 요소의 텍스트는 비어있다", () => {
        const spanNode = screen.getByTestId("display-text") as HTMLSpanElement;
        expect(spanNode).toHaveTextContent("입력한 텍스트:");
    });

    it("입력 중에는 '입력 중...' 이 표시된다.", async () => {
        const inputText = "Test Input Text";
        const inputNode = screen.getByTestId("input-text") as HTMLInputElement;
        // React 상태 업데이트를 일으키는 코드는 act 안에 래핑하여 사용할 것을 추천
        await act(() => {
            fireEvent.change(inputNode, {target: {value: inputText}});
        });

        const spanNode = screen.getByTestId("display-text") as HTMLSpanElement;
        expect(spanNode).toHaveTextContent("입력 중...")
    });

    it("입력 1초 후에 입력한 텍스트가 표시된다", async () => {
        const inputText = "Test Input Text";
        const inputNode = screen.getByTestId("input-text") as HTMLInputElement;

        await act(() => {
            fireEvent.change(inputNode, {target: {value: inputText}});
            // 타이머에 설정된 timeout을 모두 실행한다.
            jest.runAllTimers();
        });

        const spanNode = screen.getByTestId("display-text") as HTMLSpanElement;
        expect(spanNode).toHaveTextContent(`입력한 텍스트: ${inputText}`)
    });

    it('입력 1초 후에 onChange가 호출된다', async () => {
        const inputText = "Test Input Text";
        const inputNode = screen.getByTestId("input-text") as HTMLInputElement;

        await act(() => {
            fireEvent.change(inputNode, {target: {value: inputText}});
            jest.runAllTimers();
        });

        expect(handleChange).toHaveBeenCalled();
    });

});