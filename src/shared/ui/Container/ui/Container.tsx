import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Container.module.scss';
import { HTMLAttributes, ReactNode } from 'react';

interface ContainerProps extends HTMLAttributes<HTMLElement> {
    children: ReactNode;
    className?: string;
}

export const Container = ({ children, className, ...rest }: ContainerProps) => {
    return (
        // eslint-disable-next-line react/jsx-props-no-spreading
        <div className={classNames(cls.Container, {}, [className])} {...rest}>
            {children}
        </div>
    );
};