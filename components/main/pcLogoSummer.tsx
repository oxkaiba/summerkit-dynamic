import PcLogo from '@/public/pcLogo.svg'
import Image from 'next/image';

export default function PcLogoSummer() {
  return (
    <div className="max-h-screen flex items-center justify-center">
      <Image src={PcLogo} alt='Pc' width={400} />
    </div>
  );
}
