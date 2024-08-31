import profileImage from '../../images/myPic.jpg';
import { useContext } from 'react';
import AboutMeContext from '../../context/AboutMeContext';
import { teamDetails } from '../../portfolioDetails/portfolio'
const AboutMeBio = () => {
	const { aboutMe } = useContext(AboutMeContext);

	return <>
		{teamDetails.map((item) => {
			return (

				<div className="block sm:flex sm:gap-10 mt-10 sm:mt-20">
					<div className="w-full sm:w-1/4 mb-7 sm:mb-0">
						<img src={item.img} alt={item.name} className="rounded-lg w-96" />
						<h4 className='text-center text-ternary-dark dark:text-ternary-light'>
							{item.name}  <br />
							{item.designation} <br />
							{item.experience} Year's of experience.
						</h4>
					</div>

					<div className="font-general-regular w-full sm:w-3/4 text-left">

						<p
							className="mb-4 text-ternary-dark dark:text-ternary-light text-lg"
							key={item.id}
						>
							{item.description}
						</p>

					</div>
				</div>
			);
		})}
	</>
};

export default AboutMeBio;
