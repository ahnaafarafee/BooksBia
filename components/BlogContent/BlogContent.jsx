import BlockContent from "@sanity/block-content-to-react";

import { urlFor } from "../../services/sanity/api";

const serializers = {
  types: {
    image: ({ node: { asset, alt } }) => {
      return (
        <div className="blog-image">
          <img src={urlFor(asset).height(300).fit("max").url()} />
          <div className="image-alt">{alt}</div>
        </div>
      );
    },
  },
};

export default function BlogContent({ content }) {
  return (
    <>
      <BlockContent serializers={serializers} blocks={content} />
    </>
  );
}
