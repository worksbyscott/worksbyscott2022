import Card from '../card';
import { styled } from '../../theme.stitches';
import Highlight, { Prism, defaultProps } from 'prism-react-renderer';
import { CodeBlockProps, HighlightedCodeTextProps } from './type';
import { calculateLinesToHighlight, hasTitle } from './utils';
import theme from "prism-react-renderer/themes/nightOwl";

// @ts-ignore
(typeof global !== 'undefined' ? global : window).Prism = Prism;

/**
 * This imports the syntax highlighting style for the Swift language
 */
require('prismjs/components/prism-swift');

export const HighlightedCodeText = (props: HighlightedCodeTextProps) => {
  const { codeString, language, highlightLine } = props;

  return (
    <Highlight
      {...defaultProps}
      theme={theme}
      code={codeString}
      language={language}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <Pre className={className} style={style}>
          {tokens.map((line, index) => {
            const { className: lineClassName } = getLineProps({
              className:
                highlightLine && highlightLine(index) ? 'highlight-line' : '',
              key: index,
              line,
            });

            return (
              <Line
                data-testid={
                  highlightLine && highlightLine(index)
                    ? 'highlight-line'
                    : 'line'
                }
                key={index}
                className={lineClassName}
              >
                <LineNo data-testid="number-line">{index + 1}</LineNo>
                <LineContent>
                  {line.map((token, key) => {
                    return (
                      <span
                        data-testid="content-line"
                        key={key}
                        {...getTokenProps({
                          key,
                          token,
                        })}
                      />
                    );
                  })}
                </LineContent>
              </Line>
            );
          })}
        </Pre>
      )}
    </Highlight>
  );
};

const CodeBlock = (props: CodeBlockProps) => {
  const { codeString, language, metastring } = props;

  const highlightLineFn = calculateLinesToHighlight(metastring);
  const title = hasTitle(metastring);

  return (
    <Card
      title={title}
    >
      <HighlightedCodeText
        codeString={codeString}
        language={language}
        highlightLine={highlightLineFn}
      />
    </Card>
  );
};

export default CodeBlock;

const Pre = styled('pre', {
  marginTop: '0',
  marginBottom: '0',
  textAlign: 'left',
  padding: '8px 0px',
  overflow: 'auto',
  borderBottomLeftRadius: '1rem',
  borderBottomRightRadius: '1rem',
  backgroundColor: '$background',
  fontFamily: '$mono',
  fontSize: '1rem',
  lineHeight: '26px',
});

const Line = styled('div', {
  display: 'table',
  borderCollapse: 'collapse',
  padding: '0px .9rem',
  borderLeft: '3px solid transparent',

  '&.highlight-line': {
    background: '$cardStandardBackground',
    borderColor: '$cardStandardBorder',
  },


});

const LineNo = styled('div', {
  width: '45px',
  padding: '0 12px',
  userSelect: 'none',
  opacity: '1',
  color: '$typeSecondary',
});

const LineContent = styled('span', {
  display: 'table-cell',
  width: '100%',
});

const CodeSnippetTitle = styled('p', {
  marginBlockStart: '0px',
  fontSize: '1rem',
  marginBottom: '0px',
  color: '$brand',
  fontWeight: '500',
});