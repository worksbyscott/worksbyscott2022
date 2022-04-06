
const RE = /{([\d,-]+)}/;

export const calculateLinesToHighlight = (metastring: string | null) => {
    if (!metastring || !RE.test(metastring)) {
        return () => false;
    } else {
        const lineNumbers = RE.exec(metastring)![1]
            .split(',')
            .map((v) => v.split('-').map((val) => parseInt(val, 10)));
        return (index: number) => {
            const lineNumber = index + 1;
            const inRange = lineNumbers.some(([start, end]) =>
                end ? lineNumber >= start && lineNumber <= end : lineNumber === start
            );
            return inRange;
        };
    }
};

const RETitle = /title=[A-Za-z](.+)/;

export const hasTitle = (metastring: string | null) => {
    if (!metastring || !RETitle.test(metastring)) {
        return '';
    } else {
        return RETitle.exec(metastring)![0].split('title=')[1];
    }
};