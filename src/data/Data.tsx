// Sidebar imports:
import { AiOutlineQuestionCircle } from 'react-icons/ai';
import {
  BiClipboard,
  BiCloudUpload,
  BiHomeAlt,
  BiNews,
  BiSearch,
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
    title: 'Boletin',
    icon: <BiNews />,
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
    title: 'BOLETIN INFORMATIVO',
    icon: <BiNews />,
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
    link: '/dashboard/classify',
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

export const tipsData = [
  {
    id: 1,
    title:
      'Las siestas diurnas en personas mayores pueden indicar demencia/Alzheimer',
    description:
      'La siesta diurna en los ancianos es una parte normal del envejecimiento, pero también puede presagiar la enfermedad de Alzheimer y otras demencias.',
    image: '/assets/images/news1.webp',
    link: 'https://scitechdaily.com/daytime-napping-in-seniors-may-signal-dementia-alzheimers-disease/',
  },
  {
    id: 2,
    title: 'Proteína repleta de azúcar relacionada con el Alzheimer',
    description:
      'Investigadores de medicina del hospital Johns Hopkins dicen que han descubierto que un azúcar especial molécula podría desempeñar un papel importante en el desarrollo de alzheimer',
    image: '/assets/images/news2.webp',
    link: 'https://scitechdaily.com/reverse-engineering-brain-tissue-reveals-sugar-studded-protein-linked-to-alzheimers-disease/',
  },
  {
    id: 3,
    title: 'Eslabón perdido entre el Alzheimer y la enfermedad vascular',
    description:
      'El gen FMNL2 vincula la enfermedad cerebrovascular y la enfermedad de Alzheimer, informa un nuevo estudio.',
    image: '/assets/images/news3.webp',
    link: 'https://neurosciencenews.com/genetics-cerebrovascular-alzheimers-20669/',
  },
  {
    id: 3,
    title:
      'Las siestas diurnas en personas mayores pueden indicar demencia/Alzheimer',
    description:
      'La siesta diurna en los ancianos es una parte normal del envejecimiento, pero también puede presagiar la enfermedad de Alzheimer y otras demencias.',
    image: '/assets/images/news1.webp',
    link: 'https://scitechdaily.com/daytime-napping-in-seniors-may-signal-dementia-alzheimers-disease/',
  },
];
