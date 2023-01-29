import dynamic from 'next/dynamic';

const Address = dynamic(() => import('@components/Client/Address/Address'), { suspense: true });

const AddressPage = () => <Address />;

export default AddressPage;
