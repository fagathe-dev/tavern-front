import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import rehypeRaw from "rehype-raw";
import useSlide from "./src/hooks/useSlide";
import { data as steps } from "./src/data/slides";
import { KeyboardEvent, useEffect } from "react";

const App = () => {
  const { currentStep, goNext, goPrev, first, last } = useSlide(steps);

  const handleKeyPress = async (event: KeyboardEvent) => {
    console.info(event.key);
    if (event.key === "f") {
      const fs = await document.documentElement.requestFullscreen();
      console.log(fs);
    }
    if (event.key === "Escape") {
      document.exitFullscreen();
    }
    if (event.key === "ArrowLeft") {
      goPrev();
    }
    if (event.key === "ArrowRight") {
      goNext();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  return (
    <div style={{ width: "100%", marginInline: "auto", padding: 10 }}>
      <h1>{currentStep.title}</h1>
      <Markdown
        components={{
          code(props) {
            const { children, className, ...rest } = props;
            const match = /language-(\w+)/.exec(className || "");
            return match ? (
              <SyntaxHighlighter
                {...rest}
                children={String(children).replace(/\n$/, "")}
                style={vscDarkPlus}
                language={match[1]}
                PreTag="div"
              />
            ) : (
              <code {...rest} className={className}>
                {children}
              </code>
            );
          },
        }}
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw]}
      >
        {currentStep.content}
      </Markdown>
      {!first && <button onClick={goPrev}>prev</button>}
      {!last && <button onClick={goNext}>next</button>}
    </div>
  );
};

export default App;
