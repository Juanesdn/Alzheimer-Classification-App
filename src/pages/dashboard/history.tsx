import { getSession } from 'next-auth/react';
import { useEffect, useState } from 'react';

import Appbar from '@/components/Appbar/Appbar';
import Table from '@/components/Table/Table';
import { getUserMRIS } from '@/data/api';
import { MRIResponse, SessionProps } from '@/types';

const History = () => {
  const [mris, setMris] = useState<MRIResponse[]>([]);

  const getMris = async () => {
    const session = await getSession();
    if (!session) {
      return;
    }
    const {
      accessToken,
      user: { userId },
    } = session as unknown as SessionProps;
    const response = await getUserMRIS(accessToken as string, userId as string);
    setMris(response);
  };

  useEffect(() => {
    getMris();
  }, []);

  return (
    <>
      <Appbar title="Historial" />
      <div className="flex w-full flex-col items-center justify-center">
        <Table mris={mris} />
      </div>
    </>
  );
};

History.isDashboard = true;

export default History;
