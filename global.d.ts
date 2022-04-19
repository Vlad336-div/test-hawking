declare module '*.svg' {
  import React = require('react');
  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}

type SocialNetworks = {
  vk: boolean;
  facebook: boolean;
  tiktok: boolean;
  instagram: boolean;
}