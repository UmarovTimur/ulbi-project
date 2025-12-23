import { classNames } from "shared/lib/classNames/classNames"
import cls from "./Loader.module.scss"

export const Loader = () => {
    return (
        <div className={classNames(cls.loader)}></div>
    )
}
