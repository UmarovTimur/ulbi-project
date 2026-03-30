import { classNames } from 'shared/lib/classNames/classNames';
import cls from './LoginForm.module.scss';
import { useTranslation } from 'react-i18next';
import { Button, ButtonVariants } from 'shared/ui/Button';
import { Input } from 'shared/ui/Input/Input';
import { useEffect, useState } from 'react';

interface LoginFormProps { className?: string; }

export const LoginForm = ({ className }: LoginFormProps) => {
  const { t } = useTranslation()

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return isMounted && (
    <div className={classNames(cls.LoginForm, {}, [className])} >
      <Input autoFocus type="text" />
      <Input type="text" />
      <Button variant={ButtonVariants.OUTLINED} className={cls.loginBtn} >{t('Войти')}</Button>
    </div>
  )
}