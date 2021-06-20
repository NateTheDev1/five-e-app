import lightLogo from '../assets/LogoLight.svg';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/opacity.css';
import darkLogo from '../assets/LogoDark.svg';

const Logo = ({ type = 'light' }: { type?: string }) => {
	if (type === 'light') {
		return (
			<LazyLoadImage
				className="logo"
				src={lightLogo}
				style={{ width: '100%' }}
				alt="dndsidekick"
				effect="opacity"
			/>
		);
	} else {
		return (
			<LazyLoadImage
				className="logo"
				src={darkLogo}
				style={{ width: '100%' }}
				alt="dndsidekick"
				effect="opacity"
			/>
		);
	}
};

export default Logo;
