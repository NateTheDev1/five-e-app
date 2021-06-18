import lightLogo from '../assets/LogoLight.svg';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/opacity.css';

const Logo = () => {
	return (
		<LazyLoadImage
			className="logo"
			src={lightLogo}
			style={{ width: '100%' }}
			alt="dndsidekick"
			effect="opacity"
		/>
	);
};

export default Logo;
