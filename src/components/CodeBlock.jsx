import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const CodeBlock = ({ language, code, path }) => {
  return (
    <div className="bg-[#282c35] mt-6 rounded-md overflow-hidden ">
      <div className="flex items-center justify-between gap-2 bg-surface2/80 py-2 px-4">
        <span className="text-base text-white/80">{path}</span>
        <button className="text-sm text-accent hover:text-accent/80 cursor-pointer">
          Copy
        </button>
      </div>
      <SyntaxHighlighter
        language={language}
        style={oneDark}
        showLineNumbers
        wrapLongLines
        customStyle={{
          borderRadius: "10px",
          padding: "20px",
          fontSize: "15px",
        }}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeBlock;
