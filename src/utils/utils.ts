
// 打字效果
export const typeEffect = (
    index: number,
    text: string,
    msg: { value: string },
): void => {
    if (index < text.length) {
        msg.value += text[index];
        index++;
        setTimeout(() => {
            typeEffect(index, text, msg);
        }, 100);
    }
};

