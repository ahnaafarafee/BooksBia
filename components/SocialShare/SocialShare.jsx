import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  WhatsappShareButton,
  PinterestShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  WhatsappIcon,
  PinterestIcon,
} from "react-share";

export default function SocialShare({ url, title, size, shareImage }) {
  return (
    <>
      <FacebookShareButton url={url} quote={title}>
        <FacebookIcon size={size} />
      </FacebookShareButton>

      <TwitterShareButton url={url} title={title} media={`${shareImage}`}>
        <TwitterIcon size={size} />
      </TwitterShareButton>

      <WhatsappShareButton url={url} title={title} separator=":: ">
        <WhatsappIcon size={size} />
      </WhatsappShareButton>

      <LinkedinShareButton
        url={url}
        title={title}
        windowWidth={750}
        windowHeight={600}
      >
        <LinkedinIcon size={size} />
      </LinkedinShareButton>

      <PinterestShareButton
        url={url}
        media={`${shareImage}`}
        windowWidth={1000}
        windowHeight={730}
      >
        <PinterestIcon size={size} />
      </PinterestShareButton>
    </>
  );
}
