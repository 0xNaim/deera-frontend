import dynamic from 'next/dynamic';

const Address = dynamic(() => import('../../../components/Client/Address/Address'), { ssr: false });

const AddressPage = () => <Address />;

export default AddressPage;
