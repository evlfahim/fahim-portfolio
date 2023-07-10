// Import images
import WebImage1 from '../images/web-project-1.jpg';
import WebImage2 from '../images/web-project-2.jpg';
import MobileImage1 from '../images/mobile-project-1.jpg';
import MobileImage2 from '../images/mobile-project-2.jpg';
import UIImage1 from '../images/ui-project-1.jpg';
import UIImage2 from '../images/ui-project-2.jpg';

export const projectsData = [
	{
		id: 1,
		title: 'Tasker App',
		category: 'Web Application',
		img: WebImage2,
		ProjectHeader: {
			title: 'A tasker Application',
			publishDate: 'June 20, 2019',
			tags: 'UI / Frontend && Backend',
		},
	},
	
	{
		id: 2,
		title: 'Cloud Storage Platform',
		category: 'UI/UX Design',
		img: UIImage2,
	},
	{
		id: 3,
		title: 'Cloud Dashboard',
		category: 'Web Application',
		img: MobileImage1,
		ProjectHeader: {
			title: 'A Dashboard for Multiple vendors',
			publishDate: 'AUG 7, 2021',
			tags: 'UI / Frontend && Backend',
		},
	},
	{
		id: 4,
		title: '800getfood',
		category: 'Web Application',
		img: WebImage1,
		ProjectHeader: {
			title: 'Food order and rider App',
			publishDate: 'Feb 26, 2020',
			tags: 'UI / Frontend && Backend',
		},
	},
];
