import React from 'react';

class AdSenseVerifier extends React.Component {

  componentDidMount() {
    console.log('comp did mount on adsense');
    (window.adsbygoogle = window.adsbygoogle || []).push({
      google_ad_client: "ca-pub-5627420076250827",
      enable_page_level_ads: true
    });
  }

  render() {
    return null;
  }
}

export default AdSenseVerifier;
