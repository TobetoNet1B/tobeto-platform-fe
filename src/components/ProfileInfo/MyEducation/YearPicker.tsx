import React, { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FieldProps, useField } from 'formik';

type YearPickerProps = FieldProps & {
  placeholderText?: string;
};

const YearPicker: React.FC<YearPickerProps> = ({ field, form, placeholderText = 'Select Year', ...props }) => {
  const [, , { setValue }] = useField(field);
  const [pickerWidth, setPickerWidth] = useState(350);

  const handleChange = (date: Date | null) => {
    form.setFieldValue(field.name, date);
  };

  useEffect(() => {
    const handleResize = () => {
      const newWidth = window.innerWidth > 500 ? 350 : window.innerWidth - 32;
      setPickerWidth(newWidth);
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <DatePicker
      {...field}
      {...props}
      selected={field.value}
      onChange={handleChange}
      dateFormat="yyyy"
      showYearPicker
      showMonthDropdown={false}
      peekNextMonth={false}
      showYearDropdown
      dropdownMode="select"
      placeholderText={placeholderText}
      className={`w-[${pickerWidth}px] input input-bordered w-full`}
    />
  );
};

export default YearPicker;
