// Sidebar imports:
import { AiOutlineQuestionCircle } from 'react-icons/ai';
import {
  BiClipboard,
  BiCloudUpload,
  BiHomeAlt,
  BiSearch,
  BiUser,
} from 'react-icons/bi';
import { VscGraphLine } from 'react-icons/vsc';

/* 
  Sidebar Data
 */
export const SidebarData = [
  {
    id: 1,
    icon: <BiHomeAlt />,
    title: 'Dashboard',
    link: '/dashboard',
  },
  {
    id: 2,
    title: 'Clasificar',
    icon: <BiSearch />,
    link: '/dashboard/classify',
  },
  {
    id: 3,
    icon: <BiClipboard />,
    title: 'Historial',
    link: '/dashboard/history',
  },
  {
    id: 4,
    title: 'Consejos',
    icon: <BiUser />,
    link: '/dashboard/tips',
  },
  {
    id: 5,
    title: 'Ayuda',
    icon: <AiOutlineQuestionCircle />,
    link: '/dashboard/help',
  },
];

/* 
  Cards Data
*/

export const CardsData = [
  {
    id: 1,
    title: 'CLASIFICAR',
    icon: <BiSearch />,
    link: '/dashboard/classify',
    className: 'clasificar',
  },
  {
    id: 2,
    title: 'CONSEJOS',
    icon: <BiUser />,
    link: '/dashboard/tips',
    className: 'consejos',
  },
  {
    id: 3,
    title: 'HISTORIAL',
    icon: <VscGraphLine />,
    link: '/dashboard/history',
    className: 'historial',
  },
  {
    id: 4,
    title: 'SUBIR MI MRI',
    icon: <BiCloudUpload />,
    link: '/card',
    className: 'mri',
  },
  {
    id: 5,
    title: 'NECESITAS AYUDA?',
    icon: <AiOutlineQuestionCircle />,
    link: '/dashboard/help',
    className: 'ayuda',
  },
];
