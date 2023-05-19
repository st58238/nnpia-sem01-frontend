/**
 * Shamelessly stolen from https://codevoweb.com/form-validation-react-hook-form-material-ui-react/
 * Thanks to original author and Bc. Chrbolka Ondřej for directions
 */

import { TextField, TextFieldProps } from '@mui/material';
import { FC, ReactElement, ReactFragment, ReactPortal} from 'react';
import {Controller, useFormContext} from 'react-hook-form';

type IFormInputProps = {
    name: string;
} & TextFieldProps;

const FormInput: FC<IFormInputProps> = ({name, ...otherProps}) => {
    const {
        control,
        formState: {errors},
    } = useFormContext();

    let helper: string | number | boolean | ReactElement | ReactFragment | ReactPortal | null
    if(errors[name]) {
        // @ts-ignore
        helper = errors[name] ? errors[name].message : ''
    }

    return (
        <Controller control={control} name={name} defaultValue="" render={({ field })=> (
            <TextField
                {...otherProps}
                {...field}
                error={!!errors[name]}
                helperText={helper}
            />
        )}
        />
    );
}

export default FormInput;
