import { HTMLAttributes, JSX } from 'react';
import styles from './Title.module.scss';
interface TitleProps extends HTMLAttributes<HTMLHeadingElement> {
	children: string;
}
const Title = ({ children }: TitleProps): JSX.Element => {
	return <h1 className={styles.title}>{children}</h1>;
};

export default Title;
