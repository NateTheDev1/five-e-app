import React from 'react';
//@ts-ignore
import AdSense from 'react-adsense';

class GoogleAd extends React.Component {
	componentDidMount() {
		const installGoogleAds = () => {
			const elem = document.createElement('script');
			elem.src =
				'//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js';
			elem.async = true;
			elem.defer = true;
			document.body.insertBefore(elem, document.body.firstChild);
		};
		installGoogleAds();
	}

	render() {
		return (
			<>
				<AdSense.Google
					style={{ display: 'block' }}
					client="ca-pub-3214358634915966"
					slot="7869529113"
					format="auto"
					responsive="true"
				/>
			</>
		);
	}
}

export default GoogleAd;
