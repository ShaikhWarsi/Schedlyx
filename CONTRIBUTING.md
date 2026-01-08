# Contributing to Schedlyx

Thank you for your interest in contributing to Schedlyx! This guide will help you get started.

##  Ways to Contribute

- **Bug Reports**: Found a bug? Let us know!
- **Feature Requests**: Have an idea? We'd love to hear it!
- **Code Contributions**: Fix bugs, add features, improve documentation
- **Documentation**: Help improve our docs and guides
- **Testing**: Help us test new features and find edge cases

##  Getting Started

### 1. Fork and Clone

```bash
# Fork the repository on GitHub, then:
git clone https://github.com/your-username/schedlyx.git
cd schedlyx
```

### 2. Set Up Development Environment

```bash
# Install dependencies
npm install

# Copy environment variables
cp .env.example .env.local

# Start development server
npm run dev
```

### 3. Create a Branch

```bash
# Create a new branch for your feature/fix
git checkout -b feature/your-feature-name
# or
git checkout -b fix/bug-description
```

##  Development Guidelines

### Code Style

We use ESLint and Prettier for consistent code formatting:

```bash
# Check linting
npm run lint

# Fix linting issues
npm run lint:fix

# Format code
npm run format
```

### Commit Messages

Follow conventional commits format:

```
feat: add user authentication
fix: resolve calendar sync issue
docs: update API documentation
style: format code with prettier
refactor: simplify booking logic
test: add unit tests for scheduling
```

### TypeScript

- Use TypeScript for all new code
- Define proper types and interfaces
- Avoid `any` type when possible

### Component Guidelines

- Use functional components with hooks
- Keep components small and focused
- Use proper prop types
- Include JSDoc comments for complex components

```tsx
interface BookingCardProps {
  /** The booking data to display */
  booking: Booking;
  /** Callback when booking is cancelled */
  onCancel: (bookingId: string) => void;
}

/**
 * Displays a booking card with cancel functionality
 */
export function BookingCard({ booking, onCancel }: BookingCardProps) {
  // Component implementation
}
```

##  Testing

### Running Tests

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage
```

### Writing Tests

- Write unit tests for utilities and hooks
- Write integration tests for complex components
- Use React Testing Library for component tests
- Mock external dependencies (Supabase, APIs)

Example test:

```tsx
import { render, screen } from '@testing-library/react';
import { BookingCard } from './BookingCard';

describe('BookingCard', () => {
  it('displays booking information', () => {
    const mockBooking = {
      id: '1',
      title: 'Team Meeting',
      date: '2024-01-15',
    };

    render(<BookingCard booking={mockBooking} onCancel={jest.fn()} />);
    
    expect(screen.getByText('Team Meeting')).toBeInTheDocument();
  });
});
```

##  Pull Request Process

### Before Submitting

1. **Test your changes**: Ensure all tests pass
2. **Lint your code**: Run `npm run lint:fix`
3. **Update documentation**: If you changed APIs or added features
4. **Add tests**: For new functionality

### PR Checklist

- [ ] Code follows project style guidelines
- [ ] Self-review completed
- [ ] Tests added/updated and passing
- [ ] Documentation updated if needed
- [ ] No breaking changes (or clearly documented)
- [ ] Linked to relevant issue(s)

### PR Template

When creating a PR, please include:

- **Description**: What does this PR do?
- **Type**: Bug fix, feature, documentation, etc.
- **Testing**: How was this tested?
- **Screenshots**: For UI changes
- **Breaking Changes**: Any breaking changes?

##  Reporting Issues

### Bug Reports

Please include:

- **Description**: Clear description of the bug
- **Steps to Reproduce**: Detailed steps
- **Expected Behavior**: What should happen
- **Actual Behavior**: What actually happens
- **Environment**: Browser, OS, Node version
- **Screenshots**: If applicable

### Feature Requests

Please include:

- **Problem**: What problem does this solve?
- **Solution**: Describe your proposed solution
- **Alternatives**: Any alternative solutions considered?
- **Additional Context**: Screenshots, mockups, etc.

##  Project Structure

```
src/
├── components/          # Reusable UI components
├── pages/              # Page components
├── hooks/              # Custom React hooks
├── lib/                # Utilities and configurations
├── types/              # TypeScript type definitions
├── stores/             # Zustand stores
└── styles/             # Global styles and Tailwind config
```

##  Community Guidelines

- Be respectful and inclusive
- Help others learn and grow
- Provide constructive feedback
- Follow our [Code of Conduct](CODE_OF_CONDUCT.md)

##  Questions?

- Open an issue for bugs or feature requests
- Start a discussion for questions or ideas
- Check existing issues before creating new ones

Thank you for contributing to Schedlyx! 