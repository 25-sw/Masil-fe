import styled from '@emotion/styled';

export const Wrapper = styled.div`
  min-height: calc(100vh - 80px);
  background: #fafbfc;
  padding: 2rem 0 3rem;
`;

export const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 1.5rem;
`;

export const PageHeader = styled.div`
  background: white;
  border-radius: 10px;
  padding: 2rem;
  margin-bottom: 1.5rem;
  border: 1px solid #e4e7eb;
`;

export const Header = styled.div`
  background: white;
  border-radius: 10px;
  padding: 2rem;
  margin-bottom: 1.5rem;
  border: 1px solid #e4e7eb;
`;

export const HeaderContent = styled.div`
  flex: 1;
`;

export const Title = styled.h1`
  font-size: 1.625rem;
  font-weight: 700;
  color: #1a1d23;
  margin-bottom: 0.375rem;
`;

export const Description = styled.p`
  font-size: 0.9375rem;
  color: #6b7280;
  line-height: 1.5;
  margin: 0;
`;

export const Subtitle = styled.p`
  font-size: 0.9375rem;
  color: #6b7280;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const AccountId = styled.span`
  color: #0c8948;
  font-weight: 600;
`;

export const AccountBadge = styled.div`
  padding: 0.625rem 1rem;
  background: #f3f4f6;
  border-radius: 8px;
  font-size: 0.875rem;
  color: #4b5563;
  white-space: nowrap;
`;

export const AccountLabel = styled.span`
  font-weight: 500;
`;

export const AccountValue = styled.span`
  font-weight: 600;
  color: #0c8948;
  margin-left: 0.5rem;
`;

export const Form = styled.div`
  background: white;
  border-radius: 10px;
  padding: 2rem;
  border: 1px solid #e4e7eb;
`;

export const FormCard = styled.div`
  background: white;
  border-radius: 10px;
  padding: 2rem;
  border: 1px solid #e4e7eb;
`;

export const Section = styled.div`
  margin-bottom: 2rem;

  &:last-of-type {
    margin-bottom: 0;
  }
`;

export const SectionHeader = styled.div`
  margin-bottom: 1.5rem;
  padding-bottom: 0.75rem;
  border-bottom: 2px solid #f3f4f6;
`;

export const SectionIcon = styled.span`
  display: none;
`;

export const SectionTitle = styled.h2`
  font-size: 1.0625rem;
  font-weight: 600;
  color: #1a1d23;
  margin-bottom: 1.25rem;
`;

export const SectionSubtitle = styled.p`
  font-size: 0.875rem;
  color: #6b7280;
  margin: 0;
`;

export const FormGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.25rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const FormGroup = styled.div<{ fullWidth?: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  ${({ fullWidth }) =>
    fullWidth &&
    `
    grid-column: 1 / -1;
  `}
`;

export const Label = styled.label`
  font-size: 0.875rem;
  font-weight: 500;
  color: #3e4753;
`;

export const Required = styled.span`
  color: #dc2626;
`;

export const Input = styled.input`
  padding: 0.6875rem 0.875rem;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  font-size: 0.9375rem;
  transition: all 0.15s ease;
  color: #1a1d23;

  &:focus {
    outline: none;
    border-color: #0c8948;
    box-shadow: 0 0 0 3px rgba(12, 137, 72, 0.08);
  }

  &::placeholder {
    color: #9ca3af;
  }
`;

export const Select = styled.select`
  padding: 0.6875rem 0.875rem;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  font-size: 0.9375rem;
  background: white;
  color: #1a1d23;
  cursor: pointer;
  transition: all 0.15s ease;

  &:focus {
    outline: none;
    border-color: #0c8948;
    box-shadow: 0 0 0 3px rgba(12, 137, 72, 0.08);
  }
`;

export const TextArea = styled.textarea`
  padding: 0.6875rem 0.875rem;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  font-size: 0.9375rem;
  background: white;
  color: #1a1d23;
  font-family: inherit;
  resize: vertical;
  min-height: 100px;
  transition: all 0.15s ease;

  &:focus {
    outline: none;
    border-color: #0c8948;
    box-shadow: 0 0 0 3px rgba(12, 137, 72, 0.08);
  }

  &::placeholder {
    color: #9ca3af;
  }
`;

export const HelperText = styled.p`
  font-size: 0.8125rem;
  color: #6b7280;
  margin: 0;
`;

export const CharCount = styled.p`
  font-size: 0.8125rem;
  color: #6b7280;
  text-align: right;
  margin: 0;
`;

export const Divider = styled.div`
  height: 1px;
  background: #e4e7eb;
  margin: 2rem 0;
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 0.75rem;
  justify-content: flex-end;
  margin-top: 2rem;
  padding-top: 1.5rem;
  border-top: 1px solid #e4e7eb;
`;

export const ActionBar = styled.div`
  display: flex;
  gap: 0.75rem;
  justify-content: flex-end;
  align-items: center;
  margin-top: 2rem;
  padding-top: 1.5rem;
  border-top: 1px solid #e4e7eb;
`;

export const SavedIndicator = styled.div`
  color: #059669;
  font-size: 0.875rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.375rem;
`;

export const SaveButton = styled.button`
  padding: 0.6875rem 2rem;
  background: #0c8948;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 0.9375rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.15s ease;

  &:hover {
    background: #0a7840;
  }

  &:active {
    transform: scale(0.98);
  }
`;

export const ButtonIcon = styled.span`
  font-size: 1.125rem;
`;

export const ResetButton = styled.button`
  padding: 0.6875rem 1.5rem;
  background: white;
  color: #6b7280;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  font-size: 0.9375rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.15s ease;

  &:hover {
    border-color: #9ca3af;
    background: #f9fafb;
  }
`;

export const InfoBox = styled.div`
  margin-top: 1.5rem;
  padding: 1rem 1.25rem;
  background: #fffbeb;
  border: 1px solid #fde68a;
  border-radius: 8px;
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
`;

export const InfoCard = styled.div`
  margin-top: 1.5rem;
  padding: 1rem 1.25rem;
  background: #fffbeb;
  border: 1px solid #fde68a;
  border-radius: 8px;
`;

export const InfoHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.625rem;
  margin-bottom: 0.75rem;
`;

export const InfoIcon = styled.div`
  font-size: 1.25rem;
  flex-shrink: 0;
`;

export const InfoIconWrapper = styled.div`
  font-size: 1.25rem;
`;

export const InfoTitle = styled.h3`
  font-size: 0.9375rem;
  font-weight: 600;
  color: #92400e;
  margin: 0;
`;

export const InfoList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const InfoItem = styled.li`
  color: #78350f;
  font-size: 0.875rem;
  padding-left: 1.25rem;
  position: relative;
  line-height: 1.5;

  &:before {
    content: '•';
    position: absolute;
    left: 0;
    font-weight: 700;
  }
`;

export const InfoText = styled.p`
  color: #78350f;
  font-size: 0.875rem;
  line-height: 1.5;
  margin: 0;
`;
