import React from "react";
import { BrowserRouter as Router, Link } from 'react-router-dom';
import styles from './Navigation.module.scss';

export const Navigation: React.FC = () => {
	return (
		<nav className={styles.navigation}>
			<ul className={styles.links}>
				<li>
					<Link className={styles.link} to="/doctors">Врачи</Link>
				</li>
				<li>
					<Link className={styles.link} to="/nurses">Медсестры</Link>
				</li>
			</ul>
		</nav>
	);
};
