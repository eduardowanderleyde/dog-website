import { renderHook, act } from '@testing-library/react';
import useForm from '../useForm';

describe('useForm Hook', () => {
  it('initializes with empty value', () => {
    const { result } = renderHook(() => useForm());
    expect(result.current.value).toBe('');
  });

  it('updates value on change', () => {
    const { result } = renderHook(() => useForm());
    
    act(() => {
      result.current.onChange({ target: { value: 'test' } });
    });
    
    expect(result.current.value).toBe('test');
  });

  it('validates empty value', () => {
    const { result } = renderHook(() => useForm('email'));
    
    act(() => {
      result.current.validate();
    });
    
    expect(result.current.error).toBe('Preencha um valor');
  });
}); 