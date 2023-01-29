/* eslint-disable object-curly-newline */
import dynamic from 'next/dynamic';

const DeliveryTime = dynamic(() => import('@components/Client/DeliveryTime/DeliveryTime'), {
  ssr: false,
});

const DeliveryTimePage = () => <DeliveryTime />;

export default DeliveryTimePage;
