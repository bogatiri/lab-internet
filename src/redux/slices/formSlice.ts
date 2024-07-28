import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FormState {
  name: string;
  phoneNumber: string;
  agreement: boolean;
  errors: {
    name: string;
    phoneNumber: string;
    agreement: string;
  };
  touched: {
    name: boolean;
    phoneNumber: boolean;
    agreement: boolean;
  };
}

const initialState: FormState = {
  name: '',
  phoneNumber: '',
  agreement: false,
  errors: {
    name: '',
    phoneNumber: '',
    agreement: ''
  },
  touched: {
    name: false,
    phoneNumber: false,
    agreement: false
  }
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setName(state, action: PayloadAction<string>) {
      state.name = action.payload;
    },
    setPhoneNumber(state, action: PayloadAction<string>) {
      state.phoneNumber = action.payload;
    },
    setAgreement(state, action: PayloadAction<boolean>) {
      state.agreement = action.payload;
    },
    setErrors(state, action: PayloadAction<{ name: string; phoneNumber: string; agreement: string }>) {
      state.errors = action.payload;
    },
    setTouched(state, action: PayloadAction<{ name?: boolean; phoneNumber?: boolean; agreement?: boolean }>) {
      state.touched = { ...state.touched, ...action.payload };
    },
    resetForm(state) {
      state.name = '';
      state.phoneNumber = '';
      state.agreement = false;
      state.errors = {
        name: '',
        phoneNumber: '',
        agreement: ''
      };
      state.touched = {
        name: false,
        phoneNumber: false,
        agreement: false
      };
    }
  }
});

export const { setName, setPhoneNumber, setAgreement, setErrors, setTouched, resetForm } = formSlice.actions;

export default formSlice.reducer;
