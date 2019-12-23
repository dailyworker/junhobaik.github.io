let config = {
  title: `Dev.White`,
  author: 'Junho Baik',
  description: 'Dev.White Development Blog',
  siteUrl: 'https://junhobaik.github.io',

  // # Header config
  titleLogo: () => {
    return require('./src/images/profile.png');
  },
  titleLogoShow: true,
  bio: 'Jr. FRONT-END DEVELOPER',
  bioShow: true,
  // social URL
  github: 'https://github.com/junhobaik',
  linkedin: '',
  facebook: '',
  instagram: 'https://www.instagram.com/junhobaik/',

  // # Addtional
  googleAnalyticsTrackingId: 'UA-103592668-4',
  disqusShortname: 'dev-hundred-blog',

  // ## google AdSense
  // In addition, client-id in '/static/ads.txt' file needs to be modified
  googleAdsense: true,
  adsenseClient: 'ca-pub-5001380215831339',
  adsenseSlot: '5214956675',
};

/********************************************** */

if (process.env.NODE_ENV === 'development') {
  config.googleAnalyticsTrackingId = '';
  config.disqusShortname = '';
  config.googleAdsense = false;
}

module.exports = config;
