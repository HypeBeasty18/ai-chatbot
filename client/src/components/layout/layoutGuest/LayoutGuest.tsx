import React, { FC } from 'react'

import s from './LayoutGuest.module.scss'

type Props = {
	children: React.ReactNode
}

const LayoutGuest: FC<Props> = ({ children }) => {
	return (
		<div className={s.container}>
			<div className={s.smokes}>
				<span>
					<img src='/src/assets/decor/smokeBlue.png' draggable={false} />
				</span>
				<span>
					<img src='/src/assets/decor/smokePurple.png' draggable={false} />
				</span>
				<span>
					<img src='/src/assets/decor/smokePurple.png' draggable={false} />
				</span>
			</div>

			<div className={s.inner}>
				<div className={s.logo}>
					<img
						src='/src/assets/photo/logoBlack.png'
						alt='logo'
						draggable={false}
					/>
				</div>
				<div className={s.children}>{children}</div>
			</div>
		</div>
	)
}

export default LayoutGuest
