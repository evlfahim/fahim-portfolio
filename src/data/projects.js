// Import images
import WebImage1 from '../images/web-project-1.jpg';
import WebImage2 from '../images/web-project-2.jpg';
import MobileImage1 from '../images/mobile-project-1.jpg';
import UIImage2 from '../images/ui-project-2.jpg';
import UIImage3 from '../images/ui-project-1.jpg';

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
		img: UIImage3,
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
	{
		id: 5,
		title: 'Sementic Similarity',
		category: 'Web Application',
		img: UIImage2,
		ProjectHeader: {
			title: 'Checks if 2 given documents are similar to each other',
			publishDate: 'JAN 26, 2023',
			tags: 'UI / Frontend && Backend',
		},
	},
];
