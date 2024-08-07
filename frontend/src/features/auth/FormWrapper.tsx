import { ReactNode } from 'react';
import CloseIcon from '../../components/CloseIcon';

type Size = 'small' | 'medium' | 'large';

interface FormWrapperProps {
  label: string;
  size?: Size;
  formClosePath?: string;
  children: ReactNode;
}

function FormWrapper({ children, label, size = 'small', formClosePath = '/home' }: FormWrapperProps) {
  const sizeClasses = {
    small: 'w-full md:w-96',
    medium: 'w-full md:w-1/3',
    large: 'w-full md:w-2/3 ',
  };

  return (
    <div className={`flex flex-col w-full md:w-2/3 items-center gap-16 md:justify-center p-5`}>
      <div className={`relative ${sizeClasses[size]} bg-border-dark text-content-dark p-8 rounded-md `}>
        <CloseIcon path={formClosePath} />
        <h2 className="mb-6 text-center">{label}</h2>
        {children}
      </div>
    </div>
  );
}

export default FormWrapper;
