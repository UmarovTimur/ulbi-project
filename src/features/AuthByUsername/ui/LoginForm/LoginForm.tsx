import { classNames } from 'shared/lib/classNames/classNames';
import cls from './LoginForm.module.scss';
import { useTranslation } from 'react-i18next';
import { Button, ButtonVariants } from 'shared/ui/Button';
import { Input } from 'shared/ui/Input/Input';
import { memo, useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginAction } from '../../model/slice/loginSlice';
import { getLoginState } from '../../model/selectors/getLoginState';

interface LoginFormProps { className?: string; }

const LoginForm = ({ className }: LoginFormProps) => {
  const { t } = useTranslation()
  const dispatch = useDispatch();
  const { username, password } = useSelector(getLoginState);

  const onChangeUsername = useCallback((value: string) => {
    dispatch(loginAction.setUsername(value));
  }, [dispatch]);

  const onChangePassword = useCallback((value: string) => {
    dispatch(loginAction.setPassword(value));
  }, [dispatch]);


  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return isMounted && (
    <div className={classNames(cls.LoginForm, {}, [className])} >
      <Input autoFocus type="text" onChange={onChangeUsername} value={username} />
      <Input type="text" onChange={onChangePassword} value={password} />
      <Button variant={ButtonVariants.OUTLINED} className={cls.loginBtn} >{t('Войти')}</Button>
    </div>
  )
}

export default memo(LoginForm);