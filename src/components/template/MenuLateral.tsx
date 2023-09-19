import useAuth from '@/data/hook/useAuth';
import { IconBell, IconConfig, IconHome, IconLogout } from '../icons';
import Logo from './Logo';
import MenuItem from './MenuItem';

const MenuLateral = () => {
	const { logout } = useAuth();
	return (
		<aside className="flex flex-col dark:bg-gray-900 text-gray-200">
			<div
				className={`
				flex flex-col items-center justify-center
				bg-gradient-to-r from-yellow-300 to-red-500
				h-24 w-24
			`}
			>
				<Logo />
			</div>
			<ul className="flex-grow">
				<MenuItem url="/" texto="Laje" icone={IconHome} />
			</ul>
			<ul>
				<MenuItem
					onClick={logout}
					texto="Sair"
					icone={IconLogout}
					className={`
					text-red-600 dark:text-red-400
					hover:bg-red-400 hover:text-white	
					dark:hover:text-white				
					`}
				/>
			</ul>
		</aside>
	);
};

export default MenuLateral;
