import React, { FC } from 'react';

export type TextfieldProps = {
  placeholder: string;
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement>;
  value?: string;
};

const Textfield: FC<TextfieldProps> = ({ placeholder, onChange, value }) => {
  return (
    <textarea
      className={
        'bg-slate-100 h-160 w-full border-1 hover:border-2 border-slate-200 ' +
        'hover:border-slate-300 rounded-s focus:outline focus:outline-none focus:border-2 ' +
        'focus:border-violet-600 px-s py-s resize-none'
      }
      placeholder={placeholder}
      onChange={onChange}
      value={value}
    ></textarea>
  );
};

export default Textfield;
