import {fireEvent, render, RenderResult, screen} from "@testing-library/react";
import {Input} from "@/components/Input/index";

// describe 로 처리를 모은다. "Input" 이라고 그룹명 지칭
describe("Input", () => {
    let renderResult: RenderResult;
    const username = "Username";

    // 각 테스트 케이스 전에 컴포넌트를 화면에 그리고, renderResultdp 설정한다.
    beforeEach(() => {
        renderResult = render(<Input id="username" label={username}/>)
    });

    // 테스트 케이스 실행 후에 화면에 그려진 컴포넌트를 릴리스한다
    afterEach(() => {
        renderResult.unmount();
    });

    // 실제 테스트
    it("렌더시 인풋 요소는 비어있다.", () => {
        // 화면에 그려지지 않은 DOM으로부터 지정한 이름의 라벨에 대응하는 input을 얻는다.
        const inputNode = screen.getByLabelText(username as Parameters<string>) as HTMLInputElement;

        // input 요소의 표시가 비어있는지 확인한다.
        expect(inputNode).toHaveValue("");
    })

    it("인풋 요소에 문자를 입력한다.", () => {
        const inputText = "Test Input Text";
        const inputNode = screen.getByLabelText(username as Parameters<string>) as HTMLInputElement;

        // fireEvent를 사용해, input 요소의 onChange 이벤트를 트리거한다
        fireEvent.change(inputNode, {target: {value: inputText}});

        // input 요소에 입력한 텍스트가 표시되는지 확인한다.
        expect(inputNode).toHaveValue(inputText);
    });

    // 버튼이 클릭되면 입력 텍스트가 클리어되는지 확인하는 테스트
    it("커튼 클릭시 문자열이 지워진다.", () => {
        const inputText = "Test Input Text";
        const inputNode = screen.getByLabelText(username as Parameters<string>) as HTMLInputElement;
        fireEvent.change(inputNode, {target: {value: inputText}});

        const buttonNode = screen.getByRole("button", {name: "Reset"}) as HTMLButtonElement;
        fireEvent.click(buttonNode);

        expect(inputNode).toHaveValue("");
    });
})