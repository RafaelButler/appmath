import type { MDXComponents } from "mdx/types";
import Link from "next/link";
import { ComponentPropsWithoutRef } from "react";
import { highlight } from "sugar-high";

type HeadingProps = ComponentPropsWithoutRef<"h1">;
type ParagraphProps = ComponentPropsWithoutRef<"p">;
type SpanProps = ComponentPropsWithoutRef<"span">;
type ListItemProps = ComponentPropsWithoutRef<"li">;
type AnchorProps = ComponentPropsWithoutRef<"a">;

const components: MDXComponents = {
  h1: (props: HeadingProps) => (
    <h1 className="text-base font-bold" {...props} />
  ),
  h2: (props: HeadingProps) => (
    <h2 className="text-base font-bold" {...props} />
  ),
  h3: (props: HeadingProps) => (
    <h3 className="text-base font-bold" {...props} />
  ),
  p: (props: ParagraphProps) => (
    <p className="text-sm text-foreground/80" {...props} />
  ),
  span: (props: SpanProps) => <span className="text-sm" {...props} />,
  li: (props: ListItemProps) => <li className="text-sm" {...props} />,
  a: ({ href, children, ...props }: AnchorProps) => {
    const className = "text-blue-500 hover:text-blue-700";
    if (href?.startsWith("/")) {
      return (
        <Link href={href as string} className={className} {...props}>
          {children}
        </Link>
      );
    }
    if (href?.startsWith("#")) {
      return (
        <a href={href} className={className} {...props}>
          {children}
        </a>
      );
    }
    return (
      <Link
        href={href as string}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
        {...props}
      >
        {children}
      </Link>
    );
  },
  code: ({ children, ...props }: ComponentPropsWithoutRef<"code">) => {
    const codeHTML = highlight(children as string);

    return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />;
  },
};

declare global {
  type MDXProvidedComponents = typeof components;
}

export function useMDXComponents(): MDXProvidedComponents {
  return components;
}
