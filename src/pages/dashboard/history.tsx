import Appbar from '@/components/Appbar/Appbar';
import Table from '@/components/Table/Table';

const History = () => {
  return (
    <>
      <Appbar title="Historial" />
      <div className="flex w-full flex-col items-center justify-center ">
        <Table />
      </div>
    </>
  );
};

History.isDashboard = true;

export default History;
