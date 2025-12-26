import { classNames } from 'shared/lib/classNames/classNames';
import cls from './PageError.module.scss';
import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from 'shared/ui/Button';

interface PageErrorProps { className?: string; }

export const PageError = ({ className }: PageErrorProps) => {
    const { t } = useTranslation();

    const ReloadPage = () => {
        location.reload();
    }

    return (
        <div className={classNames(cls.PageError, {}, [className])} >
            <h1 className={cls.title} >{t(`Произошла непредвиденная ошибка`)}</h1>
            <Button
                className={cls.button}       
                theme={ThemeButton.DARK}
                onClick={ReloadPage} >

                {t('Перезагрузить страницу')}
            </Button>
        </div>
    )
}