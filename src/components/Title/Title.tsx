import clsx from 'clsx';
import { HTMLAttributes, JSX } from 'react';
import styles from './Title.module.scss';
interface TitleProps extends HTMLAttributes<HTMLHeadingElement> {
	children: string;
}
const Title = ({ children }: TitleProps): JSX.Element => {
	return <h1 className={clsx(styles.title)}>{children}</h1>;
};

export default Title;
