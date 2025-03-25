interface FormField {
  name: string;
  label: string;
  required?: string;
  minLength?: {
    value: number;
    message: string;
  };
  pattern?: {
    value: RegExp;
    message: string;
  };
}

interface FormSection {
  label: string;
  description: string;
  fields: FormField[];
}

export interface FormConfig {
  userDetails: FormSection;
  addressDetails: FormSection;
  accountDetails: FormSection;
}

export const formConfig: FormConfig = {
  userDetails: {
    label: 'User Details',
    description: 'Enter your first name, last name, and email.',
    fields: [
      {
        name: 'firstName',
        label: 'First Name',
        required: 'First name is required',
        minLength: {
          value: 2,
          message: 'First name must be at least 2 characters',
        },
      },
      {
        name: 'lastName',
        label: 'Last Name',
        required: 'Last name is required',
        minLength: {
          value: 2,
          message: 'Last name must be at least 2 characters',
        },
      },
      {
        name: 'email',
        label: 'Email',
        required: 'Email is required',
        pattern: {
          value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/,
          message: 'Please enter a valid email address',
        },
      },
    ],
  },
  addressDetails: {
    label: 'Address Details',
    description: 'Enter your street address, city, state, and zip code.',
    fields: [
      {
        name: 'street',
        label: 'Street',
        required: 'Street is required',
        minLength: {
          value: 5,
          message: 'Street must be at least 5 characters',
        },
      },
      {
        name: 'city',
        label: 'City',
        required: 'City is required',
        minLength: { value: 2, message: 'City must be at least 2 characters' },
      },
      {
        name: 'state',
        label: 'State',
        required: 'State is required',
        minLength: { value: 2, message: 'State must be at least 2 characters' },
      },
      {
        name: 'zipCode',
        label: 'Zip Code',
        required: 'Zip code is required',
        pattern: {
          value: /^[0-9]{5}$/,
          message: 'Zip code must be a 5-digit number',
        },
      },
    ],
  },
  accountDetails: {
    label: 'Account Details',
    description: 'Set your username.',
    fields: [
      {
        name: 'username',
        label: 'Username',
        required: 'Username is required',
        pattern: {
          value: /^[a-zA-Z0-9]+$/,
          message: 'Username must be alphanumeric',
        },
        minLength: {
          value: 3,
          message: 'Username must be at least 3 characters',
        },
      },
    ],
  },
};
