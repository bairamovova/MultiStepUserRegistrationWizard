import {
  Box,
  Stepper,
  Step,
  StepLabel,
  StepContent,
  Button,
  Typography,
} from '@mui/material';
import { FormState, useFormStore } from '../store/formStore';
import { useForm, Controller } from 'react-hook-form';
import { formConfig } from '../config/formConfig';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';

const StepperForm = () => {
  const navigate = useNavigate();

  const { activeStep, setActiveStep, setFormData, ...formData } =
    useFormStore();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: formData });

  const handleBack = () => setActiveStep(activeStep - 1);

  const onSubmit = (data: Partial<FormState>) => {
    setFormData(data);
    if (activeStep === Object.keys(formConfig).length - 1) {
      console.log('Form Submitted:', data);
      navigate('/user-info');
    } else {
      setActiveStep(activeStep + 1);
    }
  };

  const steps = (Object.keys(formConfig) as Array<keyof typeof formConfig>).map(
    (key) => formConfig[key]
  );

  return (
    <Box sx={{ minWidth: 300, maxWidth: 400 }}>
      <Stepper activeStep={activeStep} orientation='vertical'>
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel>{step.label}</StepLabel>
            <StepContent>
              <Typography>{step.description}</Typography>
              <form onSubmit={handleSubmit(onSubmit)}>
                {step.fields.map((field) => (
                  <Box key={field.name} sx={{ mb: 2 }}>
                    <Controller
                      name={
                        field.name as Extract<
                          keyof FormState,
                          | 'firstName'
                          | 'lastName'
                          | 'email'
                          | 'street'
                          | 'city'
                          | 'state'
                          | 'zipCode'
                          | 'username'
                          | 'resetForm'
                        >
                      }
                      control={control}
                      rules={{
                        required: field.required,
                        pattern: field.pattern,
                        minLength: field.minLength,
                      }}
                      render={({ field: controllerField }) => (
                        <TextField
                          {...controllerField}
                          label={field.label}
                          fullWidth
                          error={!!errors[field.name as keyof typeof errors]}
                          helperText={errors[
                            field.name as keyof typeof errors
                          ]?.message?.toString()}
                        />
                      )}
                    />
                  </Box>
                ))}
                <Box sx={{ mb: 2 }}>
                  <Button
                    variant='contained'
                    type='submit'
                    sx={{ mt: 1, mr: 1 }}
                  >
                    {index === steps.length - 1 ? 'Finish' : 'Continue'}
                  </Button>
                  <Button
                    disabled={index === 0}
                    onClick={handleBack}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    Back
                  </Button>
                </Box>
              </form>
            </StepContent>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
};

export default StepperForm;
