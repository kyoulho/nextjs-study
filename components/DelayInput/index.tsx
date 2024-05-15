import {ChangeEvent, ChangeEventHandler, useCallback, useRef, useState} from "react";

type DelayButtonProps = {
    onChange: ChangeEventHandler<HTMLInputElement>
}

export const DelayInput = ({onChange}: DelayButtonProps) => {
    // 입력 중 여부를 유지하는 상태
    const [isTyping, setIsTyping] = useState(false);
    // input 에 표시하는 텍스트를 유지하는 상태
    const [inputValue, setInputValue] = useState("");
    // span 에 표시할 텍스트를 유지하는 상태
    const [viewValue, setViewValue] = useState("");
    // 타이머를 유지하는 Ref
    const timerRef = useRef<NodeJS.Timeout | null>(null);

    const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        // 입력 중인 플래그를 설정한다.
        setIsTyping(true);
        // input에 표시할 텍스트를 업데이트한다.
        setInputValue(e.target.value);

        // 만약 timerRef에 이전 설정한 타이머가 있다면 먼저 해제한다.
        if (timerRef.current !== null) {
            clearTimeout(timerRef.current!);
        }

        // 1초 후에 실행하는 타이머를 설정한다.
        timerRef.current = setTimeout(() => {
            timerRef.current = null;
            setIsTyping(false);
            setViewValue(e.target.value);
            onChange(e);
        }, 1000);

    }, [onChange]);

    // span 에 표시하는 텍스트
    const text = isTyping ? "입력 중..." : `입력한 텍스트: ${viewValue}`;

    return (
        <div>
            {/* data-testid 는 테스트 안에서만 사용하는 ID */}
            <input data-testid={"input-text"} value={inputValue} onChange={handleChange}/>
            <span data-testid={"display-text"}>{text}</span>
        </div>
    );
};