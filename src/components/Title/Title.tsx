import clsx from 'clsx';
import { HTMLAttributes, JSX } from 'react';
import styles from './Title.module.scss';
interface TitleProps extends HTMLAttributes<HTMLHeadingElement> {
	as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
	children: React.ReactNode;
}

const Title = ({ as: Tag = 'h1', children, className, ...rest }: TitleProps): JSX.Element => {
	return (
		<Tag
			className={clsx(styles.title, className)}
			{...rest}
		>
			{children}
		</Tag>
	);
};

export default Title;
