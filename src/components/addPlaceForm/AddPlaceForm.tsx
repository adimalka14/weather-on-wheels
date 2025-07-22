import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { CircularProgress } from '@mui/material';

import { Button, Text, Select } from '../../base-components';
import { usePlaces } from '../../hooks/usePlaces';
import { PlaceType } from '../../types/place.type.ts';

export default function AddPlaceForm() {
    const { addPlace } = usePlaces();

    const initialValues = {
        name: '',
        placeType: PlaceType.RESTAURANT,
        address: '',
    };

    const onSubmit = async (values: any) => {
        await new Promise((resolve) => setTimeout(resolve, 750));
        await addPlace(values);
    };

    const validationSchema = Yup.object().shape({
        name: Yup.string().max(25).required('Required'),
        placeType: Yup.string().oneOf(Object.values(PlaceType)).required('Required'),
        address: Yup.string().required('Required'),
    });

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            {({
                  values,
                  setFieldValue,
                  handleSubmit,
                  isSubmitting,
                  errors,
                  touched
              }) => {
                return (
                    <Form>
                        <Text error={!!errors.name && touched.name} helperText={errors.name} value={values.name} label={'place name'}
                              onChange={(e) => setFieldValue('name', e.target.value)} />
                        <Select
                            variant={'standard'}
                            id="placeType"
                            label="Place"
                            placeholder="Select place type"
                            selected={values.placeType}
                            onChange={(e) => {
                                setFieldValue('placeType', e.target.value);
                            }}
                            options={
                                Object.values(PlaceType).map((key) => ({
                                    key,
                                    label: PlaceType[key],
                                    value: key,
                                }))
                            }
                        />
                        <Text value={values.address}
                              label={'address'}
                              onChange={
                                  (e) => {
                                      setFieldValue('address', e.target.value);
                                  }
                              }></Text>

                        <Button
                            onClick={handleSubmit}
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? <CircularProgress /> :' Add place'}
                        </Button>
                    </Form>
                );
            }}
        </Formik>
    );
}