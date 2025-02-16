import { settingsSidebarOpenAtom } from '@/utils/atoms';
import { Sidebar } from '..';
import { SettingsSidebarContent } from './SettingsSidebarContent';

export function SettingsSidebar() {
	return (
		<Sidebar
			anchor='right'
			openAtom={settingsSidebarOpenAtom}
			content={<SettingsSidebarContent />}
		/>
	);
}
