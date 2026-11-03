"use client";

import React from "react";

function safeLink(value) {
  if (/^https?:\/\//i.test(value) || /^mailto:/i.test(value) || /^tel:/i.test(value)) {
    return value;
  }
  if (value.startsWith("/") && !value.startsWith("//")) return value;
  return null;
}

function renderInline(text, keyPrefix = "inline") {
  const tokenPattern = /(!\[[^\]]*\]\(https?:\/\/[^\s)]+\)|\[[^\]]+\]\((?:https?:\/\/|\/)[^\s)]+\)|\*\*[^*]+\*\*|__[^_]+__|\x60[^\x60]+\x60|\*[^*]+\*)/g;
  const pieces = [];
  let lastIndex = 0;
  let match;
  let index = 0;

  while ((match = tokenPattern.exec(text)) !== null) {
    if (match.index > lastIndex) {
      pieces.push(text.slice(lastIndex, match.index));
    }

    const token = match[0];
    const key = `${keyPrefix}-${index++}`;
    const image = token.match(/^!\[([^\]]*)\]\((https?:\/\/[^\s)]+)\)$/);
    const link = token.match(/^\[([^\]]+)\]\(((?:https?:\/\/|\/)[^\s)]+)\)$/);

    if (image) {
      pieces.push(
        <img
          key={key}
          src={image[2]}
          alt={image[1]}
          loading="lazy"
          className="article-inline-image"
        />,
      );
    } else if (link) {
      const href = safeLink(link[2]);
      pieces.push(
        href ? (
          <a
            key={key}
            href={href}
            target={/^https?:\/\//i.test(href) ? "_blank" : undefined}
            rel={/^https?:\/\//i.test(href) ? "noopener noreferrer" : undefined}
          >
            {renderInline(link[1], key)}
          </a>
        ) : (
          link[1]
        ),
      );
    } else if (token.startsWith("**") || token.startsWith("__")) {
      pieces.push(<strong key={key}>{renderInline(token.slice(2, -2), key)}</strong>);
    } else if (token.startsWith("`")) {
      pieces.push(<code key={key}>{token.slice(1, -1)}</code>);
    } else if (token.startsWith("*")) {
      pieces.push(<em key={key}>{renderInline(token.slice(1, -1), key)}</em>);
    }

    lastIndex = match.index + token.length;
  }

  if (lastIndex < text.length) pieces.push(text.slice(lastIndex));
  return pieces;
}

function isBlockStart(line) {
  return /^(#{1,6}\s|>\s?|[-*+]\s|\d+[.)]\s|([-*_]\s*){3,}$)/.test(line) ||
    /^!\[[^\]]*\]\(https?:\/\/[^\s)]+\)$/.test(line);
}

function renderBlocks(markdown) {
  const lines = String(markdown || "").replace(/\r\n?/g, "\n").split("\n");
  const nodes = [];
  let index = 0;

  while (index < lines.length) {
    const line = lines[index].trim();
    if (!line) {
      index += 1;
      continue;
    }

    if (/^([-*_]\s*){3,}$/.test(line)) {
      nodes.push(<hr key={`hr-${index}`} />);
      index += 1;
      continue;
    }

    const heading = line.match(/^(#{1,6})\s+(.+)$/);
    if (heading) {
      const level = heading[1].length;
      const Tag = `h${level}`;
      nodes.push(<Tag key={`heading-${index}`}>{renderInline(heading[2])}</Tag>);
      index += 1;
      continue;
    }

    if (line.startsWith(">")) {
      const quoted = [];
      while (index < lines.length && lines[index].trim().startsWith(">")) {
        quoted.push(lines[index].trim().replace(/^>\s?/, ""));
        index += 1;
      }
      nodes.push(<blockquote key={`quote-${index}`}>{renderBlocks(quoted.join("\n"))}</blockquote>);
      continue;
    }

    const listMatch = line.match(/^([-*+]\s|\d+[.)]\s)/);
    if (listMatch) {
      const ordered = /^\d/.test(line);
      const items = [];
      while (index < lines.length && /^\s*(?:[-*+]\s|\d+[.)]\s)/.test(lines[index])) {
        const item = lines[index].trim().replace(/^(?:[-*+]\s|\d+[.)]\s)/, "");
        items.push(item);
        index += 1;
      }
      const Tag = ordered ? "ol" : "ul";
      nodes.push(
        <Tag key={`list-${index}`}>
          {items.map((item, itemIndex) => (
            <li key={itemIndex}>{renderInline(item, `list-${index}-${itemIndex}`)}</li>
          ))}
        </Tag>,
      );
      continue;
    }

    const image = line.match(/^!\[([^\]]*)\]\((https?:\/\/[^\s)]+)\)$/);
    if (image) {
      nodes.push(
        <figure key={`image-${index}`}>
          <img src={image[2]} alt={image[1]} loading="lazy" />
          {image[1] ? <figcaption>{image[1]}</figcaption> : null}
        </figure>,
      );
      index += 1;
      continue;
    }

    const paragraph = [line];
    index += 1;
    while (index < lines.length && lines[index].trim() && !isBlockStart(lines[index].trim())) {
      paragraph.push(lines[index].trim());
      index += 1;
    }
    nodes.push(
      <p key={`paragraph-${index}`}>
        {renderInline(paragraph.join(" "), `paragraph-${index}`)}
      </p>,
    );
  }

  return nodes;
}

export default function MarkdownContent({ content }) {
  return <div className="article-content">{renderBlocks(content)}</div>;
}
