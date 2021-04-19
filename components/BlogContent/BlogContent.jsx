import BlockContent from "@sanity/block-content-to-react";

export default function BlogContent({ content }) {
  return (
    <>
      <BlockContent
        imageOptions={{ w: 320, h: 240, fit: "max" }}
        blocks={content}
      />
    </>
  );
}
