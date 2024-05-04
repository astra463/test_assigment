import React from "react";
import {Navigation} from "../navigation/Navigation";
import styles from "./Header.module.scss";

export const Header: React.FC = () => {
	return (
		<header className={styles.header}>
			<img
				className={styles.logo}
				src="https://icon-icons.com/icons2/944/PNG/512/medical-03_icon-icons.com_73941.png"
				alt="Картинка стетоскопа"
			/>
			<Navigation />
		</header>
	);
};
