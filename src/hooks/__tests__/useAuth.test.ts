import { describe, it, expect, vi, beforeEach } from 'vitest'
import { renderHook } from '@testing-library/react'
import { useAuth } from '../useAuth'
import { useAuthStore } from '../../stores/authStore'

// Mock the auth store
vi.mock('../../stores/authStore')

const mockUseAuthStore = useAuthStore as any

describe('useAuth', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('returns auth state and methods', () => {
    const mockAuthState = {
      user: null,
      loading: false,
      signIn: vi.fn(),
      signUp: vi.fn(),
      signOut: vi.fn(),
      setUser: vi.fn(),
      setLoading: vi.fn()
    }

    mockUseAuthStore.mockReturnValue(mockAuthState)

    const { result } = renderHook(() => useAuth())

    expect(result.current).toEqual({
      user: null,
      loading: false,
      isAuthenticated: false,
      signIn: mockAuthState.signIn,
      signUp: mockAuthState.signUp,
      signOut: mockAuthState.signOut
    })
  })

  it('returns authenticated state when user exists', () => {
    const mockUser = {
      id: '1',
      email: 'test@example.com',
      firstName: 'John',
      lastName: 'Doe',
      createdAt: '2024-01-01',
      updatedAt: '2024-01-01'
    }

    const mockAuthState = {
      user: mockUser,
      loading: false,
      signIn: vi.fn(),
      signUp: vi.fn(),
      signOut: vi.fn(),
      setUser: vi.fn(),
      setLoading: vi.fn()
    }

    mockUseAuthStore.mockReturnValue(mockAuthState)

    const { result } = renderHook(() => useAuth())

    expect(result.current.isAuthenticated).toBe(true)
    expect(result.current.user).toEqual(mockUser)
  })

  it('returns loading state correctly', () => {
    const mockAuthState = {
      user: null,
      loading: true,
      signIn: vi.fn(),
      signUp: vi.fn(),
      signOut: vi.fn(),
      setUser: vi.fn(),
      setLoading: vi.fn()
    }

    mockUseAuthStore.mockReturnValue(mockAuthState)

    const { result } = renderHook(() => useAuth())

    expect(result.current.loading).toBe(true)
  })
})