import clsx from 'clsx';
import { HTMLAttributes, JSX } from 'react';
import AnimateNumber from '../AnimateNumbers/AnimateNumbers';
import styles from './Years.module.scss';

interface YearsProps extends HTMLAttributes<HTMLDivElement> {
	yearFrom: number;
	yearTo: number;
}

const Years = ({ yearFrom, yearTo, ...rest }: YearsProps): JSX.Element => {
	return (
		<div
			{...rest}
			className={styles.years}
		>
			<AnimateNumber className={clsx(styles.years__from)}>{yearFrom}</AnimateNumber> <AnimateNumber className={clsx(styles.years__to)}>{yearTo}</AnimateNumber>
		</div>
	);
};

export default Years;
