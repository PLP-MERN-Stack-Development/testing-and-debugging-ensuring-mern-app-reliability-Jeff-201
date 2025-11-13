// useForm.test.js - Unit tests for useForm custom hook

import { renderHook, act } from '@testing-library/react';
import { useForm } from '../../hooks/useForm';

describe('useForm Hook', () => {
  const initialValues = {
    email: '',
    password: '',
  };

  it('initializes with provided initial values', () => {
    const { result } = renderHook(() => useForm(initialValues));
    
    expect(result.current.values).toEqual(initialValues);
    expect(result.current.errors).toEqual({});
    expect(result.current.touched).toEqual({});
    expect(result.current.isSubmitting).toBe(false);
  });

  it('handles input changes', () => {
    const { result } = renderHook(() => useForm(initialValues));
    
    const mockEvent = {
      target: {
        name: 'email',
        value: 'test@example.com',
        type: 'text',
      },
    };
    
    act(() => {
      result.current.handleChange(mockEvent);
    });
    
    expect(result.current.values.email).toBe('test@example.com');
  });

  it('handles checkbox inputs', () => {
    const initialValues = { agree: false };
    const { result } = renderHook(() => useForm(initialValues));
    
    const mockEvent = {
      target: {
        name: 'agree',
        checked: true,
        type: 'checkbox',
      },
    };
    
    act(() => {
      result.current.handleChange(mockEvent);
    });
    
    expect(result.current.values.agree).toBe(true);
  });

  it('handles blur events', () => {
    const { result } = renderHook(() => useForm(initialValues));
    
    const mockEvent = {
      target: {
        name: 'email',
      },
    };
    
    act(() => {
      result.current.handleBlur(mockEvent);
    });
    
    expect(result.current.touched.email).toBe(true);
  });

  it('validates form on submit', async () => {
    const validate = (values) => {
      const errors = {};
      if (!values.email) {
        errors.email = 'Email is required';
      }
      if (!values.password) {
        errors.password = 'Password is required';
      }
      return errors;
    };
    
    const { result } = renderHook(() => useForm(initialValues, validate));
    const mockCallback = jest.fn();
    const mockEvent = { preventDefault: jest.fn() };
    
    await act(async () => {
      await result.current.handleSubmit(mockCallback)(mockEvent);
    });
    
    expect(result.current.errors.email).toBe('Email is required');
    expect(result.current.errors.password).toBe('Password is required');
    expect(mockCallback).not.toHaveBeenCalled();
  });

  it('submits form when validation passes', async () => {
    const validate = (values) => {
      const errors = {};
      if (!values.email) {
        errors.email = 'Email is required';
      }
      return errors;
    };
    
    const { result } = renderHook(() => useForm(initialValues, validate));
    const mockCallback = jest.fn();
    const mockEvent = { preventDefault: jest.fn() };
    
    // Set valid values
    act(() => {
      result.current.setValues({
        email: 'test@example.com',
        password: 'password123',
      });
    });
    
    await act(async () => {
      await result.current.handleSubmit(mockCallback)(mockEvent);
    });
    
    expect(mockCallback).toHaveBeenCalledWith({
      email: 'test@example.com',
      password: 'password123',
    });
  });

  it('marks all fields as touched on submit', async () => {
    const { result } = renderHook(() => useForm(initialValues));
    const mockCallback = jest.fn();
    const mockEvent = { preventDefault: jest.fn() };
    
    await act(async () => {
      await result.current.handleSubmit(mockCallback)(mockEvent);
    });
    
    expect(result.current.touched.email).toBe(true);
    expect(result.current.touched.password).toBe(true);
  });

  it('resets form to initial values', () => {
    const { result } = renderHook(() => useForm(initialValues));
    
    // Change values
    act(() => {
      result.current.setValues({
        email: 'test@example.com',
        password: 'password123',
      });
      result.current.setErrors({ email: 'Error' });
    });
    
    // Reset
    act(() => {
      result.current.reset();
    });
    
    expect(result.current.values).toEqual(initialValues);
    expect(result.current.errors).toEqual({});
    expect(result.current.touched).toEqual({});
    expect(result.current.isSubmitting).toBe(false);
  });

  it('clears field error when field is modified', () => {
    const validate = (values) => {
      const errors = {};
      if (!values.email) {
        errors.email = 'Email is required';
      }
      return errors;
    };
    
    const { result } = renderHook(() => useForm(initialValues, validate));
    
    // Touch field to trigger validation
    act(() => {
      result.current.handleBlur({ target: { name: 'email' } });
    });
    
    // Modify field
    act(() => {
      result.current.handleChange({
        target: {
          name: 'email',
          value: 'test@example.com',
          type: 'text',
        },
      });
    });
    
    // Error should be cleared
    expect(result.current.errors.email).toBeUndefined();
  });
});
